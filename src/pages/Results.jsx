import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getResult, removeResult } from "../api/testResult";

const Results = () => {
  const queryClient = useQueryClient();

  const {
    data: results,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
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

  return (
    <div>
      <h1>모든 검사 결과</h1>
      <ul className="mb-10">
        {results.map((result) => {
          return (
            <li key={result.id}>
              <h3>검사 결과: {result.result}</h3>
              <button type="button" onClick={() => onRemoveHandler(result.id)}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
