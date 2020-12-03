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
import axios from 'axios';

import loginData from './loginBackend.js';

/*
**  NavBar.js
**
**  This component remains at the top of the application at all times and serves as a means to navigate the website.
*/
class NavBar extends Component {
    // These are the filtered items that will be passed should a user add keywords for the search.
    state = {
        allProducts: [],
        items: []
      }

    constructor(props) {
        super(props);
    }

    // This function uses the keyword input in the searchbar to get a filtered list of items from the backend
    getKey() {
        const keySearch = document.getElementById("searchType").value;
        
        let searchable = {};
        
        searchable["searchItem"] = keySearch;
        axios.post("api/makeSearch", searchable)
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                const items = result.data.products;
                console.log(items);
                this.setState({ items });
            }
        })
        .catch(exception => {
            alert("Failed Search");
        })
    }

    // getType(selected) {
        // console.log(selected.value)
        // this.setState({ 
        //     browseType: selected.value 
        // })
        // console.log(this.browseType)
    // }
        
    render() { 
        
        return (
        <div className="NavBar">

            {/* This is the logo at the top left of the screen that also takes the user to the landing page */}
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

            {/* This is the searchbar */}
            <div className="search">
                <input id="searchType" type="text" onChange={this.getKey.bind(this)}/>
                
                {/* At the moment, the dropdown acts as the links to the browsing pages */}
                <Select
                    id="browseType"
                    // onChange={this.getType.bind(this)}
                >
                    <Link className='link' to={{
                        pathname: "/Products",
                        keySearch: this.keySearch,
                    }}><MenuItem value="/Products">Products</MenuItem></Link>
                    <Link className='link' to={"/Fundraisers"}><MenuItem value="/Fundraisers">Fundraisers</MenuItem></Link>
                </Select>
                {console.log(this.state.items)}
                <Link className='link' to={{pathname: "/searchResult", products: this.state.items}}><SearchIcon /></Link>
            </div>

            {/* This is the button to allow users to log in/sign up through a pop up */}
            <div>
                <Popup
                    trigger={<button className="buttonLink"> Login/SignUp </button>}
                    modal
                    nested
                >
                    {close => (
                        <div>
                        <form id="loginForm" className='form-border'>
                            <h1>Login to Let's Donate</h1>
                            <div>
                                <input
                                    className='email'
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                //   onChange={this.myChangeHandler}
                                />
                            </div>
                            <div>
                                <input
                                    className='password'
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                //   onChange={this.myChangeHandler}
                                />
                            </div>
                            <div>
                                <input
                                    className='login-button'
                                    type='button'
                                    value='Log In'
                                    onClick={() => {loginData()}}
                                />
                            </div>
                            <div>
                                <input
                                    className='signup-button'
                                    type='button'
                                    value='Sign Up'
                                />
                            </div>
                            <div>
                                <input
                                    className='reset-password-button'
                                    type='submit'
                                    value='Reset password'
                                />
                            </div>
                        </form>
                        </div>
                    )}
                </Popup>

                {/* This button takes a user to their user page if their signed in */}
                <Link className='userLink' to={"/User"}><AccountCircleIcon /></Link>
            </div>
        </div>
    );}
}

export default NavBar;