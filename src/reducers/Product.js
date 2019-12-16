import * as  types from "../constants/ActionType";

var initState = [];

const products = (state = initState, action) => {

        var index = -1;   
    switch (action.type) { 
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];   
        case types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state];
        default:
            return [...state];
    }
}

var findIndex = (products, id) => {
    var result = -1;
    if (products.length > 0) {
        products.forEach( (product, index) => {
           if (product.id === id) {
               result = index
           }
        });
    }
    return result;
}
// findIndex = (products, id) => {
//     var index = -1;
//     if(products.length > 0) {
//         for (var i = 0; i < products.length; i++) {
//             if (products[i].id === id) {
//                 index = i;
//                 break;
//             }
//         }
//     }
//     return index;
// }  

export default products;