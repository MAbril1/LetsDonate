import React from 'react';
import './TopBar.css';
import charity from './images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core"

function TopBar() {
    return (
        <div className="topBar">
            <div style={{display:"flex", alignItems:"center"}}>
            <img className="logo" 
                    src={charity}
                    alt=""
            />
            <p>letsDonate</p>
            </div>
            
            
            <div className="search">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="topRight">
                <Button variant='outlined'>Become a Donor</Button>
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>

    )
}

export default TopBar
