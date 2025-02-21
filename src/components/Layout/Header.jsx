const Header = () => {
  return (
    <div className="bg-header">
      <form className="flex justify-between items-center">
        <span>
          <a href="/">
            <img src="/src/assets/main-logo.png" alt="16타입 로고" className="h-20 m-4" />
          </a>
        </span>
        <section>
          <button className="mr-5 bg-inherit text-text">로그인</button>
          <button className="mr-5 bg-inherit text-text">회원가입</button>
        </section>
      </form>
    </div>
  );
};

export default Header;
