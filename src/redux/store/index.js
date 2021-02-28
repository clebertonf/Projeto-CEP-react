import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducers from '../reducer/index';

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk)),
    );

export default store;
