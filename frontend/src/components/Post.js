import React from 'react'
import { convertTime } from '../utils/helpers' 

/* Emoji List: http://unicode.org/emoji/charts/full-emoji-list.html */

const Post = ({
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
          <span>Votes: {voteScore} <span role="img" aria-label="emoji">👍</span><span role="img" aria-label="emoji">👎</span></span>
          <span> Comments: <span role="img" aria-label="emoji">💬</span></span>
          <span onClick={onClick} > Delete <span role="img" aria-label="emoji" >❌</span></span>
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