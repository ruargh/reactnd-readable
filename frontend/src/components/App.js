import React, { Component } from 'react';
import { getCategories } from '../utils/api'


class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="nav">
          <h1 className="header">Readable</h1>
          <h2 className="subheader">React Blog</h2>
        </div>
      </div>
    );
  }
}

export default App;
