import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getResult, removeResult } from "../api/testResultsAPI";
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

  const { mutate } = useMutation({
    mutationFn: removeResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const onRemoveHandler = (id) => {
    mutate(id);
  };

  if (isPending) {
    return <div>데이터 로딩중...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 에러 발생...</div>;
  }
  console.log(results);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-14 mb-14">모든 검사 결과</h1>
      <ul className="w-5/6">
        {results.map((result) => {
          return (
            <li className="mb-5" key={result.id}>
              <h3>검사 결과: {result.result}</h3>
              <p className="my-3">{result.nickname}</p>
              <p className="my-3">검사 날짜: {result.date}</p>
              <p className="my-3">{mbtiDescriptions[result.result]}</p>
              {result.userId === loginUserId && (
                <>
                  <button className="mr-3">비공개로 전환</button>
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
