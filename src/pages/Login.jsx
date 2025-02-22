import { useState } from "react";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-1/5 mt-20 bg-card flex flex-col items-center justify-center p-10 rounded-md shadow-[0_0_10px_#DDBC89]">
        <form className="flex flex-col items-center justify-center gap-10 w-3/5">
          <h1 className="text-5xl font-bold">{isLoginMode ? "회원가입" : "로그인"}</h1>
          <input type="text" placeholder="아이디" pattern="^([a-z0-9]){6,50}$" required />
          <input
            type="password"
            placeholder="비밀번호"
            pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,15}$"
            required
          />
          {isLoginMode && <input type="text" placeholder="닉네임" pattern="^{2,6}$" required />}
          <button>{isLoginMode ? "회원가입" : "로그인"}</button>
        </form>
        <p className="mt-7 text-base">{isLoginMode ? "이미 회원 이신가요?" : "아직 회원이 아니신가요?"}</p>
        <button onClick={() => setIsLoginMode((prev) => !prev)} className="bg-inherit text-text">
          {isLoginMode ? "로그인" : "회원가입"}
        </button>
      </main>
    </div>
  );
};

export default Login;
