import React, { Component } from 'react';
import {connect}  from 'react-redux';
import ProductItem from '../../components/productItem/ProductItem';
import ProductList from '../../components/productList/ProductList';
import { Link } from 'react-router-dom';
import {fetchProductsRequest, deleteProductRequest} from '../../actions/indexAction';

class ProductListPage extends Component {
    
    componentDidMount(){
        this.props.onFetchProductsRequest();
    }
    
    onDeleteProduct = (id) => {
        this.props.onDeleteProductRequest(id);
    }
    
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map( (product, index)=> {
                return <ProductItem key={index} index={index} product={product} onDeleteProduct={this.onDeleteProduct}/>
            });    
        }
        return result;
    }

    render() {
         var {products} = this.props;

        return (
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                <Link   to="/product/add"  
                        className="btn btn-primary mb-20">
                    Thêm sản phẩm !!!<span className="fa fa-plus"></span>
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>

        );
    }
}

var mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProductsRequest: () => {
            dispatch(fetchProductsRequest())
        },
        onDeleteProductRequest: (id) => {
            dispatch(deleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);