import React, { Component } from 'react';
import Card from './Card.js';
import './searchResult.css';

/*
**  searchResult.js
**
**  This page is a temporary fill in for the browsing pages in order to get items with the same name as the
**  input keywords
*/
export class searchResult extends Component {
    render() {

        const items = this.props.location.products;

        console.log(items);
        console.log(items);
        console.log(items);
        return (
            <div>
                <div>
                    <h1> SEARCH RESULTS</h1>
                </div>
                <div className="items">
                    {items.map(item =>
                        <Card name={item.name} description={item.description} productImage={item.productImage} />
                    )}
                </div>
            </div>
        )
    }
}

export default searchResult
