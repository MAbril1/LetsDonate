import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import charity from '../images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class NavBar extends Component {
    state = {
        browseType: "/Products"
    }

    // handleChange() {
    //     const browseType = value
    //     this.setState({ browseType })
    // }
        
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
                {/* <Dropdown arrowClassName='myArrowClassName' options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
                <FormControl className="dropDown">
                    <Select
                        id="browseType"
                        value={this.browseType}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={"/Products"}>Products</MenuItem>
                        <MenuItem value={"/Fundraisers"}>Fundraisers</MenuItem>
                    </Select>
                </FormControl>
                <Link className='link' to={this.browseType}><SearchIcon /></Link>
            </div>
            <Link className='link' to={"/User"}><AccountCircleIcon /></Link>
            <Link className='link' to={"/Fundraisers"}>Fundraisers</Link>
            <Link className='link' to={"/FundraiserPost"}>FundraiserPost</Link>
        </div>
    );}
}

export default NavBar;