import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <form>
        <input type="text" placeholder="아이디" pattern="^([a-z0-9]){6,50}$" required />
        <input
          type="password"
          placeholder="비밀번호"
          pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,15}$"
          required
        />
        <button type="submit">로그인</button>
      </form>
      <span>아직 회원이 아니신가요?</span>
      <Link to={"/signup"}>
        <button type="button">회원가입</button>
      </Link>
    </div>
  );
};

export default Login;
