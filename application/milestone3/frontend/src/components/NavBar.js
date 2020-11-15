import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import charity from '../images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class NavBar extends Component {
    render() {
      return (
        <div className="NavBar">
            <Link to={"/"}>
            <div style={{display:"flex", alignItems:"center"}}>
                <img className="logo" 
                    src={charity}
                    alt=""
                />

                <div className='appTitle'>
                    <p>letsDonate</p>
                </div>
            </div>
            </Link>
            <div className="search">
                <input type="text" />
                <ExpandMoreIcon />
                <SearchIcon />
            </div>
            <Link to={"/User"}><AccountCircleIcon /></Link>
            <Link to={"/Products"}>Products</Link>
            <Link to={"/Fundraisers"}>Fundraisers</Link>
            <Link to={"/ProductPost"}>ProductPost</Link>
            <Link to={"/FundraiserPost"}>FundraiserPost</Link>
        </div>
      );
    }
}

export default NavBar;