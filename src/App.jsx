/* eslint-disable */
import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "./Recoil/TokenAtom";
import axios from 'axios';

import Login from './pages/Login';
import SideNav from './pages/SideNav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {

  // 화면 크기 설정
  const [webBrowserHeight, setWebBrowserHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight;
      setWebBrowserHeight(height);
    };
    // 컴포넌트가 마운트될 때와 창의 크기가 변경될 때마다 높이 업데이트
    window.addEventListener('resize', updateHeight);
    updateHeight(); // 컴포넌트가 마운트된 후에도 한 번 호출
    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함
  
  // 로그인 시 화면 다르게 보이는 것 설정
  const isLogin = useRecoilValue(isLoginSelector);
  const rightMarginClassName = isLogin ? 'rightMarginBox' : 'rightMarginBox hidden';
  const AppClassName = isLogin ? 'App' : 'App blue';

  // axios 전역 설정
  axios.defaults.withCredentials = true; // withCredentials 전역 설정
  
  return (
    <Router>
      <div className={AppClassName}>
        <SideNav webBrowserHeight={webBrowserHeight} />
        <div className='homeBox'>
          <Routes>
            {/* 로그인 페이지 */}
            <Route path="/login" element={<Login webBrowserHeight={webBrowserHeight} /> } />


            {/* 로그인시 이용할 수 잇는 페이지 */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home webBrowserHeight={webBrowserHeight}/>} />
              <Route path="/home" element={<Home webBrowserHeight={webBrowserHeight}/>} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile/:memberId" element={<Profile webBrowserHeight={webBrowserHeight}/>}  />
            </Route>
          </Routes>
        </div>
        <div className={rightMarginClassName}>
          오른쪽 박스
        </div>
      </div>
    </Router>
  );
}

export default App;
