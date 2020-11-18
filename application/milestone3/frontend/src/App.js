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

class App extends Component {
  render() { return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Products" component={Products} />
          <Route path="/Fundraisers" component={Fundraisers} />
          <Route path="/User" component={User} />
          <Route path="/ProductPost" component={ProductPost} />
          <Route path="/FundraiserPost" component={FundraiserPost} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );}
}

export default App;
