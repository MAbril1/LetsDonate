import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './Home.css';
import FundraiserCard from './FundraiserCard';
import candies from '../images/candies.jpg';
import clinic from '../images/clinic.jpg';
import college from '../images/college.jpg';

class Home extends Component {
  state = {
    items: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`/api`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <div className="Home">
        <div className="LandingBanner-bg"><div className="LandingBanner">
          <h1>Let's Donate</h1>
          <p>
            Let's Donate is the inbetween <br/>
            for people that want to give  <br/>
            donations directly to those that <br/>
            need it and people that seek <br/>
            out help i their time of need. <br/>
          </p>
        </div></div>
        <hr className="separator"></hr>
        <div className="Featured">
          <h2>Featured</h2>
        </div>
        <Link className='buttonLink' to={"/Fundraisers"}>Fundraisers</Link>
        <div className="scrollmenu">
          {this.state.items.map(item => <Link className='link' to={{
            pathname:"/ProductPost",
            name: item.name
          }}>
          {console.log(item.productImage)}<Card name={item.name} description={item.description} productImage={item.productImage}/></Link> )}
        </div>
        <hr/>
        <Link className='buttonLink' to={"/Products"}>Products</Link>
        <div className="scrollmenu">
          <FundraiserCard title="Hospital Expenses" 
                        description="Money required for the hospital and medicine expenses."
                        rating={4.6}
                        requiredAmount="$10,000"
                        image={clinic}/>
        <FundraiserCard title="College Expenses" 
                                description="Unable to pay tuition fees. Need money to pay all the money to the university."
                                rating={4.2}
                                requiredAmount="$5,000"
                                image={college}/>
        <FundraiserCard title="Money for Candies" 
                                description="Money required to buy whole lot of candies."
                                rating={0.4}
                                requiredAmount="$100,000"
                                image={candies}/>
        </div>
      </div>
    );
  }
}
export default Home;