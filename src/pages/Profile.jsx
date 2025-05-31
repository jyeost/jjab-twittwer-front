import React , { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostDiv from "../components/PostDiv";
import "./Profile.css";

function Profile({webBrowserHeight}){

    const [profileData, setprofileData] = useState('');
    const { memberId } = useParams();    
    
    useEffect(() => {        
        const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
        axios.get(`${BASE_URL}/members/${memberId}`)
            .then(response => {
            setprofileData(response.data); // axios로 불러온 값을 상태에 저장
            console.log(response.data);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출

    return (
        <div className="ProfileClass border-start border-end" style={{ height: `${webBrowserHeight}px` }}>
            <div className="border-bottom">
                <div className="profileBackBox">
                    <div className="arrowLeftIconBox hoverEffect2">
                        <svg className="arrowLeftIcon hoverEffect2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </div>
                    <div className="nickName">{profileData.nickName}</div>
                    <div className="postsCount">{profileData.postsCount} posts</div>
                </div>

                <div className="profileDetailBox">
                    <div className="profileBackImageBox"></div>
                    <div className="profileImageBox">
                        <img src={profileData.profileImage} className='profilePageImage hoverEffect'/>
                    </div>
                    <div className="p-3 float-start text-start w-100">
                        <button className="followButton">follow</button>
                        <div className="profileNickName fs-5">
                            {profileData.nickName}
                        </div>
                        <div className="text-muted">
                            @{profileData.customId}
                        </div>
                        <div className="mt-3 text-muted">
                            {/* Joined April 2019 */}
                            Joined &nbsp; {new Date(profileData.joinDate).toLocaleDateString("en-us", {year: "numeric", month: "long"})}
                        </div>
                        <div className="mt-2">
                            <span className="underLineHovereffect mr-3"><b>234</b> Following</span>   
                            <span> &nbsp; &nbsp; </span>
                            <span className="underLineHovereffect"><b>49</b> Followers</span>
                        </div>
                    </div>
                </div>
            </div>

            <PostDiv data={null} memberId={memberId} />
        </div>
    );
}

export default Profile;