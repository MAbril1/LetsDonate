import React, { Component } from 'react';
import Card from './Card.js';

export class searchResult extends Component {
    render() {

        const items = this.props.location.products;

        console.log(items);
        return (
            <div className="items">
                {items.map(item => 
                    <Card name={item.name} description={item.description} productImage={item.productImage}/>
                )}
            </div>
        )
    }
}

export default searchResult
