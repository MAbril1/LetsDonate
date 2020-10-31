import React, { useState } from 'react';
import './TopBar.css';
import charity from './images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core";
import Modal from 'react-modal';


function TopBar() {
    const [formIsOpen, setformISOpen] = useState(false)
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
                <Button variant='outlined' onClick={() => setformISOpen(true)}>Become a Donor</Button>
                <Modal isOpen={formIsOpen}>
                    <h2>Create Post</h2>
                    <p>Make a post here</p>
                    <div className='createPostButton'>
                        <Button variant='outlined' onClick={() => setformISOpen(false)}>Create Post</Button>
                    </div>
                </Modal>
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>

        </div>

    )
}

export default TopBar
