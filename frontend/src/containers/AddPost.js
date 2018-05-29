import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'


const AddPost = ({ dispatch }) => {
  let title, body, author, category

  let pTitle, pBody, pAuthor, pCategory


  return (
    <div className="add-post-form">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim() || category.value === "")  {
            return
          }

          /* Add dummy Post fo Formatting style sheets */
          pTitle = "The 9 features Amazon and Google must add to the Echo and Home";
          pBody = "The Amazon Echo and Google Home are amazing devices and both have advantages over the other. In my home, we use the Amazon Echo and have them around the house and outside. I have the original in the living room, a Dot in bedrooms, my office and outside, a Tap in my woodworking workshop and Spots in the kids’ room (with tape over the camera). They’re great devices, but far from perfect. They’re missing several key features and the Google Home is missing the same things, too I polled the TechCrunch staff. The following are the features we would like to see in the next generation of these devices If you’re on desktop, click the “start here” button to the right. If you’re on mobile web, just scroll down. If you are reading this from anywhere else (Google News, Yahoo, etc), click here to jump into the slideshow.";
          pAuthor = "Matt Burns";
          pCategory = "udacity";
          dispatch(addPost(pTitle, pBody, pAuthor, pCategory))
          /* Add dummy Post fo Formatting style sheets - END */

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