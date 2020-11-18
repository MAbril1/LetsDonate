import React, { Component } from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Star from "@material-ui/icons/Star";
import './FundraiserCard.css';
import { Link } from 'react-router-dom';


export class FundraiserCard extends Component {
    render() {
        const image = this.props.image;
        const title = this.props.title;
        const requiredAmount = this.props.requiredAmount;
        const description = this.props.description; 
        const rating = this.props.rating;
        return (
            <Link to={{
                pathname:'/FundraiserPost',
                details :{
                    image: {image},
                    title: {title},
                    description: {description},
                    requiredAmount: {requiredAmount},
                    rating: {rating},
                }
            }}  style={{textDecoration:'none', color:"black"}}>
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
            </Link>
        )
    }
}

export default FundraiserCard
