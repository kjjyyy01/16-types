# 16 Types

</div> 

## 📝 소개
📅개발 기간: 2025.02.20 ~ 2025.02.25

zustand, tanstackQuery를 사용한  mbit 검사 사이트 "16 Types"<br/>
"16 Types"의 의미는 mbti 종류가 16개이기 때문에 16가지를 의미하기위해 이름을 지었습니다.

<br />

### 💬 배포 링크
https://16-types.vercel.app/

### ✨ 화면 구성
![Image](https://github.com/user-attachments/assets/15caef2f-03fc-4b88-baba-eb70433980dd)
![Image](https://github.com/user-attachments/assets/6639b312-08c1-4a59-93ad-038189fc08f1)
![Image](https://github.com/user-attachments/assets/fff90c2a-b78b-4789-880f-e4d92460c708)


<br />

## 📄 기능 소개
- mbti계산기를 통해 결과를 도출, 도출한 결과물을 useMutation을 사용해 json-server에 추가
- 추가된 검사결과에서 삭제 버튼을 누르면 json-server와 브라우저에서 삭제되는 기능
- 닉네임을 수정할 수 있는 기능
- 검사한 결과에 대해 공개/비공개할 수 있는 기능
- 로그인/로그아웃 기능

<br />

## ⚙ 기술 스택

### Structure
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
</div>
    
### Development
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" height="40" alt="zustand logo"  />
  <img src="https://i.ibb.co/hF6tvRw5/react-query-seeklogo.png" height="40" alt="tanstack-query-logo"  />
</div>


<br />

## 📁 프로젝트 구조
```
📁mbti-test
├─ 📁public
│  ├─ main-logo.png
│  └─ website-logo.png
├─ 📁src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ 📁api
│  │  └─ testResultsAPI.js
│  ├─ 📁axios
│  │  └─ api.js
│  ├─ 📁components
│  │  ├─ Header.jsx
│  │  ├─ ResultsItems.jsx
│  │  ├─ ResultsList.jsx
│  │  ├─ TestItems.jsx
│  │  └─ TestList.jsx
│  ├─ 📁contents
│  │  └─ queryKeys.js
│  ├─ 📁data
│  │  └─ questions.js

│  ├─ 📁pages
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Results.jsx
│  │  └─ Test.jsx
│  ├─ 📁shared
│  │  └─ Router.jsx
│  ├─ 📁utils
│  │  └─ mbtiCalculator.js
│  └─ 📁zustand
│     └─ authStore.js
├─ .env
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vercel.json
├─ vite.config.js
├─ README.md
└─ yarn.lock
```
<br />

## 트러블 슈팅
- https://velog.io/@kjjyyy01/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-Vecel%EB%B0%B0%ED%8F%AC-%ED%9B%84-url%EA%B2%BD%EB%A1%9C%EB%A1%9C-%EC%A7%81%EC%A0%91-%EC%9D%B4%EB%8F%99-%EB%B6%88%EA%B0%80-%ED%98%84%EC%83%81

<br />

## 프로젝트 소감
- zustand와 tanstackQuery를 이용한 프로젝트를 하면서, zustand에 전역 상태 관리를 쉽게할 수 있는 편리함을 느꼈고, tanstackQuery와 json-server를 사용하면서 데이터 `캐싱`이라는 용어에 대해 느낌을 잡을 수 있었다. 하지만 프로젝트를 진행하면서 중간중간 방향성을 많이 잃어버렸다. json-server에 있는 데이터를 useQuery로 가지고 와고 useMutation으로 추가, 삭제, 수정하는 과정은 말로는 알겠으나 요청하는 함수 로직을 작성하는 것이 어려웠다. 그 중에서도 인자를 어떤 것을 줘야하는지 모르겠다. 이 부분에 대해서는 공부헤볼 것이다. 이번 프로젝트는 쉽지 않았다, 하루 안에 강의를 보고 프로젝트에 적용하는 것이 어려웠기 때문에 해설강의와 수업 영상을 돌려보면서 복습을 해야겠다.
