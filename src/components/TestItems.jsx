import { questions } from "../data/questions";

const TestItems = ({ setAnswer }) => {
  const onHandleRadioChange = (e, type, id) => {
    setAnswer((prev) => {
      const existingAnswer = prev.find((data) => data.id === id);
      if (existingAnswer) {
        return prev.map((data) => (data.id === id ? { ...data, answer: e.target.value } : data));
      } else {
        return [...prev, { id, type, answer: e.target.value }];
      }
    });
  };
  return (
    <>
      {questions.map((question) => (
        <li key={question.id} className="flex flex-col mb-5">
          <p className="font-semibold">{question.question}</p>
          {question.options.map((option, index) => (
            <label key={index} htmlFor={`radio-${question.id}-${index}`}>
              <input
                type="radio"
                name={`answer-${question.id}`}
                id={`radio-${question.id}-${index}`}
                className="w-auto m-4"
                value={question.type.split("/")[index]}
                onChange={(e) => onHandleRadioChange(e, question.type, question.id)}
                required
              />
              {option}
            </label>
          ))}
        </li>
      ))}
      ;
    </>
  );
};

export default TestItems;
