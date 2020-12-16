import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Fundraisers from './components/Fundraisers.js';
import User from './components/User.js';
import ProductPost from './components/ProductPost.js';
import FundraiserPost from './components/FundraiserPost.js';
import SearchResult from './components/searchResult.js';
import Chat from './components/Chat.js';
import ChatRoom from './components/ChatRoom.js';
import MessageList from './components/MessageList.js';

import history from './components/backend/history.js';

import register from './components/register.js'
import recovery from './components/recovery.js'
import AvailableChatUsers from './components/AvailableChatUsers';

/*
**  App.js
**
**  This the application.
*/

class App extends Component {
  render() { return (
    <Router history={history}>
      <div className="App">
        {/* This NavBar component will stay at the top regardless of what page the user is on.*/}
        <NavBar />
        {/* This switch will allow the user to navigate between each page and url extension. */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Products" component={Products} />
          <Route path="/Fundraisers" component={Fundraisers} />
          {/* Dynamic route for users by using email */}
          <Route path="/User/:email" component={User} />
          {/* Dynamic route for products by using the product name */}
          <Route path="/Product/:id" component={ProductPost} />
          <Route path="/Fundraiser/:id" component={FundraiserPost} />
          <Route path="/searchResult" component={SearchResult} />
          <Route path="/register" component={register} />
          <Route path="/recovery" component={recovery} />
          <Route path="/chat" component={ChatRoom} />
          <Route path="/users" component={AvailableChatUsers} />
          <Route component={Error} />
        </Switch>
        <MessageList/>
      </div>
    </Router>
  );}
}

export default App;
