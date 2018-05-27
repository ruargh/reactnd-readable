import React from 'react'
import { Component } from 'react';
import CategoryList from './CategoryList'
import AddPost from '../containers/AddPost'
import VisiblePostList from '../containers/VisiblePostList'
import { fetchPosts } from '../utils/api'

class App extends Component {

  state = {
    apiPosts: null,
    loadingPosts: false,
  }

  componentDidMount() {

    this.setState(() => ({ loadingPosts: true }))

    fetchPosts()
      .then((apiPosts) => this.setState(() => ({
        apiPosts,
        loadingPosts: false,
      })))

  }

  render() {
    return (
        <div>
          <CategoryList />
          <AddPost />
          <VisiblePostList />
            
        </div>
    );
  }
}

export default App;
