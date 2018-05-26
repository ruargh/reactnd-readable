import React from 'react'
import { convertTime } from '../utils/helpers' 


const Post = ({
    onClick,
    deleted,
    timestamp,
    title, body, author, category }) => (
  <div className="post-view"
    onClick={onClick}
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