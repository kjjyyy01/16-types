import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addResult } from "../api/testResultsAPI";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { authAPI } from "../axios/api";
import TestList from "../components/TestList";

//* 테스트를 진행하고 결과를 db에 추가하고 검사 결과를 보여주는 컴포넌트
const Test = () => {
  const [isResult, setIsResult] = useState(false);
  const [answers, setAnswer] = useState([]);
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");

  const queryClient = useQueryClient();
  const mbtiResult = calculateMBTI(answers);
  const mbtiResultDescription = mbtiDescriptions[mbtiResult];

  useEffect(() => {
    const getLoginData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authAPI.get("/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setNickname(data.nickname);
      setUserId(data.id);
    };
    getLoginData();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    mutate({
      nickname: nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleDateString("ko-KR"),
      userId,
    });
    setIsResult(true);
  };

  const { mutate } = useMutation({
    mutationFn: addResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return (
    <>
      {!isResult ? (
        <main>
          <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center gap-10 mt-14">
            <h1>MBTI 유형 검사</h1>
            <TestList setAnswer={setAnswer} />
            <button className="mb-14">검사 완료</button>
          </form>
        </main>
      ) : (
        <main className="w-full flex justify-center items-center">
          <div className="h-full w-1/3 mt-14 p-10 flex flex-col justify-start bg-card shadow-[5px_5px_5px_#DDBC89] rounded-md ">
            <h1 className="mb-10">검사결과: {mbtiResult}</h1>
            <p className="mb-10">{mbtiResultDescription}</p>
            <Link to={"/results"} className="flex justify-center">
              <button className="w-1/3">모든 결과 보러가기</button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default Test;
