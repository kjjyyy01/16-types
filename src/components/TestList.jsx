import TestItems from "./TestItems";

const TestList = ({ setAnswer }) => {
  return (
    <ul className="w-3/5">
      <TestItems setAnswer={setAnswer} />
    </ul>
  );
};

export default TestList;
