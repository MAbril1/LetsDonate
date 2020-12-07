import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Chat.css';

class Chat extends Component {
  
    componentDidMount() {

    }

    openForm() {
        document.getElementById("myForm").style.display = "block";
    }
      
    closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
  
    render() {
        const DUMMY_DATA = [
            {
              senderId: "perborgen",
              text: "who'll win?",
              user: false,
            },
            {
              senderId: "janedoe",
              text: "It's gonna be me of course.",
              user: true,
            }
        ]

      
      return (
        <div>
            <button className="open-button" onClick={this.openForm}>Chat</button>
            <div className="chat-popup" id="myForm">
                <form className="form-container">
                    <Grid container>
                    <Grid item xs={12}>
                    <ul>  
                    {DUMMY_DATA.map(DUMMY_DATA => {
                        return (
                            <li key={DUMMY_DATA.id}> {/*className={`${DUMMY_DATA.user ? "right" : ""}`}>*/}
                                <div>
                                    {/* <b>{DUMMY_DATA.senderId}: </b> */}
                                    <b>{DUMMY_DATA.user ? "me" : DUMMY_DATA.senderId}: </b>
                                    {DUMMY_DATA.text}
                                </div>
                            </li>
                        )
                    })}              
                    </ul>
                    </Grid>
                    <Grid item>
                    <textarea placeholder="Type message.." name="msg" required></textarea>

                    <button type="button" className="btn">Send</button>
                    <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
                    </Grid>
                    </Grid>
                </form>
            </div>
        </div>
      )
    }
}
export default Chat;