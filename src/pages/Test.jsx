import { useState } from "react";
import { questions } from "../data/questions";
import { Link } from "react-router-dom";

const Test = () => {
  const [result, setResult] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {!result ? (
        <main>
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
            <button onClick={() => setResult((prev) => !prev)} className="mb-14">
              검사 완료
            </button>
          </form>
        </main>
      ) : (
        <main className="w-full flex justify-center items-center">
          <div className="h-full w-1/3 mt-14 flex flex-col justify-start bg-card shadow-[5px_5px_5px_#DDBC89] rounded-md ">
            <h1 className="text-5xl font-bold m-10">검사결과: ISTJ </h1>
            <p className="ml-10 mb-10">당신의 성격은 ~~</p>
            <Link to={"/results"}>
              <button className="w-1/3">모든 결과 보기</button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default Test;
