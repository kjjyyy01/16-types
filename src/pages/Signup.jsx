import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-1/5 mt-20 bg-card flex flex-col items-center justify-center p-10 rounded-md shadow-[0_0_10px_#DDBC89]">
        <form className="flex flex-col items-center justify-center gap-10 ">
          <h1 className="text-5xl font-bold">회원가입</h1>
          <input type="text" placeholder="아이디" pattern="^([a-z0-9]){6,50}$" required />
          <input
            type="password"
            placeholder="비밀번호"
            pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,15}$"
            required
          />
          <input type="text" placeholder="닉네임" pattern="^{2,6}$" required />
          <button>회원가입</button>
        </form>
        <p className="mt-7 text-base">이미 회원 이신가요?</p>
        <Link to={"/login"}>
          <button className="bg-inherit text-text">로그인하고 계속하세요!</button>
        </Link>
      </main>
    </div>
  );
};

export default Signup;
