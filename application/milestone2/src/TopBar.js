import React, { useState } from 'react';
import './TopBar.css';
import charity from './images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core";

import {Form, Label, Input, FormGroup, CustomInput, Modal, ModalBody} from 'reactstrap';


function TopBar() {
    const [formIsOpen, setformISOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
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
                <div>
                    <Modal isOpen={formIsOpen} onRequestClose={() => setformISOpen(false)}>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name of Product</Label>
                                    <Input value={name}
                                        onChange={ev => {
                                        setName(ev.target.value);
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Description of Product</Label>
                                    <Input value={description}
                                        onChange={ev => {
                                        setDescription(ev.target.value);
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Upload Product Image</Label>
                                    <CustomInput type="file" id="productImage" accept="image/jpg,image/jpeg,image/png"/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <div className='createPostButton'>
                            <Button variant='outlined' onClick={() => setformISOpen(false)}>Create Post</Button>
                        </div>
                    </Modal>
                </div>
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>

        </div>

    )
}

export default TopBar
