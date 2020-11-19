import React, { Component } from 'react';
import './Login.css';
// import ReactDOM from 'react-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <div className='form-position'>
                <form className='form-border'>
                    <h1>Login to Let's Donate</h1>
                    <div>
                        <input
                            className='email'
                            type='email'
                            name='email'
                            placeholder="Email"
                        //   onChange={this.myChangeHandler}
                        />
                    </div>
                    <div>
                        <input
                            className='password'
                            type='password'
                            name='password'
                            placeholder="Password"
                        //   onChange={this.myChangeHandler}
                        />
                    </div>
                    <div>
                        <input
                            className='login-button'
                            type='submit'
                            value='Log In'
                        />
                    </div>
                    <div>
                        <input
                            className='signup-button'
                            type='submit'
                            value='Sign Up'
                        />
                    </div>
                    <div>
                        <input
                            className='reset-password-button'
                            type='submit'
                            value='Reset password'
                        />
                    </div>
                </form>
            </div>
        );
    }
}

//   ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;