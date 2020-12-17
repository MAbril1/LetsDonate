import React, { Component } from 'react';
import Card from './Card.js';
import FundraiserCard from './FundraiserCard.js';
import './css/searchResult.css';

/*
**  searchResult.js
**
**  This page is a temporary fill in for the browsing pages in order to get items with the same name as the
**  input keywords
*/
export class searchResult extends Component {
    render() {

        let searchTable = this.props.location.searchTable;

        if (searchTable.localeCompare("products") === 0) {
            let items = this.props.location.products;
            return (
                <div>
                    <div>
                        <h1> SEARCH RESULTS</h1>
                    </div>
                    <div className="items">
                        {items.sort().reverse().map(item =>
                            <Card id={item.id} name={item.name} description={item.description} productImage={item.productImage} />
                        )}
                    </div>
                </div>
            )
        }

        else if (searchTable.localeCompare("fundraiser") === 0) {
            let items = this.props.location.fundraisers;
            return (
                <div>
                    <div>
                        <h1> SEARCH RESULTS</h1>
                    </div>
                    <div className="items">
                        {items.sort().reverse().map(item =>
                            <FundraiserCard id={item.id} title={item.title} description={item.description} image={item.image} endorsement={item.endorsement} requiredAmount={item.requiredAmount} />
                        )}
                    </div>
                </div>
            )
        }

        else
        {
            return (
                <div>
                    <div>
                        <h1> SEARCH RESULTS</h1>
                        <h1>WRONG SEARCH PARAMETER</h1>
                    </div>
                </div>
            )
        }
    }
}

export default searchResult
