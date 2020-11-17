import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import charity from '../images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class NavBar extends Component {
    state = {
        browseType: "/Products"
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const browseType = document.getElementById("browseType").value
        this.setState({ browseType })
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
                <FormControl className="dropDown">
                    <Select
                        id="browseType"
                        value={this.state.browseType}
                        onChange={this.state.handleChange}
                    >
                        <MenuItem value={"/Products"}>Products</MenuItem>
                        <MenuItem value={"/Fundraisers"}>Fundraisers</MenuItem>
                    </Select>
                </FormControl>
                <Link className='link' to={this.state.browseType}><SearchIcon /></Link>
            </div>
            <Link className='link' to={"/User"}><AccountCircleIcon /></Link>
            <Link className='link' to={"/FundraiserPost"}>FundraiserPost</Link>
        </div>
    );}
}

export default NavBar;