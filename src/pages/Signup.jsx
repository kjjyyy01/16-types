import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <input type="text" pattern="^([a-z0-9]){6,50}$" required />
        <input type="password" pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,15}$" required />
        <input type="text" pattern="^{2,6}$" required />
        <button>회원가입</button>
      </form>
      <Link to={"/login"}>
        <button>로그인하고 계속하세요!</button>
      </Link>
    </div>
  );
};

export default Signup;
