import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResultsItems from "./ResultsItems";
import useAuthStore from "../zustand/authStore";
import { QUERY_KEYS } from "../contents/queryKeys";
import { getResult, removeResult, updateResultVisibility } from "../api/testResultsAPI";

//* 모든 검사 결과를 불러오고, 공개/비공개 할 데이터 필터링
const ResultsList = () => {
  const queryClient = useQueryClient();
  const loginUserId = useAuthStore((state) => state.user.userId);

  const {
    data: results,
    isPending,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.TEST_RESULTS],
    queryFn: getResult,
  });

  const rmResult = useMutation({
    mutationFn: removeResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TEST_RESULTS],
      });
    },
  });

  const updateVisibility = useMutation({
    mutationFn: updateResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TEST_RESULTS],
      });
    },
  });

  if (isPending) {
    return <div>데이터 로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 에러 발생...</div>;
  }
  const filteredResults = results.filter((result) => result.visibility === true || result.userId === loginUserId);

  return (
    <ResultsItems
      rmResult={rmResult}
      updateVisibility={updateVisibility}
      filteredResults={filteredResults}
      loginUserId={loginUserId}
    />
  );
};

export default ResultsList;
