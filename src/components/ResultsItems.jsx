import { mbtiDescriptions } from "../utils/mbtiCalculator";

const ResultsItems = ({ rmResult, updateVisibility, filteredResults, loginUserId }) => {
  const onRemoveHandler = (id) => {
    rmResult.mutate(id);
  };

  const changeVisibilityHandler = (id, visibility) => {
    updateVisibility.mutate({ id, visibility: !visibility });
  };
  return (
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
  );
};

export default ResultsItems;
