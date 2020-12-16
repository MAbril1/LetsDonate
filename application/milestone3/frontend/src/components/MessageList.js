import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Chat from './Chat.js';
import './css/Chat.css';
import { Link } from 'react-router-dom';

class MessageList extends Component {
    openList() {
        document.getElementById("userList").style.display = "block";
    }
      
    closeList() {
        document.getElementById("userList").style.display = "none";
    }

    openChat() {
        document.getElementById("chat").style.display = "block";
    }
      
    closeChat() {
        document.getElementById("chat").style.display = "none";
    }

    componentDidMount() {
    }
      
    componentDidUpdate() {
    }

    setChat(user) {

    }
    renderChat() {
        if (this.otherUser !== undefined)
            return <Chat user="this.otherUser"/>
    }

    render() {
        const DUMMY_USERS = [
            "perborgen",
            "n"
        ]
        return (
            <div>
                <Link className="link" to={`/users`}>
                    {/*onClick={this.openList*/}
                    <button className="open-button">Messages</button>
                </Link>
                {/* list of users that have a chat history */}
                <div className="userList" id="userList">
                    <div className="container">
                    <Grid container>
                        <Grid item xs={12}>
                        <ul>  
                        {DUMMY_USERS.map(DUMMY_USER => {
                            return (
                                <li className="user" key={DUMMY_USER.id}>
                                    <div onClick={this.openChat}>
                                        <b>{DUMMY_USER}</b>
                                    </div>
                                </li>
                            )
                        })}         
                        </ul>
                        </Grid>
                        <Grid item>
                            <button type="button" className="btn cancel" onClick={this.closeList}>Close</button>
                        </Grid>
                    </Grid>
                    </div>
                </div>
                <Chat id="chat"/>
                {/* {this.renderChat} */}
            </div>
        )
    }
}
export default MessageList;