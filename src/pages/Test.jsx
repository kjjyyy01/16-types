import { useState } from "react";
import { questions } from "../data/questions";
import { Link } from "react-router-dom";
import { mbtiDescriptions, mbtiResult } from "../utils/mbtiCalculator";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addResult } from "../api/testResult";

const Test = () => {
  const [result, setResult] = useState(null);

  const queryClient = useQueryClient();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    mutate({ mbti: mbtiResult });
  };

  const { mutate } = useMutation({
    mutationFn: addResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return (
    <>
      {!result ? (
        <main>
          <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center gap-10 mt-14">
            <h1 className="text-5xl font-bold">MBTI 유형 검사</h1>
            <ul className="w-2/5">
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
                      />
                      {option}
                    </label>
                  ))}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setResult((prev) => !prev)} className=" mb-14">
              검사 완료
            </button>
          </form>
        </main>
      ) : (
        <main className="w-full flex justify-center items-center">
          <div className="h-full w-1/3 mt-14 p-10 flex flex-col justify-start bg-card shadow-[5px_5px_5px_#DDBC89] rounded-md ">
            <h1 className="text-5xl font-bold mb-10">검사결과: {mbtiResult}</h1>
            <p className="mb-10">{mbtiDescriptions[mbtiResult]}</p>
            <Link to={"/results"} className="flex justify-center">
              <button type="button" className="w-1/3">
                모든 결과 보기
              </button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default Test;
