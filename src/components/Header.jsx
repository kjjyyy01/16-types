import { useNavigate } from "react-router-dom";
import useBearsStore from "../zustand/bearsStore";

const Header = () => {
  const { isLogin, logout } = useBearsStore((state) => state);
  const navigate = useNavigate();

  return (
    <div className="bg-header">
      <form className="flex justify-between items-center">
        <span>
          <a href="/">
            <img src="/main-logo.png" alt="16타입 메인 로고" className="h-20 m-4" />
          </a>
        </span>
        <section>
          {isLogin ? (
            <button className="mr-5 bg-inherit text-text" type="button" onClick={logout}>
              로그아웃
            </button>
          ) : (
            <button className="mr-5 bg-inherit text-text" type="button" onClick={() => navigate("/login")}>
              로그인
            </button>
          )}
        </section>
      </form>
    </div>
  );
};

export default Header;
