import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm('Do you want delete?')){ //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }
    
    render() {
        var { product, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{product.id}</td>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product.description}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">
                    <span className={product.status === true ? 'label label-success' : 'label label-danger'}>
                        {product.status === true ? 'Còn hàng' : 'Hết hàng'}
                    </span>
                </td>
                <td className="text-center">
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning">
                        Sửa
                    </Link>
                    <button className="btn btn-danger ml-5" onClick={() => this.onDelete(product.id)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);