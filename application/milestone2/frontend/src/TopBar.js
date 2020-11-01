import React, { useState } from 'react';
import './TopBar.css';
import charity from './images/charity.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core";
import axios from 'axios';

import {Form, Label, Input, FormGroup, CustomInput, Modal, ModalBody} from 'reactstrap';


function TopBar() {
    const [formIsOpen, setformISOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");

    let searchable = {};

    
    const makeSearch = () => {
        searchable["searchItem"] = search;
        axios.post("api/makeSearch", searchable)
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{

            }
        })
        .catch(exception => {
            alert("Failed Search");
        })
    }

    const makePost = () => {
        if(name.length>0 && description.length>0){
            var productImage = document.getElementById("productImage");
            var form = new FormData();
            form.append("imageFile", productImage.files[0]);
            form.append("name", name);
            form.append("description", description);
            form.append("type", type);
            console.log(form.getAll("name"), form.getAll("imageFile"));
            axios.post("/api/postProduct", form, { headers: { 'content-type': "multipart/form-data"}})
            .then((result) => {
                if(result.data.success){
                    setformISOpen(false);
                }else{
                    alert("Post Failure Occurred");
                }
            })
            .catch(exception => {
                alert("Post Failure Occurred");
            })
        }
    };
    
    return (
        <div className="topBar">
            <div style={{display:"flex", alignItems:"center"}}>
            <img className="logo" 
                    src={charity}
                    alt=""
            />

            <div className='appTitle'>
                <p>letsDonate</p>
            </div>
        </div>
            
            
            <div className="search">
                <input type="text" onChange={(lookFor) => {
                        setSearch(lookFor.target.value);
                }}/>
                <SearchIcon onClick={() => makeSearch()}/>
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
                                        onChange={(word) => {
                                            setName(word.target.value);
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Description of Product</Label>
                                    <Input value={description}
                                        onChange={(des) => {
                                            setDescription(des.target.value);
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Type (Example: Furniture, Cloth)</Label>
                                    <Input value={type}
                                        onChange={(productType) => {
                                            setType(productType.target.value);
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
                            <Button variant='outlined' onClick={() => {makePost()}}>Create Post</Button>
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
