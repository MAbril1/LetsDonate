import React, { Component } from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Star from "@material-ui/icons/Star";
import './FundraiserCard.css';


export class FundraiserCard extends Component {
    render() {
        return (
            <div className="fundCard">
                {console.log(this.props)}
                <img src={this.props.image} alt="" />
                <FavoriteBorderIcon className="heart" />
                <div className="rightData">
                    <div className="rightDataTop">
                        <h2>{this.props.title}</h2>
                        <p>____</p>
                        <p>{this.props.description}</p>
                    </div>

                    <div className="rightDataBottom">
                        <div className="starRating">
                            <Star className="star" />
                                <p>
                                    <strong>{this.props.rating}</strong>
                                </p>
                        </div>
                        <div className="amountRequired">
                            <h2>{this.props.requiredAmount}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FundraiserCard
