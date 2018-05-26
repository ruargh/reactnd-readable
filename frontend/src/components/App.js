import React from 'react'
import { Component } from 'react';
import CategoryList from './CategoryList'
import AddPost from '../containers/AddPost'
import VisiblePostList from '../containers/VisiblePostList'

// const App = () => (
//   <div>
//     <AddPost />
//     <VisiblePostList />
//     <Footer />
//   </div>
// )


class App extends Component {
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
