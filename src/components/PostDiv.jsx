import React from "react";
import { Navigate } from "react-router-dom";


const PostDiv = ({data, memberId}) => {

    const redirectToProfile = (memberId) => {
        <Navigate to={'/profile/'+memberId}></Navigate>
    };

    return (
        <div className='tweetBox border-bottom'>
            <div className="postProfileBox mt-1">
                <img src="/image/empty_profile.jpg" alt="프로필 이미지" className='profile mt-2 hoverEffect'/>
            </div>
            <div className='showTweetBox'>
                <div className='mt-2'>
                    <div className='nickName underLineHovereffect' onClick={()=>{redirectToProfile(1)}}>닉네입</div> 
                    <div className='customId underLineHovereffect'>@customId</div>
                    <div className='customId'>n분전</div>
                </div>
                <div className="tweetContent">
                    틧 내용
                    ㅇ
                    {/* ㅇㅇㄹㅇ류랴ㅠㅓ패레노ㅠㅞㅑㄴ로ㅜㅠㅔㄴ랴ㅗㅠㅞ냐ㅗㅜ퓨ㅔㄴ야ㅜㅏ페냐오ㅜ페냐오ㅜㅠ펜야ㅗㅜㅠ페냐오ㅜㅠ페냐로ㅜㅠㅔㅑㄴ로ㅜㅠㅔ냐로ㅠㅔㅑㄴ로ㅠㅔㅑ노류ㅔㅑ노레ㅠㅑ노레ㅑㅠㅗㄹ네ㅠㅑㅗ레냐ㅠㅗ레ㅑ뉴ㅗㅔ랴노ㅠㅞㅑㄴ로ㅠㅔㅑㅜㄹ네ㅠㅑㅗㅜㄴ랴;ㅣㅗㅓㅇ래ㅑ호ㅠㅇ래ㅑㅠㅗㅇ랴ㅏㅠㅜ펟갸류ㅗㅓㅔㅑㄱ후ㅠㅗ레ㅑㅏㄱ더휴ㅔㅑㅐㄹ니ㅓㅘㅠㅎ프ㅓㅇ레ㅕㅗ됴겅래ㅠ;틔ㅓㄹ애ㅗㅕ9됴ㅙ어류;ㅣㅡ핵ㅈ홎ㄱ0ㅑ호ㅞㅑㄴㅈㄱㄹ휴ㅜㅙ젹ㄴ호ㅜ퍄렺ㄴㄱ류ㅜ호팬져어궇페ㅜㅑㅏㄴㅇ촟 ㅠㅍㅎ;누처로휴푸ㅗㄴ래곻퓨ㅔㄴㄹ걎누ㅗㅠㅔㅑㅈ노ㅜ헤ㅜㅑㅏㄴ조ㅜㅎ페;ㅑㄴㅈ포ㅞ;휴ㅜㅗㄴ제갸호ㅜ재략노ㅜ휴ㅔ;ㄱ랴ㅏㅜㅗ헤;ㅈ냐ㅗ훼;.냦도ㅜ휴ㅔ;ㄴ쟈궆허ㅔ;ㅈㄴ퍄거해ㅣㅈ냐ㅗㅜ헤ㅐㅈㄴ구ㅠㅙㅣㄹㅈㄴ두ㅗ헤ㅜㅑㅈㄱ너휴ㅗㅔㅑㄴㄱ주ㅗㅠ헤ㅜㅗㄴ델갸ㅏ호ㅜㄴ충ㅈㄱㅅㄹ횆도뤄세ㅑ저게ㅐㄷ허ㅐㅑㅈ곻새ㅑㄷㅈ고헤ㅑ조ㅔㄱ햐ㅗㅈ개ㅓ호ㅜㅐㅓㅈ구ㅗ헤퍄ㅐ저개ㅔㅠㅓㄱㅈ[ㅐㅣㅎ레쟈디ㅏ러ㅔ갸아허ㅜ페ㅑㄱ;ㄴ러ㅔ;대ㅡㅓㅎㄹ피ㅏㅑㄱ허ㅞㄷ갸호제ㅑㄷ후ㅗㅓㅔㅈ댜호ㅜ */}
                    ㅇ
                </div>
                <div className='tweetFooter'>
                    <div className='tweetIconBox hoverEffect2'>
                        <svg className='tweetIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
                    </div>
                    <div className='tweetIconBox hoverEffect2'>
                        <svg className='tweetIcon' xmlns="http://www.w3.org/2000/svg" style={{width:'22px', height:'22px'}} viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDiv;