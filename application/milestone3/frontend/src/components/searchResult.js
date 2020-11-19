import React, { Component } from 'react';
import Card from './Card.js';
import './searchResult.css';

export class searchResult extends Component {
    render() {

        const items = this.props.location.products;

        console.log(items);
        return (
            <div>
                <div>
                    <h1> SEARCH RESULTS</h1>
                </div>
                <div className="items">
                    {items.map(item => 
                        <Card name={item.name} description={item.description} productImage={item.productImage}/>
                    )}
                </div>
            </div>
        )
    }
}

export default searchResult
