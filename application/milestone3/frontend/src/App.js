import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Fundraisers from './components/Fundraisers.js';
import User from './components/User.js';
import ProductPost from './components/ProductPost.js';
import FundraiserPost from './components/FundraiserPost.js';
import SearchResult from './components/searchResult.js';

import register from './components/register.js'

/*
**  App.js
**
**  This the application.
*/

class App extends Component {
  render() { return (
    <Router>
      <div className="App">
        {/* This NavBar component will stay at the top regardless of what page the user is on.*/}
        <NavBar />
        {/* This switch will allow the user to navigate between each page and url extension. */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Products" component={Products} />
          <Route path="/Fundraisers" component={Fundraisers} />
          <Route path="/User" component={User} />
          <Route path="/ProductPost" component={ProductPost} />
          <Route path="/FundraiserPost" component={FundraiserPost} />
          <Route path="/searchResult" component={SearchResult} />
          <Route path="/register" component={register} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );}
}

export default App;
