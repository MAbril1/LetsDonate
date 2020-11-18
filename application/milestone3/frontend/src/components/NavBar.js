import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import charity from '../images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { browseType: "/Products" };
    }

    getType(selected) {
        console.log(selected.value)
        this.setState({ 
            browseType: selected.value 
        })
        console.log(this.browseType)
    }
        
    render() { return (
        <div className="NavBar">
            <Link className='link' to={"/"}>
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
                <Select
                    id="browseType"
                    onChange={this.getType.bind(this)}
                >
                    <MenuItem value="/Products">Products</MenuItem>
                    <MenuItem value="/Fundraisers">Fundraisers</MenuItem>
                </Select>
                <Link className='link' to={this.state.browseType}><SearchIcon /></Link>
            </div>
            <Link className='link' to={"/User"}><AccountCircleIcon className="user" /></Link>
        </div>
    );}
}

export default NavBar;