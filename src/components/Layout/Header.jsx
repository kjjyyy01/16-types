import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-header">
      <form className="flex justify-between items-center">
        <span>
          <a href="/">
            <img src="/public/main-logo.png" alt="16타입 로고" className="h-20 m-4" />
          </a>
        </span>
        <section>
          <button className="mr-5 bg-inherit text-text" type="button" onClick={() => navigate("/login")}>
            로그인
          </button>
        </section>
      </form>
    </div>
  );
};

export default Header;
