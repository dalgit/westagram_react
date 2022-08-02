import React from 'react'

const Comment = (props) => {
  return (
    <div className="comment">
        <span className="userName">{props.id}</span>{props.contents}
    </div>
  )
}

export default Comment