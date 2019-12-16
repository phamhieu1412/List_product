import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';
import Menu from './components/menu/Menu';


class App extends Component {
  showRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
      })
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="">
          <Menu />

          <Switch>
            {this.showRoute(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
