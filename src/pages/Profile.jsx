const Profile = () => {
  return (
    <div>
      <h1>프로필 수정</h1>
      <form>
        <input type="text" pattern="^{2,6}$" required />
        <button>수정 완료</button>
      </form>
    </div>
  );
};

export default Profile;
