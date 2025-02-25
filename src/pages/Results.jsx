import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getResult, removeResult, updateResultVisibility } from "../api/testResultsAPI";
import useBearsStore from "../zustand/bearsStore";
import { QUERY_KEYS } from "../contents/queryKeys";

const Results = () => {
  const queryClient = useQueryClient();
  const loginUserId = useBearsStore((state) => state.user.userId);

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

  const filteredResults = results.filter((result) => result.visibility === true || result.userId === loginUserId);

  const changeVisibilityHandler = (id, visibility) => {
    updateVisibility.mutate({ id, visibility: !visibility });
  };

  const onRemoveHandler = (id) => {
    rmResult.mutate(id);
  };

  if (isPending) {
    return <div>데이터 로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 에러 발생...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-14 mb-14">모든 검사 결과</h1>
      <ul className="w-5/6">
        {filteredResults.map((result) => {
          return (
            <li className="mb-5" key={result.id}>
              <h3>검사 결과: {result.result}</h3>
              <p className="my-3">{result.nickname}</p>
              <p className="my-3">검사 날짜: {result.date}</p>
              <p className="my-3">{mbtiDescriptions[result.result]}</p>
              {result.userId === loginUserId && (
                <>
                  <button className="mr-3" onClick={() => changeVisibilityHandler(result.id, result.visibility)}>
                    {result.visibility === true ? "비공개로 전환" : "공개로 전환"}
                  </button>
                  <button onClick={() => onRemoveHandler(result.id)}>삭제</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
