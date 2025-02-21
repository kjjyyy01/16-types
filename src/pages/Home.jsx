import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-14 mt-20">
      <h1 className="text-5xl font-bold">16 Types</h1>
      <p>16가지 성격 유형중 나는 어떤 유형일까? 무료로 검사해보세요!</p>
      <ul className="flex flex-row items-center justify-center gap-8 ">
        <li className="w-1/5 h-2/5 ">
          <h3 className="text-xl mb-4 font-bold">성격 유형 검사</h3>
          <p>자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
        </li>
        <li className="w-1/5 h-2/5">
          <h3 className="text-xl mb-4 font-bold">성격 유형 이해</h3>
          <p>다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.</p>
        </li>
        <li className="w-1/5 h-2/5">
          <h3 className="text-xl mb-4 font-bold">팀 평가</h3>
          <p>팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
        </li>
      </ul>
      <Link to={"/test"}>
        <button>성격 유형 찾으러가기</button>
      </Link>
    </div>
  );
};

export default Home;
