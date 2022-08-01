import './Main.scss'

// const commentButton = document.querySelectorAll('.commentButton')
// const commentContainer = document.querySelectorAll('.commentContainer')
// const commentInput = document.querySelectorAll('.commentInput')
//---------------------------------댓글 구현---------------------------------//

// commentButton.forEach((btn, idx) => btn.addEventListener('click', () => commentAdd(idx)))

// commentInput.forEach((input, idx) => input.addEventListener('keyup', (key) => {
//     if (key.key === 'Enter') commentAdd(idx)
//     commentButtonStyle(idx)
// }))

// function commentButtonStyle(idx) {
//     if (commentInput[idx].value.length > 0) {
//         commentButton[idx].style.color = '#0095F6'
//         commentButton[idx].style.fontWeight = 'bold'
//     } else {
//         commentButton[idx].style = '';
//     }
// }

// function commentAdd(idx) {
//     if (commentInput[idx].value == '') return;
//     const commentBoxDiv = document.createElement('div')
//     const commentDiv = document.createElement('div')
//     const userNameSpan = document.createElement('span')
//     const meEngName = document.querySelector(".meEngName")
//     const imgDiv = document.createElement('div')
//     const closeImgTag = document.createElement('img')
//     const heartImgTag = document.createElement('img')


//     commentBoxDiv.classList.add('commentBox')
//     commentDiv.classList.add('comment')
//     userNameSpan.classList.add('userName')
//     closeImgTag.classList.add('commentClose')
//     heartImgTag.classList.add('commentHeart')
//     imgDiv.classList.add('commentImgBox')

//     closeImgTag.src = './img/close.png'
//     heartImgTag.src = './img/heart.png'
//     userNameSpan.innerText = meEngName.innerText

//     imgDiv.appendChild(closeImgTag)
//     imgDiv.appendChild(heartImgTag)
//     commentDiv.appendChild(userNameSpan)
//     commentBoxDiv.appendChild(commentDiv)
//     commentBoxDiv.appendChild(imgDiv)

//     commentDiv.innerHTML += commentInput[idx].value
//     commentContainer[idx].appendChild(commentBoxDiv);
//     commentInput[idx].value = '';
//     commentButtonStyle(idx)
//     closeImgTag.addEventListener('click', ()=>commentClose(commentBoxDiv,idx))
//     heartImgTag.addEventListener('click', ()=>commentHeart(heartImgTag))

//     commentCount(idx)
// }

// const cssHeart = document.querySelectorAll('.commentHeart')
// cssHeart.forEach((heart) => heart.addEventListener('click', () => commentHeart(heart)))

// function commentClose(commentBoxDiv,idx) {
//     commentBoxDiv.remove()
//     commentCount(idx)
// }

// function commentHeart(heart){
//     if(heart.classList.contains('commentRedHeart')){
//         heart.classList.remove('commentRedHeart')
//     }else{
//         heart.classList.add('commentRedHeart')
//     }
// }

// const commentMore = document.querySelectorAll('.commentMore')
// commentMore.forEach((_, idx)=>commentCount(idx))
// function commentCount(idx){
//     let commentCount = commentContainer[idx].getElementsByClassName('commentBox').length
//     commentMore[idx].innerText=`댓글 ${commentCount}개`
// }


