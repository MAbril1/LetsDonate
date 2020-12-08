import React from 'react';
import './register.css';

// contains function needed to send form information to database
import formData from './backend/registerBackend.js';

function register() {

    // very basic user registration form
    // gets information needed to get sent to the database
    // buttons calls function from registerBackend.js

    return (
        <div>
            <div className='form-header'>
                <h1>Sign Up to Let's Donate</h1>
                <hr /><br />
            </div>
            <div className='form-body'>
                <form id="registerForm" method="post">
                    <label for="name"><b>Name</b></label><br />
                    <input type="text" name="name" placeholder="John Smith" /><br />

                    <label for="email"><b>Email</b></label><br />
                    <input type="email" name="email" placeholder="Enter Email" /><br />

                    <label for="password"><b>Password</b></label><br />
                    <input type="password" name="password" placeholder="Enter Password" /><br />

                    <label for="password2"><b>Confirm Password</b></label><br />
                    <input type="password" name="password2" placeholder="Comfirm Password" /><br />

                    <label for="zipcode"><b>Zip Code</b></label><br />
                    <input type="number" name="zipcode" placeholder="Enter Zip Code" /><br />

                    <div className="form-button">
                        <button type="button" onClick={() => { formData() }}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default register
