// RootReducer
import {combineReducers} from 'redux';

import cartItems from './reducer';
// import Users from './reducer'

export default combineReducers({
    cartItems,
})