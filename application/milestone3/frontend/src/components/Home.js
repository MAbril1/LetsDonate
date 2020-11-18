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
        <h3>Products</h3>
        <div className="scrollmenu">
          {this.state.items.map(item => <Link className='link' to={{
            pathname:"/ProductPost",
            name: item.name
          }}><Card name={item.name} description={item.description} productImage={item.productImage}/></Link> )}
        </div>
        <h3>Fundraisers</h3>
        <div className="scrollmenu">
        <Link className='link' to={{
                    pathname:"/FundraiserPost",
                    title: "Hospital Expenses"
                    }}>
          <FundraiserCard title="Hospital Expenses" 
                        description="Money required for the hospital and medicine expenses."
                        rating={4.6}
                        requiredAmount="$10,000"
                        image={clinic}/>
        </Link>
        <Link className='link' to={{
                    pathname:"/FundraiserPost",
                    title: "College Expenses"
                    }}>
        <FundraiserCard title="College Expenses" 
                                description="Unable to pay tuition fees. Need money to pay all the money to the university."
                                rating={4.2}
                                requiredAmount="$5,000"
                                image={college}/>
        </Link>

        <Link className='link' to={{
                    pathname:"/FundraiserPost",
                    title: "Money for Candies" 
                    }}>
        <FundraiserCard title="Money for Candies" 
                                description="Money required to buy whole lot of candies."
                                rating={0.4}
                                requiredAmount="$100,000"
                                image={candies}/>
        </Link>
        </div>
      </div>
    );
  }
}
export default Home;