import * as types from '../constants/ActionType';
import apiCall from '../utils/ApiCall';


export const fetchProductsRequest = () => {
    return (dispatch) => {
        return apiCall('GET', 'products', null).then(response => {
            dispatch(fetchProducts(response.data))
        });
    }
}
export const fetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}


export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}
export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return apiCall('DELETE', `products/${id}`, null).then(response => {
            dispatch(deleteProduct(id))
        })
    }
}


export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
export const addProductRequest = (product) => {
    return (dispatch) => {
        //goi api doi tra ve 1 cai response roi them vao initState tren store
        return apiCall('POST', 'products', product).then( response => {
            dispatch(addProduct(response.data))
        })
    }
}

export const editProduct = (product) => {//store
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}
export const editProductRequest = (id) => {//khi goi len sv lay theo id
    return (dispatch) => {
        return apiCall('GET', `products/${id}`, null).then(response => {
            dispatch(editProduct(response.data))
        });
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}
export const updateProductRequest = (product) => {
    return (dispatch) => {
        return apiCall('PUT', `products/${product.id}`, product).then( response => {
            dispatch(updateProduct(response.data))
        });
    }
}