import { Link } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Header = () => {
  const { isLogin, logout } = useAuthStore((state) => state);

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
            <>
              <Link to={"/profile"}>
                <button className="mr-5 bg-inherit text-text" type="button">
                  마이페이지
                </button>
              </Link>
              <Link to={"/results"}>
                <button className="mr-5 bg-inherit text-text" type="button">
                  모든 결과 보기
                </button>
              </Link>
              <button className="mr-5 bg-inherit text-text" type="button" onClick={logout}>
                로그아웃
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="mr-5 bg-inherit text-text" type="button">
                로그인
              </button>
            </Link>
          )}
        </section>
      </form>
    </div>
  );
};

export default Header;
