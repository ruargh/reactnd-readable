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
          if (!title.value.trim() || category.value === "")  {
            return
          }

          dispatch(addPost(title.value, body.value, author.value, category.value))
          title.value = ''
          body.value = ''
          author.value = ''
          category.value = ''
        }}
      >
        <span >Add Post</span>
        <input ref={node => title = node} placeholder="Title"/>
        <textarea ref={node => body = node} placeholder="Body" ></textarea>
        <input ref={node => author = node} placeholder="Author" />
        <select ref={node => category = node} defaultValue="" >
          <option value="" hidden disabled >Select Category</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="udacity">Udacity</option>
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