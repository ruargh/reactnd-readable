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



  componentDidMount() {

    this.setState(() => ({ loadingPosts: true }))

    fetchPosts()
    .then((apiPosts) => (
      apiPosts.map( (post) => (   
        this.props.dispatch(addPost(post.title, post.body, post.author, post.category))
      ))
    ))
    .then( this.setState(() => ({loadingPosts: false,})))

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

export default connect()(App)
