import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './Home.css';
import FundraiserCard from './FundraiserCard';
import candies from '../images/candies.jpg';
import clinic from '../images/clinic.jpg';
import college from '../images/college.jpg';

import currentUser from './backend/currentUser.js';

/*
**  Home.js
**
**  This is the landing page, the first page users will see when they reach the website.
*/
class Home extends Component {
  // These are to be the products that appear on the featured lists within the page.
  state = {
    items: []
  }

  constructor(props) {
    super(props);
  }

  // This gets all the items from the backend.
  componentDidMount() {
    axios.get(`/api`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
        console.log("See Below");
        console.log(this.state.items);
        console.log("Current user:", currentUser.getUser());
      })
  }

  render() {
    return (
      <div className="Home">

        {/* This is the landing banner and is supposed to be what draws users in and explains what the website is about. */}
        <div className="LandingBanner-bg"><div className="LandingBanner">
          <h1>Let's Donate</h1>
          <p>
            Let's Donate is the inbetween <br />
            for people that want to give  <br />
            donations directly to those that <br />
            need it and people that seek <br />
            out help in their time of need. <br />
          </p>
        </div></div>
        <hr className="separator"></hr>
        <div>
          <h2>Featured</h2>
        </div>
        <hr />

        {/*
          This is the featured list of products available with a button to the products page
          and each of the cards links to their post.
         */}
        <Link className='buttonLink' to={"/Products"}>View All Products</Link>
        <div className="scrollmenu">
          {this.state.items.map(item => <Card name={item.name} description={item.description} productImage={item.productImage} />)}
        </div>
        <hr />

        {/*
          This is the featured list of fundraisers available with a button to the fundraisers page
          and each of the cards links to their post.
         */}
        <Link className='buttonLink' to={"/Fundraisers"}>View All Fundraisers</Link>
        <div className="scrollmenu">
          <FundraiserCard title="Hospital Expenses"
            description="Money required for the hospital and medicine expenses."
            endorsements={4600}
            requiredAmount="$10,000"
            image={clinic} />
          <FundraiserCard title="College Expenses"
            description="Unable to pay tuition fees. Need money to pay all the money to the university."
            endorsements={4200}
            requiredAmount="$5,000"
            image={college} />
          <FundraiserCard title="Money for Candies"
            description="Money required to buy whole lot of candies."
            endorsements={40}
            requiredAmount="$100,000"
            image={candies} />
        </div>
        <hr />
      </div>
    );
  }
}
export default Home;