import React from 'react';
import './Search.css';

class Search extends React.Component {
    state = {
        searchText: '',
    }
    sendChangedData = () => {
        this.props.changed(this.state.searchText);
    }
    nameChangedHandler = (event) => {
        const searchText = event.target.value;
        this.setState({
            searchText
        }, () => this.props.changed(searchText))
    }
    render() {
        return (
            <div className="search App">
                <input type="text"
                    placeholder="Enter Search Term"
                    onChange={(event) => this.nameChangedHandler(event)}></input>
                <button onClick={() => this.sendChangedData()} className="button">Search</button>
            </div>
        );
    }
}

export default Search;
