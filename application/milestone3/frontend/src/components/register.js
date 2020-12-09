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
            <div className='formHeader'>
                <h1>Sign Up to Let's Donate</h1>
                <hr /><br />
            </div>
            <div className='formBody'>
                <form id="registerForm" method="post">
                    <label for="name"><b>Name</b></label><br />
                    <input type="text" name="name" placeholder="John Smith" required/><br />

                    <label for="email"><b>Email</b></label><br />
                    <input type="email" name="email" placeholder="Enter Email" required/><br />

                    <label for="password"><b>Password</b></label><br />
                    <input type="password" name="password" placeholder="Enter Password" required/><br />

                    <label for="password2"><b>Confirm Password</b></label><br />
                    <input type="password" name="password2" placeholder="Comfirm Password" required/><br />

                    <label for="zipcode"><b>Zip Code</b></label><br />
                    <input type="number" name="zipcode" placeholder="Enter Zip Code" required/><br /><br />

                    <label><b>Profile Image:</b></label><br />
                    <input type="file" id="profileImage" accept="image/jpg,image/jpeg,image/png" required/>

                    <div className="signupButton">
                        <button type="button" onClick={() => { formData() }}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default register
