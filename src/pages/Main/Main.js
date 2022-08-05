import './Main.scss'

import Nav from '../../components/Nav/Nav';
import FeedBox from '../../components/FeedBox/FeedBox';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import StoryBox from '../../components/StoryBox/StoryBox';
import RecommendBox from '../../components/RecommendBox/RecommendBox';



// function commentButtonStyle(idx) {
//     if (commentInput[idx].value.length > 0) {
//         commentButton[idx].style.color = '#0095F6'
//         commentButton[idx].style.fontWeight = 'bold'
//     } else {
//         commentButton[idx].style = '';
//     }
// }3


//     closeImgTag.src = './img/close.png'
//     heartImgTag.src = './img/heart.png'
//     userNameSpan.innerText = meEngName.innerText




// const commentMore = document.querySelectorAll('.commentMore')
// commentMore.forEach((_, idx)=>commentCount(idx))
// function commentCount(idx){
//     let commentCount = commentContainer[idx].getElementsByClassName('commentBox').length
//     commentMore[idx].innerText=`댓글 ${commentCount}개`
// }



function Main() {
    return (
        <>
            <Nav />
            <div className="mainContainer">
                <div>
                    <FeedBox/>
                    <FeedBox/>
                </div>
                <aside className="asideFeed">
                    <ProfileBox/>
                    <StoryBox/>
                    <RecommendBox/>
                </aside>
            </div>
        </>
    );
}

export default Main;