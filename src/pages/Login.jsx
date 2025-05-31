import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { TokenAtom } from '../Recoil/TokenAtom';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Login.css";

function Login({webBrowserHeight}) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const setAccessToken = useSetRecoilState(TokenAtom);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.redirectedFrom?.pathname || '/'


    const handleSubmit = (event) => {
        event.preventDefault();
        
        try{
            const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
            axios.post(`${BASE_URL}/login`, {customId:id, password}).then((res)=>{
                if(res.status === 200){
                    setAccessToken(res.status);
                    navigate(from);
                }
            })

        } catch(error){
            console.log(error);
        }
    }


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='Login'  style={{ height: `${webBrowserHeight}px` , width: `${windowWidth}px`}}>
            <div className='loginBox'>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                        style={{filter: "brightness(0%)"}}
                    />
                    <h3 style={{TextDecoder:'bolder'}}>Login</h3>
                    <div className="mb-3">
                    <label className='loginBox'>ID</label>
                    <input
                        type="text"
                        className="form-control"
                        autoFocus
                        placeholder="Enter id"
                        value={id}
                        onChange={(e) => {setId(e.target.value)}}
                    />
                    </div>
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password} 
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    </div>
                    <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                        </label>
                    </div>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>

            {/* <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='ID'>ID:</label>
                    <input type='text' autoFocus id='id' value={id} onChange={(e) => {setId(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <button type='submit'>Login</button>
            </form> */}
        </div>
    );
}

export default Login;
