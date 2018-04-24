import React, { Component } from 'react';
import Loading from 'react-loading'
import { getCategories } from '../utils/api'


function Hi() { console.log('Hi')}

class App extends Component {
  
  state = {
/*     categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
    ] */
    categories: null
  }


  componentDidMount() {
    getCategories().then((c) => this.setState(() => ({ categories: c })))
    Hi()
  }


  render() {

    const { categories, loadingCategories } = this.state

    function Hi() { console.log('Hi')}

    return (
      <div className="container">

        <div className="nav">
          <h1 className="header">Readable</h1>
          <h2 className="subheader">React Blog</h2>
          <div>

{/*           <ul className='category-list'>
            {categories.map((category) => (
              <li key={category} className='subheader'>
                {category}
              </li>
            ))}
          </ul> */}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
