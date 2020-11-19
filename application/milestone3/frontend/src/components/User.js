import React, { Component } from 'react';
import user from '../images/user.jpg';
import './User.css';
import './PopUps.css';
import Star from "@material-ui/icons/Star";
import FundraiserCard from './FundraiserCard';
import city from '../images/city.jpg';
import { Link } from 'react-router-dom';
import Card from './Card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Report from './Report.js';

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
            <Report />
          </div>
          <div className="topRight">
          
          </div>
        </div>
        <div className="bottomSection">
          <Popup
            trigger={<button className="button"> Create a new Post </button>}
            modal
            nested
          >
            {close => (
              <div className="popup">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Login/Sign Up </div>
                <div className="content">
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <button
                    onClick={() => {
                      
                    }}
                  >
                    Trouble signing in?
                  </button>
              </div>
            )}
          </Popup>
          <h2>ITEMS POSTED</h2>
          <div className="scrollmenu">
            <Card name="Bike" description="Three year old bike available in San Bruno for pick up. Please feel free to reach out. Bike is in great condition" productImage="bike.jpg"/>
            <Card name="Shirt" description="One year old shirt available in Sunnyvale for pick up. Please feel free to reach out. Shirt is in great condition with no marks." productImage="shirt.jpg"/>
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