import React from 'react'
import { Component } from 'react';
import CategoryList from './CategoryList'
import AddPost from '../containers/AddPost'
import VisiblePostList from '../containers/VisiblePostList'
import { fetchPosts } from '../utils/api'
import { addPost } from '../actions'
import { connect } from 'react-redux'
import Loading from 'react-loading'


class App extends Component {

  state = {
    apiPosts: null,
    loadingPosts: false,
  }

  componentWillMount() {

    this.setState(() => ({ loadingPosts: true }))

    fetchPosts()
      .then((apiPosts) => this.setState(() => ({
        apiPosts,
        loadingPosts: false,
      })))


  }

  componentDidMount() {

          /* Add dummy Post fo Formatting style sheets */
        let  pTitle = "Title"
        let  pBody = "Data";
        let  pAuthor = "Matt Burns";
        let  pCategory = "Udacity";
        this.props.dispatch(addPost(pTitle, pBody, pAuthor, pCategory))
          /* Add dummy Post fo Formatting style sheets - END */

//this.props.dispatch(addPost('title', 'body', 'ruargh', 'React')) 
  }

  render() {
    return (
        <div>
          <CategoryList />
          <AddPost />

        {this.state.loadingPosts === true
          ? <Loading delay={200} type='spin' color='#222' className='loading' />
        : <VisiblePostList /> }
          
        </div>
    );
  }
}

//export default App;
export default connect()(App)
