import {combineReducers} from 'redux';
import products from './Product';
import itemEdit from './ItemEdit'; 


var myReducers = combineReducers({
    products,
    itemEdit
});

export default myReducers;