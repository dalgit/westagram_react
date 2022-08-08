import React from 'react'
import './Comment.scss'
import { useState } from 'react'

const Comment = (props) => {
    const [heartSrc, setHeartSrc] = useState([true, './images/heart.png'])

    function commentHeart() {
        heartSrc[0] ? setHeartSrc([false, './images/redHeart.png']) : setHeartSrc([true, './images/heart.png'])
    }

    function onRemove(){
        let tmpComments= [...props.comments]
        tmpComments.splice(props.idx,1)
        props.setComments(tmpComments);
      };

    return (
        <div className="commentBox" key={props.idx}>
            <div className="comment">
                <span className="userName">{props.nickname || props.myName}</span>{props.comment}
            </div>
            <div className="commentImgBox">
                {props.new
                    ? <img onClick={()=>{onRemove()}} src={'./images/close.png'} className="commentClose" alt="tmp" />
                    : null}
                <img onClick={() => commentHeart()} src={heartSrc[1]} className="commentHeart" alt="tmp" />
            </div>
        </div>
    )
}

export default Comment