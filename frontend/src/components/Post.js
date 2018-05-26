import React from 'react'

const Post = ({
    onClick,
    deleted,
    timestamp,
    title, body, author, category }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: deleted ? 'line-through' : 'none'
    }}
  >
    {title}, {author} - {timestamp} | {category} | {body}
  </li>
)

export default Post