function Main() {
    return (
        <>
            <nav className="navbar">
                <div className="leftLogo">
                    <img src="images/instagram.png" alt='tmp' className='leftLogoImg'/>| westagram
                </div>
                <input className="navInput" type="text" placeholder="검색" />
                <div className="rigthMenu">
                    <img src="images/explore.png" alt='tmp' />
                    <img src="images/heart.png" alt='tmp' />
                    <img src="images/profile.png" alt='tmp' />
                </div>
            </nav>

            <div className="mainContainer">
                <div className="feedContainer">
                    <section className="feedBox">
                        <div className="feedTop">
                            <div className="feedTopLeft">
                                <img src="./images/user2.jpg" alt="tmp" />
                                dogLove
                            </div>
                            <div className="feedTopRight">
                                <img src="./images/more.png" alt="tmp" />
                            </div>
                        </div>
                        <article className="feedMiddleImg">
                            <img src="./images/feedimg1.jpg" alt="tmp" />
                        </article>
                        <div className="feedBottom">
                            <div className="bottomMenu">
                                <div className="bottomMenuLeft">
                                    <img src="./images/heart.png" alt="tmp" />
                                    <img src="./images/chat.png" alt="tmp" />
                                    <img src="./images/upload.png" alt="tmp" />
                                </div>
                                <div className="bottomMenuRight">
                                    <img src="./images/bookmark.png" alt="tmp" />
                                </div>
                            </div>
                            <div className="like">
                                <img src="./images/loveimg2.jpg" alt="tmp" />
                                <span className="userName">edBlure</span>님 외 2명이 좋아합니다
                            </div>

                            <div className="commentContainer">
                                <div className="commentMore">
                                    댓글
                                </div>
                                <div className="commentBox">
                                    <div className="comment">
                                        <span className="userName">ddoo3</span>와~ 너무 예쁘다!!
                                    </div>
                                    <div className="commentImgBox">
                                        <img src="./images/heart.png" className="commentHeart" alt="tmp" />
                                    </div>
                                </div>
                                <div className="commentBox">
                                    <div className="comment">
                                        <span className="userName">holyholy</span>어디야?
                                    </div>
                                    <div className="commentImgBox">
                                        <img src="./images/heart.png" className="commentHeart" alt="tmp" />
                                    </div>
                                </div>
                            </div>
                            <div className="commentTime">
                                42분 전
                            </div>
                            <div className="commentInputBox">
                                <input type="text" placeholder="댓글 달기..." className="commentInput" />
                                <button className="commentButton">게시</button>
                            </div>
                        </div>
                    </section>
                    <section className="feedBox">
                        <div className="feedTop">
                            <div className="feedTopLeft">
                                <img src="./images/arinProfile.png" alt="tmp" />
                                ogmmgo
                            </div>
                            <div className="feedTopRight">
                                <img src="./images/more.png" alt="tmp" />
                            </div>
                        </div>
                        <article className="feedMiddleImg">
                            <img src="./images/redSky.jpg" alt="tmp" />
                        </article>
                        <div className="feedBottom">
                            <div className="bottomMenu">
                                <div className="bottomMenuLeft">
                                    <img src="./images/heart.png" alt="tmp" />
                                    <img src="./images/chat.png" alt="tmp" />
                                    <img src="./images/upload.png" alt="tmp" />
                                </div>
                                <div className="bottomMenuRight">
                                    <img src="./images/bookmark.png" alt="tmp" />
                                </div>
                            </div>
                            <div className="like">
                                <img src="./images/loveimg1.jpg" alt="tmp" />
                                <span className="userName">fs_0032</span>님 외 2명이 좋아합니다
                            </div>

                            <div className="commentContainer">
                                <div className="commentMore">
                                    댓글
                                </div>
                                <div className="commentBox">
                                    <div className="comment">
                                        <span className="userName">Apple_king</span>멋진 사진 잘보고 갑니다.
                                    </div>
                                    <div className="commentImgBox">
                                        <img src="./images/heart.png" className="commentHeart" alt="tmp" />
                                    </div>
                                </div>
                            </div>
                            <div className="commentTime">
                                42분 전
                            </div>
                            <div className="commentInputBox">
                                <input type="text" placeholder="댓글 달기..." className="commentInput" />
                                <button className="commentButton">게시</button>
                            </div>
                        </div>
                    </section>
                </div>
                <aside className="asideFeed">
                    <div className="meBox">
                        <div>
                            <img src="./images/meimg.jpg" alt="tmp" />
                        </div>
                        <div className="meNameBox">
                            <div className="meEngName">
                                nyam_nyam2
                            </div>
                            <div className="meName">
                                냠냠이
                            </div>
                        </div>
                    </div>
                    <div className="storyBox">
                        <div className="asideBoxTop">
                            <div className="grayFont">
                                스토리
                            </div>
                            <div>
                                모두 보기
                            </div>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/storyimg1.jpg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    KoE_oooo
                                </div>
                                <div className="asideUserTime">
                                    17분 전
                                </div>
                            </div>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/storyimg2.jpeg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    marinBoy
                                </div>
                                <div className="asideUserTime">
                                    12분 전
                                </div>
                            </div>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/storyimg3.jpg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    goRagoRa
                                </div>
                                <div className="asideUserTime">
                                    9분 전
                                </div>
                            </div>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/storyimg4.png" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    ariNa
                                </div>
                                <div className="asideUserTime">
                                    5분 전
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recommendBox">
                        <div className="asideBoxTop">
                            <div className="grayFont">
                                회원님을 위한 추천
                            </div>
                            <div>
                                모두 보기
                            </div>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/recoimg1.jpg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    q1o1rhvk
                                </div>
                                <div className="asideUserFriend">
                                    qorhvk0202님 외 29명이 팔로우 중입니다.
                                </div>
                            </div>
                            <button className="followButton">
                                팔로우
                            </button>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/recoimg2.jpg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    sKsms4fka
                                </div>
                                <div className="asideUserFriend">
                                    99aa_god님 외 12명이 팔로우 중입니다.
                                </div>
                            </div>
                            <button className="followButton">
                                팔로우
                            </button>
                        </div>
                        <div className="asideUserSpace">
                            <div>
                                <img src="./images/recoimg3.jpg" alt="tmp" />
                            </div>
                            <div className="asideUser">
                                <div className="userName">
                                    Ha_Ha_Man
                                </div>
                                <div className="asideUserFriend">
                                    holy33님 외 5명이 팔로우 중입니다.
                                </div>
                            </div>
                            <button className="followButton">
                                팔로우
                            </button>
                        </div>
                    </div>

                    <footer className="noticeBox">
                        <div className="noticeInfo">
                            Instagram 정보·지원·홍보 센터·API·채용 정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
                        </div>
                        <div>
                            ⓒ 2019 INSTAGRAM
                        </div>
                    </footer>
                </aside>
            </div>
        </>
    );
}

export default Main;