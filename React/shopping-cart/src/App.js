import React, { Component, Fragment } from 'react';
import Home from './Home/Home';
import ShoppingCartDetail from './ShpooingCartDetails/ShoppingCartDetail';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    const style = {
      float: 'right'
    }
    return (
      <Fragment>
        <Router>
          <div>
            <ul>
              <li>
                <NavLink to="/" exact strict activeStyle={
                  { color: 'red' }
                }>Home</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/cart" exact strict activeStyle={{ color: 'red' }}>Cart</NavLink>
              </li>

            </ul>
          </div>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/cart" component={ShoppingCartDetail} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
