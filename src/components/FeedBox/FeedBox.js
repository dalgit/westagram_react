import React from 'react'
import Comment from '../../components/Comment/Comment';
import { useState } from 'react'
import './FeedBox.scss'

const FeedBox = () => {

    const myName = 'nyam_nyam2'
    const exist = [
        { AbC_0078: '와~ 너무 멋있어!!!!' },
        { ioi_oio: '잘 보고 갑니다.' }
    ]

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    function btnStyle() {
        return comment.length > 0 ? 'commentButtonAct' : 'commentButton'
    }

    function commentChange(e) {
        setComment(e.target.value)
    }

    function commentPlus(e) {
        e.preventDefault()
        if (comment === '') return;
        let tmp = [...comments]
        tmp.push(comment)
        setComments(tmp)
        setComment('')
    }



    return (
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
                        {`댓글 ${exist.length + comments.length}개`}
                    </div>
                    {exist.map((comment, idx) => {
                        return <Comment nickname={Object.keys(comment)} comment={Object.values(comment)} key={idx} />
                    })
                    }

                    {comments.map((comment, idx) => {
                        return (
                            <Comment
                                nickname={myName}
                                comment={comment}
                                new={true}
                                key={idx}
                                idx={idx}
                                comments={comments}
                                setComments={setComments} />
                        )
                    })
                    }
                </div>
                <div className="commentTime">
                    42분 전
                </div>
                <form className="commentInputBox">
                    <input
                        onChange={(e) => { commentChange(e) }}
                        value={comment}
                        type="text"
                        placeholder="댓글 달기..."
                        className="commentInput"
                    />
                    <button onClick={(e) => { commentPlus(e) }} className={btnStyle()}>게시</button>
                </form>
            </div>
        </section>
    )
}

export default FeedBox