import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const AddPost = ({ dispatch }) => {
  let title, body, author, category

  return (
    <div className="add-post-form">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim()) {
            return
          }
          dispatch(addPost(title.value, body.value, author.value, category.value))
          title.value = ''
          body.value = ''
          author.value = ''
          category.value = ''
        }}
      >
        <span>Add Post</span>
        <input ref={node => title = node} placeholder="Title"/>
        <input ref={node => body = node} placeholder="Body" />
        <input ref={node => author = node} placeholder="Author" />
        <select ref={node => category = node} defaultValue="React" >
          <option value="React">React</option>
          <option value="React">Redux</option>
          <option value="React">Udacity</option>
        </select>
        <button type="submit">
          Save Post
        </button>
        <button type="reset">
          Reset
        </button>
      </form>
    </div>
  )
}

export default connect()(AddPost)