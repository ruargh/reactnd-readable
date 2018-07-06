import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux'
import MainPage from './MainPage'
import CategoryPage from './CategoryPage'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:Category" component={CategoryPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App)
