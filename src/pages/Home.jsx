import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./Home.css";
import PostDiv from '../components/PostDiv';

function Home({webBrowserHeight}) {

    const [content, setContent] = useState('');

    const textarea = useRef();
    const postBoxRef = useRef();

    const handleChange = (event) => {
        setContent(event.target.value);

        if (textarea.current) {
            textarea.current.style.height = 'auto'; // 높이 초기화
            textarea.current.style.height = textarea.current.scrollHeight + 'px'; // 스크롤 높이만큼 설정
            // div#PostBox의 높이도 업데이트
            if (postBoxRef.current && textarea.current.scrollHeight < 320) {
              if (fileSelected.length) {
                postBoxRef.current.style.height = textarea.current.scrollHeight + 70 + 'px';
              } else {
                postBoxRef.current.style.height = textarea.current.scrollHeight + 50 + 'px';
              }
            }
          }
    };

    const handlePostSubmit = async () => {
        if(!content.trim()){
            alert("내용을 입력하세요");
            return;
        }

        const formData = new FormData();

        formData.append('content', content);
        fileSelected.forEach(file => {
            formData.append('images', file);
        });

        console.log(formData.get('images'));

        try {
            const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
            const response = await axios.post(`${BASE_URL}/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            console.log('Post submitted successfully:', response.data);

            setContent('');
            setFileSelected([]);

        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };


    const [fileSelected, setFileSelected] = useState([]);
    const uploadMultiFiles = (e) => {
        const files = Array.from(e.target.files);

        if(files.length > 4){
            alert("4장까지만 업로드 할 수 있습니다");
            e.target.value = '';
            setFileSelected([]);
            return;
        }

        setFileSelected(files);
        postBoxRef.current.style.height = textarea.current.scrollHeight + 60 + 'px';
    };

    useEffect(() => {}, [fileSelected]);

    const deleteOne = (indexToDelete) => {
        setFileSelected(prevState => {
          // 새로운 배열 생성하여 indexToDelete를 제외한 요소들을 복사합니다.
          const updatedArray = prevState.filter((_, index) => index !== indexToDelete);
          return updatedArray;
        });
      };


    return(
        <div className='mainBox border-start border-end' style={{ height: `${webBrowserHeight}px` }}>
            <div id="PostBox" className='border-bottom' ref={postBoxRef}>
                <div className="postProfileBox">
                    <img src="/image/empty_profile.jpg" alt="프로필 이미지" className='profile'/>
                </div>

                <div id="writePostBox">
                    <textarea
                        ref={textarea}
                        value={content}
                        className='postInput'
                        placeholder="What is happenning?!"
                        onChange={handleChange}
                    />
                    {/* 이미지 업로드 */}
                    <div>
                        <label className="input-file-button hoverEffect2" for="input-file">
                            <img src='/image/upload_image_icon.png' className='input-file-icon'/>
                        </label>
                        <input
                            type="file"
                            id='input-file'
                            className="formFileInput"
                            onChange={uploadMultiFiles}
                            multiple
                            style={{display:"none"}}
                        />
                        <div className="form-group multi-preview">
                            {fileSelected.map((file, index) => (
                                <img key={index} src={URL.createObjectURL(file)} className="previewImg hoverEffect"
                                onClick={() => deleteOne(index)}
                                />
                            ))}
                        </div>
                        <button className='postButton' onClick={handlePostSubmit}>Post</button>
                    </div>
                </div>
            </div>

            <PostDiv data={null} memberId={1} />

            {/* <div className='tweetBox border-bottom'>
                <div className="postProfileBox mt-1">
                    <img src="/image/empty_profile.jpg" alt="프로필 이미지" className='profile mt-2 hoverEffect'/>
                </div>
                <div className='showTweetBox'>
                    <div className='mt-2'>
                        <div className='nickName underLineHovereffect'>닉네입</div> 
                        <div className='customId underLineHovereffect'>@customId</div>
                        <div className='customId'>n분전</div>
                    </div>
                    <div>
                        틧 내용
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
                
            </div> */}
    </div>
    );
}

export default Home;