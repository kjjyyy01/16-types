import ResultsList from "../components/ResultsList";

const Results = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-14 mb-14">모든 검사 결과</h1>
      <ResultsList />
    </div>
  );
};

export default Results;
