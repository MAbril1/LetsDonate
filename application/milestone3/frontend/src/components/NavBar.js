import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './PopUps.css';
import charity from '../images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class NavBar extends Component {
    state = {
        keySearch: []
      }

    constructor(props) {
        super(props);
        this.state = { browseType: "/Products" };
    }

    getKey() {
        const keySearch = document.getElementById("searchType").value;
        this.setState({ keySearch });
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
                <input id="searchType" type="text" onChange={this.getKey.bind(this)} />
                <Select
                    id="browseType"
                    onChange={this.getType.bind(this)}
                >
                    <Link className='link' to={{
                        pathname: "/Products",
                    }}><MenuItem value="/Products">Products</MenuItem></Link>
                    <Link className='link' to={"/Fundraisers"}><MenuItem value="/Fundraisers">Fundraisers</MenuItem></Link>
                </Select>
                <Link className='link' to={this.state.browseType}><SearchIcon /></Link>
            </div>
            <div>
                <Popup
                    trigger={<button className="buttonLink"> Login/SignUp </button>}
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
                                <div className="forms">Username: <input type="text" /></div>
                                <div className="forms">Password: <input type="text" /></div>
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
                <Link className='userLink' to={"/User"}><AccountCircleIcon /></Link>
            </div>
        </div>
    );}
}

export default NavBar;