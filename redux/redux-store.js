import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import quadcopterReducer from './quadcopter-reducer';


const reducers = combineReducers ({
    quadcopterPage: quadcopterReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;