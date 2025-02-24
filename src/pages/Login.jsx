import { useEffect, useState } from "react";
import { authAPI } from "../axios/api";
import { useNavigate } from "react-router-dom";
import useBearsStore from "../zustand/bearsStore";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [form, setForm] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();
  const { login, isLogin } = useBearsStore((state) => state);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      id: "",
      password: "",
      nickname: "",
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      const { data } = await authAPI.post("/login", {
        id: form.id,
        password: form.password,
      });
      alert("로그인이 완료되었습니다.");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("loginUser", JSON.stringify(data));
      login();
      navigate("/");
      resetForm();
      console.log("data", data);
    } else {
      await authAPI.post("/register", {
        id: form.id,
        password: form.password,
        nickname: form.nickname,
      });
      alert("회원가입이 완료되었습니다.");
      setIsLoginMode(true);
      resetForm();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-1/5 mt-20 bg-card flex flex-col items-center justify-center p-8 rounded-md shadow-[0_0_10px_#DDBC89]">
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center gap-10 w-4/5">
          <h1 className="text-5xl font-bold">{isLoginMode ? "로그인" : "회원가입"}</h1>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={onChangeHandler}
            placeholder="아이디"
            pattern="^([a-z0-9]){6,50}$"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeHandler}
            placeholder="비밀번호"
            pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,15}$"
            required
          />
          {!isLoginMode && (
            <input
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={onChangeHandler}
              placeholder="닉네임"
              pattern="^{2,6}$"
              required
            />
          )}
          <button>{isLoginMode ? "로그인" : "회원가입"}</button>
        </form>
        <p className="mt-7 text-base">{isLoginMode ? "아직 회원이 아니신가요?" : "이미 회원 이신가요?"}</p>
        <button type="button" onClick={() => setIsLoginMode((prev) => !prev)} className="bg-inherit text-text">
          {isLoginMode ? "회원가입" : "로그인"}
        </button>
      </main>
    </div>
  );
};

export default Login;
