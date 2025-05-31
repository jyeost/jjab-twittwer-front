/* eslint-disable */
// import React, {useState} from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   //  state 는 
//   // 1. 변수 대신 쓰는 데이터 저장공간
//   // 2. useState()를 이용해 만들어야 함 
//   let [글제목, 글제목변경] = useState('남자 코트 추천');
//   let [글제목2, 글제목변경2] = useState('남자 코트 추천2');
//   let [글제목3, 글제목변경3] = useState(['남자 코트 추천3', '강남 우동 맛집']);

//   // 쓰는 이유 ? 웹이 app처럼 동작하게 만들고 싶어서 
//   // state에 데이터를 저장해 놓고, 변경이 된다면 HTML이 자동으로 재랜더링이 되기 때문에
//   // (제목을 정렬하던가 제목을 수정하든가... )

//   let response = '444444';
//   // 그냥 변수는 변경이 되더라도 자동 재랜더링이 안됨 

//   function 함수(){
//     return 1+1;
//   }

//   function 제목바꾸기(){
//     var newArr = [...글제목3];
//     newArr[0] = '여자 코트 추천';
//     // 글제목변경3(['여자 코트 추천3', '강남 우동 맛집']);
//     글제목변경3(newArr);
//   }

//   let [따봉, 따봉변경] = useState(0);

//   const [responseData, setResponseData] = useState('응답');
  

//   const callApi = () => {
//     const BASE_URL = process.env.REACT_APP_BASE_URL;
//     axios.get(`${BASE_URL}/api`)
//       .then(function (response) {
//         // 성공 핸들링
//         console.log(response);
//         setResponseData(response.data); // API 응답 데이터 저장
//       })
//       .catch(function (error) {
//         // 에러 핸들링
//         console.log(error);
//       })
//       .then(function () {
//         // 항상 실행되는 영역
//       });
//   };

//   return (
//     <div className="App">
//       {response} <br/>
//       {함수()}
//       <br/>
//       <img src={logo}/>
//       <button onClick={제목바꾸기}>버튼</button>
//       <div className = {response}>
//         {글제목} <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉} <br/>
//         {글제목2}<br/>
//         {글제목3}<br/>
//         {글제목3[0]}<br/>
//         {글제목3[1]}<br/>

//       </div>
//       <div>
//         <button onClick={callApi}>Call API</button>
//         <p>{responseData}</p>
//       </div>
//       <Modal></Modal>
//     </div>

//   );
// }

// // component
// // 대문자로 시작 
// function Modal(){
//   return (
//     <div> 모달 내용 </div>
//   )
// }

// export default App;

