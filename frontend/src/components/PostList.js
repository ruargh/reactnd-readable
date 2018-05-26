import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => (
  <ul>
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onClick={() => deletePost(post.id)}
      />
    )}
  </ul>
)

export default PostList