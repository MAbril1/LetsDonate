import React, { Component } from 'react';
import user from '../images/user.jpg';
import './User.css';
import Star from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import FundraiserCard from './FundraiserCard';
import city from '../images/city.jpg';
import bike from '../images/bike.jpg';
import shirt from '../images/shirt.jpg';
import { Link } from 'react-router-dom';
import Card from './Card';

class User extends Component {
  render() {
    
    return(
      <div className="profile"> 
        <div className="topSection">
          <div className="topLeft">
            <div className="userImage">
                <img src={user} alt="" />
            </div>
            <div className="userName">
              <h1>David Beven</h1>
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
          </div>
          <div className="topRight">
          
          </div>
        </div>
        <div className="bottomSection">
          <h2>ITEMS POSTED</h2>
          <div className="scrollmenu">
            <Card name="Bike" description="" productImage="bike.jpg"/>
            <Card name="Shirt" description="" productImage="shirt.jpg"/>
          </div>
          <h2>FUNDRAISERS POSTED</h2>
          <div className="scrollmenu">
              <Link className='link' to={{
                        pathname:"/FundraiserPost",
                        title: "Help required for new city Expenses" 
                        }}>
            <FundraiserCard title="Help required for new city Expenses" 
                                    description="Recently shifted to the city of New York and it is highly difficult for me to manage daily expenses."
                                    rating={2.6}
                                    requiredAmount="$3500"
                                    image={city}/>
            </Link>
          </div>
        </div>
      </div>

       
      )
  }
}
export default User;