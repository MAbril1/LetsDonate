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
                Name:
                <input type="text" name="name" placeholder="John Smith"/>
            </label>
            <label>
                Email:
                <input type="email" name="email" placeholder="JohnSmith@email.com"/>
            </label>
            <label>
                Zip Code:
                <input type="number" name="zipcode" placeholder="12345"/>
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="password"/>
            </label>
            <label>
                Confirm Password:
                <input type="password" name="password2" placeholder="password"/>
            </label>
            <button type="button" onClick={() => {formData()}}>Signup</button>
        </form>
    )
}

export default register