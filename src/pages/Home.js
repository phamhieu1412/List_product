import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MyCss.css';

class Home extends Component {

    render() {
        return (
            <div>
                <h1 >HOme</h1>

                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <form className="navbar-form navbar-left">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search" ></input>
                                        <button type="submit" className="btn btn-default"><i className="fa fa-mobile" aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <div className="menu-category">
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                                <span >Điện thoại</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-tablet" aria-hidden="true"></i>
                                                <span >Tablet</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-laptop" aria-hidden="true"></i>
                                                <span>Laptop</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                                <span>Công nghệ</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-headphones" aria-hidden="true"></i>
                                                <span>Phụ kiện</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-balance-scale" aria-hidden="true"></i>
                                                <span>Cũ giá rẻ</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-battery-three-quarters" aria-hidden="true"></i>
                                                <span>Đồng hồ</span>
                                            </div>
                                        </Link>
                                        <Link to="/a">
                                            <div className="menu-block">
                                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                <span>Hỏi đáp</span>
                                            </div>
                                        </Link>
                                        <Link to="/a" className=" menu-block-info">
                                            <div className="menu-block">
                                                <span>Sim số</span>
                                                <span>Thẻ cào</span>
                                            </div>
                                        </Link>
                                        <Link to="/a" className=" menu-block-info" style={{ borderRight: '0.5px solid red' }}>
                                            <div className="menu-block">
                                                <span>Đóng tiền điện,</span>
                                                <span>nước, trả góp</span>
                                            </div>
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">

                    <table className="table table-bordered table-striped table-misson fixed_header">
                        <thead>
                            <tr>
                                <th scope="col" rowSpan="2">TÊN ĐƠN VỊ</th>
                                <th scope="col" rowSpan="2">TỔNG</th>
                                <th scope="col" colSpan="2">ĐANG XỬ LÝ</th>
                                <th scope="col" colSpan="2">ĐÃ XỬ LÝ</th>
                                <th scope="col" rowSpan="2">TỶ LỆ HOÀN THÀNH</th>
                            </tr>
                            <tr>
                                <th scope="col">ĐÚNG HẠN</th>
                                <th scope="col">QUÁ HẠN</th>
                                <th scope="col">ĐÚNG HẠN</th>
                                <th scope="col">QUÁ HẠN</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><i className="fa fa-newspaper-o" aria-hidden="true"></i>PHÒNG KẾ HOẠCH A</td>
                                <td>20</td>
                                <td>06</td>
                                <td>05</td>
                                <td>06</td>
                                <td>0</td>
                                <td>88%</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-newspaper-o" aria-hidden="true"></i>PHÒNG KẾ HOẠCH A</td>
                                <td>20</td>
                                <td>06</td>
                                <td>0</td>
                                <td>0</td>
                                <td>05</td>
                                <td>28%</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-newspaper-o" aria-hidden="true"></i>PHÒNG KẾ HOẠCH A</td>
                                <td>20</td>
                                <td>06</td>
                                <td>0</td>
                                <td>06</td>
                                <td>05</td>
                                <td>66%</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-newspaper-o" aria-hidden="true"></i>PHÒNG KẾ HOẠCH A</td>
                                <td>20</td>
                                <td>06</td>
                                <td>0</td>
                                <td>06</td>
                                <td>0</td>
                                <td>72%</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-newspaper-o" aria-hidden="true"></i>PHÒNG KẾ HOẠCH A</td>
                                <td>20</td>
                                <td>06</td>
                                <td>05</td>
                                <td>06</td>
                                <td>0</td>
                                <td>36%</td>
                            </tr>



                        </tbody>
                    </table>

                    <table className="table table-striped table-misson">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col" style={{ width: '50%' }}>
                                    <div className="dropdown">
                                        <div
                                            className="btn dropdown-toggle btn-drop"
                                            type="button"
                                            id="dropdownMenu1"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                        >
                                            TÊN CÔNG VIỆC <span className="fa fa-caret-square-o-down ml-5" ></span>
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li >
                                                <Link className="dropdown-item" to="#">Action</Link></li>
                                            <li >      <Link className="dropdown-item" to="#">Another action</Link></li>
                                            <li ><Link className="dropdown-item" to="#">Something else here</Link>    </li>

                                        </ul>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="dropdown">
                                        <div
                                            className="btn btn-primary dropdown-toggle btn-drop"
                                            type="button"
                                            id="dropdownMenu1"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                        >
                                            THỜI HẠN XỬ LÝ <span className="fa fa-caret-square-o-down ml-5"></span>
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li >
                                                <Link className="dropdown-item" to="#">Action</Link></li>
                                            <li >      <Link className="dropdown-item" to="#">Another action</Link></li>
                                            <li ><Link className="dropdown-item" to="#">Something else here</Link>    </li>

                                        </ul>
                                    </div>
                                </th>
                                <th scope="col"><div className="dropdown">
                                    <div
                                        className="btn btn-primary dropdown-toggle btn-drop"
                                        type="button"
                                        id="dropdownMenu1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                    >
                                        TRẠNG THÁI <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li >
                                            <Link className="dropdown-item" to="#">Action</Link></li>
                                        <li >      <Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li ><Link className="dropdown-item" to="#">Something else here</Link>    </li>

                                    </ul>
                                </div></th>
                                <th scope="col">FILE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Thiết kế cơ sở dữ liệu</td>
                                <td>03/02/2019</td>
                                <td>
                                    <button type="button" className="btn btn-dark">Dark</button>
                                </td>
                                <td>
                                    <i className="fa fa-laptop" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Thiết kế cơ sở dữ liệu</td>
                                <td>03/02/2019</td>
                                <td>
                                    <button type="button" className="btn btn-success">Dark</button>
                                </td>
                                <td>
                                    <i className="fa fa-laptop" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr style={{ borderLeft: '2px solid red' }}>
                                <td>03</td>
                                <td>Thiết kế cơ sở dữ liệu</td>
                                <td>
                                    <div>03/02/2019</div>
                                    <small className="date-expire">Qúa 8 ngày</small>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary">Dark</button>
                                </td>
                                <td>
                                    <i className="fa fa-laptop" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Thiết kế cơ sở dữ liệu</td>
                                <td>
                                    <div>03/02/2019</div>
                                    <small className="date">Còn 8 ngày</small>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger">Dark</button>
                                </td>
                                <td>
                                    <i className="fa fa-laptop" aria-hidden="true"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                    <div className="navbar-block-right">
                        <button className="btn btn-danger block-red">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            <p>Tạo mới công việc</p>
                        </button>
                        <button className="btn btn-success block-green">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            <p>Tạo mới công việc</p>
                        </button>
                        <button className="btn btn-primary block-pink">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            <p>Tạo mới công việc</p>
                        </button>
                        <button className="btn btn-default block-yellow">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            <p>Tạo mới công việc</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;