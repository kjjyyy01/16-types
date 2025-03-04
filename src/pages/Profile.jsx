import { useEffect, useState } from "react";
import { authAPI } from "../axios/api";

const Profile = () => {
  const [nickname, setNickname] = useState("");

  //* 기존 닉네임 불러오는 함수 최초 리렌더링 후 1회만 불러오도록 작성
  useEffect(() => {
    const getLoginData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await authAPI.get("/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setNickname(data.nickname);
    };
    getLoginData();
  }, []);

  //* 프로필(닉네임) 변경 함수
  const updateNickname = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const { data } = await authAPI.patch(
      "/profile",
      {
        avatar: [],
        nickname: nickname,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setNickname(data.nickname);
    alert("닉네임 수정이 완료되었습니다.");
  };

  return (
    <div className="mt-10 flex flex-col justify-center items-center ">
      <h1 className="my-10">프로필 수정</h1>
      <form className="flex flex-col items-center" onSubmit={updateNickname}>
        <input
          className="mb-3"
          type="text"
          pattern="^[a-z0-9]{2,10}$"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <button>수정 완료</button>
      </form>
    </div>
  );
};

export default Profile;
