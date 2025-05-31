import React, {useState, useEffect, useContext} from "react";
import './SideNav.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../Recoil/TokenAtom";


function SideNav({webBrowserHeight}) {
  const isLogin = useRecoilValue(isLoginSelector);
  const navClassName = isLogin ? 'SideNav' : 'SideNav hidden';

  const [activeMenu, setActiveMenu] = useState('');
  // 메뉴를 클릭할 때 상태를 변경합니다.
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className={navClassName}
      style={{ height: `${webBrowserHeight}px` }}>
      <div id="sideTop">
        <Link to="/" id="logoBox"
          onClick={() => handleMenuClick('home')}
        > 
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"></img>
        </Link>
      </div>
      
      <div id="sideMiddle">
        <Link 
          to="/home" 
          className="sideTr"
          onClick={() => handleMenuClick('home')}
          style={{ fontWeight: activeMenu === 'home' ? 'bold' : 'normal' , textDecoration: 'none'}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="sideIcon"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>                    
            <span>Home</span>
        </Link>


        <Link 
          to="/explore" 
          className="sideTr"
          onClick={() => handleMenuClick('explore')}
          style={{ fontWeight: activeMenu === 'explore' ? 'bold' : 'normal' , textDecoration: 'none'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="sideIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <span>Explore</span>
        </Link>
        <Link to="/notification" className="sideTr" style={{ textDecoration: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="sideIcon"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                    <span>Notification</span>
        </Link>
        <Link to="/message" className="sideTr" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  className="sideIcon"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>              
          <span>Messages</span>
        </Link>
        <Link 
          to="/profile/1" 
          className="sideTr"
          onClick={() => handleMenuClick('profile')}
          style={{ fontWeight: activeMenu === 'profile' ? 'bold' : 'normal' , textDecoration: 'none'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="sideIcon"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>                    
          <span>Profile</span>
        </Link>
        <div className="sideTr">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="sideIcon"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>                    
          <span>More</span>
        </div>
      </div>
      
      <div id="sideBottom">
        <div className="sideTr">
          <div id="prof"></div>
          <span>ddd</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;