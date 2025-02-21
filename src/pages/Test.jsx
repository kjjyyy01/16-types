const Test = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-14 mt-14">
        <h1 className="text-5xl font-bold">MBTI 유형 검사</h1>
        <ul>
          <li className="flex flex-col items-start justify-center">
            <p className="mb-1 font-semibold">데이트 중에도 GitHub를 체크하는 당신, 연인이 그런 당신을 이해할까요?</p>
            <label htmlFor="top-radio">
              <input type="radio" name="understanding" id="top-radio" />
              <span>이해할 것</span>
            </label>
            <label htmlFor="bottom-radio">
              <input type="radio" name="understanding" id="bottom-radio" />
              이해하지 못할 것
            </label>
          </li>
        </ul>
        <button type="submit">검사 완료</button>
      </form>
    </div>
  );
};

export default Test;
