import {createStore, applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);
export default Store;