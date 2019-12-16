import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading" >
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>

                <div className="panel-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Mã SP</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Mô tả</th>
                                <th className="text-center">Giá</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;