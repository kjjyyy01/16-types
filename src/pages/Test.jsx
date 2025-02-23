import { questions } from "../data/questions";

const Test = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center gap-10 mt-14">
        <h1 className="text-5xl font-bold">MBTI 유형 검사</h1>
        <ul className="w-2/5">
          {questions.map((question) => {
            return (
              <li key={question.id} className="flex flex-col mb-5">
                <p className="font-semibold">{question.question}</p>
                <label htmlFor={`top-radio-${question.id}`}>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    id={`top-radio-${question.id}`}
                    className="w-auto m-4"
                  />
                  {question.options[0]}
                </label>
                <label htmlFor={`bottom-radio-${question.id}`}>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    id={`bottom-radio-${question.id}`}
                    className="w-auto m-4"
                  />
                  {question.options[1]}
                </label>
              </li>
            );
          })}
        </ul>
        <button className="mb-14">검사 완료</button>
      </form>
    </div>
  );
};

export default Test;
