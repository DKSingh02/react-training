import React, { Component, Fragment } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import CartDetail from '../CartDetails/CartDetails';

import '../App.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.checkData = this.checkData.bind(this);
  }
  state = {
    seacrhedText: '',
    cartItems: 0
  }
  searchedTextMethod = (event) => {
    const searchText = event;
    console.log(`First - ${searchText}`);
    this.setState({ seacrhedText: searchText });
    console.log(`Second - ${this.state.seacrhedText}`);
  }
  checkData = (event) => {
    this.cartItems = event;
    this.setState({ cartItems: event });
  }
  render() {
    return (
      <Fragment>
        <CartDetail cartItems={this.state.cartItems} />
        <Search changed={(event) => this.searchedTextMethod(event)} className="App" />
        <Card onCartUpdate={(event) => this.checkData(event)} searchedData={this.state.seacrhedText} />
      </Fragment>
    );
  }
}

export default Home;
