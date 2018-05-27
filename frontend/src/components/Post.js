import React from 'react'
import { convertTime } from '../utils/helpers' 

/* Emoji List: http://unicode.org/emoji/charts/full-emoji-list.html */

const Post = ({
    votePostUp,
    votePostDown,
    onClick,
    deleted,
    timestamp,
    title, body, author, category, voteScore }) => (
  <div className="post-view"
    style={ {
      textDecoration: deleted ? 'line-through' : 'none'
    }}
  >
  <article className="post-block">
    <header className="post-block-header">
      <h2 className="post-block-title">{title}</h2>
      <div className="post-black-meta">
        <span className="post-meta-author">{author}</span>
        <span className="post-meta-time" >{convertTime(timestamp)}</span>
        <span className="post-meta-category">{category}</span>
        <div className="post-block-vote">
          <span>Votes: {voteScore} <span className="cursor-pointer" role="img" aria-label="emoji" onClick={votePostUp} >👍</span>
            <span className="cursor-pointer" role="img" aria-label="emoji" onClick={votePostDown} >👎</span></span>
          <span className="cursor-pointer" > Comments: <span role="img" aria-label="emoji">💬</span></span>
          <span className="cursor-pointer" onClick={onClick} > Delete <span role="img" aria-label="emoji" >❌</span></span>
        </div>
      </div>

    </header>
    <div className="post-block-body">
      <p>{body}</p>
    </div>
  </article>
  <hr />
  </div>
)

export default Post