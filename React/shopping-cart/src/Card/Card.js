import React, { Component } from 'react';
import Records from '../Records/index.get.json';
import CartDetail from '../CartDetails/CartDetails';
import Modal from '../Modal/Modal';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        //this.filterData = this.filterData.bind(this);
    }
    state = {
        records: Records,
        cartItems: 0,
        show: false,
        showDetails: [],
        searchTerm: ''
    }
    componentDidMount() {
        console.log('data:', this.state.records);
    }
    componentWillReceiveProps(nextProps) {
        //this.filterData(nextProps.searchedData);
        this.setState({ searchTerm: nextProps.searchedData });
        console.log(nextProps);
    }
    // filterData = (searchTerm) => {
    //     const searchedTerm = this.props.searchedData || searchTerm;
    //     //const filteredData = this.state.records.filter((data) => data.name.toLocaleLowerCase().indexOf(searchedTerm.toLocaleLowerCase()) > -1);
    //     //this.setState({ records: filteredData });
    // }
    addToCart = () => {
        let count = this.state.cartItems + 1;
        this.setState({ cartItems: count },
            () => this.props.onCartUpdate(this.state.cartItems));
        
        // Need to use this code to bind latest updated states later 
        //this.setState((oldValue) => { this.setState({ cartItems: oldValue + 1 })});

    }

    removeFromCart = () => {
        let count = this.state.cartItems ? this.state.cartItems - 1 : 0;

        this.props.onCartUpdate(this.state.cartItems);
        this.setState({ cartItems: count });
    }

    showModal = (index) => {
        const filteredData = [...this.state.records];
        const showDetails = filteredData.splice(index, 1);
        this.setState({ showDetails, show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        const filteredData = this.state.records.filter((data) => data.name.toLocaleLowerCase().indexOf(this.state.searchTerm.toLocaleLowerCase()) > -1);
        const showFilterData = filteredData || this.state.records;
        if (this.state.records.length === 0) {
            return <div className="noRecordFound">No Records founds</div>;
        }
        return (
            <div>
                {showFilterData.map((record, index) => {
                    return (
                        <div className="card"><p>{record.name}</p>
                            <button className='button' onClick={() => this.showModal(index)}>Details</button>
                            <button className="button" onClick={() => this.addToCart()}>+</button>
                            <button className="button" onClick={() => this.removeFromCart()}>-</button>

                        </div>

                    )
                })}
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div className="cartDetails">
                        <p> Id : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].id : null}</p>
                        <p>Name : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].name : null}</p>
                        <p>Description : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].description : null}</p>
                        <p>Price : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].price : null}</p>
                        <p>Stock : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].stock : null}</p>
                        <p>Category : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].category : null}</p>
                        <p>Sku : {this.state.showDetails && this.state.showDetails[0] ? this.state.showDetails[0].sku : null}</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Card;