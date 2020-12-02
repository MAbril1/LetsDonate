import React, { Component } from 'react';
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
      return (
        <div>
            <button class="open-button" onclick="openForm()">Chat</button>
            <div class="chat-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>Chat</h1>

                    <label for="msg"><b>Message</b></label>
                    <textarea placeholder="Type message.." name="msg" required></textarea>

                    <button type="submit" class="btn">Send</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                </form>
            </div>
        </div>
      )
    }
}
export default Chat;