import { create } from "zustand";

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
