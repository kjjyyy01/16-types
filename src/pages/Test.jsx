const Test = () => {
  return (
    <div>
      <h1>MBTI 유형 검사</h1>
      <ul>
        <li>
          <p>데이트 중에도 GitHub를 체크하는 당신, 연인이 그런 당신을 이해할까요?</p>
          <label htmlFor="top-radio">
            <input type="radio" name="understanding" id="top-radio" />
            이해할 것
          </label>
          <label htmlFor="bottom-radio">
            <input type="radio" name="understanding" id="bottom-radio" />
            이해하지 못할 것
          </label>
        </li>
      </ul>
      <button>검사 완료</button>
    </div>
  );
};

export default Test;
