import React from 'react'
import { Component } from 'react';
import CategoryList from './CategoryList'
import SortByList from './SortByList'
import AddPost from '../containers/AddPost'
import VisiblePostList from '../containers/VisiblePostList'
import { fetchPosts } from '../utils/api'
import { loadPost } from '../actions'
import { connect } from 'react-redux'
import Loading from 'react-loading'


class CategoryPage extends Component {

  state = {
    apiPosts: null,
    loadingPosts: false,
  }



  componentDidMount() {

    this.setState(() => ({ loadingPosts: true }))

    fetchPosts()
    .then((apiPosts) => (
      apiPosts.map( (post) => (   
        this.props.dispatch(loadPost(post.id, post.title, post.body, post.author, post.category, post.timestamp, post.voteScore, post.deleted, post.commentCount))
      ))
    ))
    .then( this.setState(() => ({loadingPosts: false,})))

  }


  render() {
    return (
        <div>
          <CategoryList />
          <SortByList />
          <AddPost />

        {this.state.loadingPosts === true
          ? <Loading delay={200} type='spin' color='#222' className='loading' />
        : <VisiblePostList /> }
          
        </div>
    );
  }
}

export default connect()(CategoryPage)
