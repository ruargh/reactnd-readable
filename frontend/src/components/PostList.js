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
          console.log(post.id)
          deletePost(post.id)
          }
        }
        votePostUp={() => 
          {
          console.log('VoteUp!')
          votePostUp(post.id)
          }
        }
        votePostDown={() => 
          {
          console.log('VoteDown!')
          votePostDown(post.id)
          }
        }
      />
    )}
  </ul>
)

export default PostList