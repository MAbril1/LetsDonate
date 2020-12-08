import React from 'react';

// contains function needed to send form information to database
import formData from './backend/registerBackend.js';

function register() {

    // very basic user registration form
    // gets information needed to get sent to the database
    // buttons calls function from registerBackend.js
    
    return (
        <form id="registerForm" method="post">
            <h1>Signup to Let's Donate</h1>
            <label>
                <br />
                Name:
                <input type="text" name="name" placeholder="John Smith"/>
            </label>
            <label>
                <br />
                Email:
                <input type="email" name="email" placeholder="JohnSmith@email.com"/>
            </label>
            <label>
                <br />
                Zip Code:
                <input type="number" name="zipcode" placeholder="12345"/>
            </label>
            <label>
                <br />
                Password:
                <input type="password" name="password" placeholder="password"/>
            </label>
            <label>
                <br />
                Confirm Password:
                <input type="password" name="password2" placeholder="password"/>
            </label>
            <label>
                <br />
                Profile Image:
                <input type="file" id="profileImage" accept="image/jpg,image/jpeg,image/png"/>
            </label>
            <button type="button" onClick={() => {formData()}}>Signup</button>
        </form>
    )
}

export default register
