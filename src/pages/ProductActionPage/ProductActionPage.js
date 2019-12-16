import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProductRequest, editProductRequest, updateProductRequest} from '../../actions/indexAction';


class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            textName: '',
            textPrice: '',
            cbStatus: false
        }
    }
    //sua(khi clik vao sua)
    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditProductRequest(id);
        }
    }
    //sau khi click sua 
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState({
                id: nextProps.itemEditting.id,
                textName: nextProps.itemEditting.name,
                textPrice: nextProps.itemEditting.price,
                cbStatus: nextProps.itemEditting.status,
            })
        }
    }
    onChange = (event) => {
        var name = event.target.name;   
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        var {id, textName, textPrice, cbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id: id,
            name: textName,
            price: textPrice,
            status: cbStatus
        }
        if (id) {
            this.props.onUpdateProductRequest(product);
            history.goBack();
        } else {
            this.props.onAddProductRequest(product);
            history.goBack();
        }
    }
    onBack = () => {
        var {history} = this.props;
        history.goBack();
        // history.push('/product-list');
    }
    
    render() {

        return (
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text"
                                    className="form-control mb-20"
                                    name="textName"
                                    value={this.state.textName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >Giá</label>
                                <input type="text"
                                    className="form-control mb-20"
                                    name="textPrice"
                                    value={this.state.textPrice}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >Tình trạng</label>
                            
                                <div className="checkbox">
                                    <label >
                                        <input
                                            type="checkbox"
                                            name="cbStatus"
                                            value={this.state.cbStatus}
                                            onChange={this.onChange}
                                            checked={this.state.cbStatus}
                                        />
                                        Còn hàng</label>
                                </div>
                            </div>
                            <button type="submit"
                                className="btn btn-warning mr-10">
                                Lưu<span className="fa fa-plus"></span>
                            </button>&nbsp;
                            <button type="button"
                                className="btn btn-danger"
                                onClick={this.onBack}>
                                Hủy<span className="fa fa-close "></span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
var mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEdit
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductRequest: (product) => {
            dispatch(addProductRequest(product))
        },
        onEditProductRequest: (id) => {
            dispatch(editProductRequest(id))
        },
        onUpdateProductRequest: (product) => {
            dispatch(updateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);