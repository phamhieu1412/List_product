import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

var menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },{
    name: 'Quản lý sản phẩm',
    to: '/product-list',
    exact: false
  }
];
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route  path={to}
            exact={activeOnlyWhenExact}
            children={ ({match})=> {
              var active = match ? 'activeMenu' : '';
              return(
                <li className={active}>
                  <Link to={to}>{label}</Link>
                </li>
              )
            }}
    />
  )
}

class Menu extends Component {
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map( (menu, index)=> {
        return (
          <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
        );
      });
    }
    return result;
  }


  render() {
    
    return (
        <nav className="navbar navbar-default" role="navigation">
        <ul className="nav navbar-nav">
          {this.showMenu(menus)}
        </ul>
      </nav>
    );
  }

}

export default Menu;
