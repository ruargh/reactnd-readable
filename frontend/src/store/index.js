import { createStore, applyMiddleware, compose } from 'redux'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
)

export default store
