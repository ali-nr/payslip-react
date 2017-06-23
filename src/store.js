import { createStore, compose, applyMiddleware } from 'redux'; // add applyMiddleware
import thunk from 'redux-thunk'; // import
import reducer from './reducers';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
