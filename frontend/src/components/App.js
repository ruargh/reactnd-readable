import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { loadCategories } from '../actions'
import { CategoryMenu } from './CategoryMenu'


class App extends Component {

  componentWillMount() {
    this.props.loadCategories()
  }

  render() {

    return (
      <div className="container">

        <div className="nav">
          <h1 className="header">Readable</h1>
          <h2 className="subheader">React Blog</h2>
          < CategoryMenu />

{/*           <ul className='category-list'>
            {categories.map((category) => (
              <li key={category} className='subheader'>
                {category}
              </li>
            ))}
          </ul> */}

          </div>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
})

export default connect(
  null,
  mapDispatchToProps
)(App)
