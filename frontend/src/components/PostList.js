import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost, votePostUp, votePostDown }) => (
  <ul>
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onClick={() =>
          {
          deletePost(post.id)
          }
        }
        votePostUp={() => 
          {
          votePostUp(post.id)
          }
        }
        votePostDown={() => 
          {
          votePostDown(post.id)
          }
        }
      />
    )}
  </ul>
)

export default PostList