import { create } from "zustand";

//* 로그인 여부에 대한 상태, 유저 정보, 로그인, 로그아웃에 대한 상태를 전역으로 관리
const useAuthStore = create((set) => {
  return {
    isLogin: !!localStorage.getItem("accessToken"),
    user: JSON.parse(localStorage.getItem("loginUser")) || null,
    login: () => {
      set((state) => {
        return {
          login: (state.isLogin = true),
        };
      });
    },
    logout: () => {
      set((state) => {
        return {
          logout: ((state.isLogin = false), localStorage.clear(), alert("로그아웃 되었습니다.")),
        };
      });
    },
  };
});

export default useAuthStore;
