import React, { Component } from 'react';
import FundraiserCard from './FundraiserCard';
import candies from '../images/candies.jpg';
import clinic from '../images/clinic.jpg';
import college from '../images/college.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

class Fundraisers extends Component {
  render() {
    return (
      <div>
        <div className="donationHeading">
          <h1>Donations</h1>
        </div>
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
    );
  }
}
export default Fundraisers;