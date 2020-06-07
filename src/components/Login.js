import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

/**
 * This component will allow the user to login to their account.
 * Upon successful login, they will be redirected to the UserProfile page.
 * 
 * For the sake of this example app, no real user accounts will be used, just a mockup function.
 */
export default class Login extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            user:
            {
                userName: "",
                password: "",
            },
            redirect: false
        }
    }

    handleChange = (e) =>
    {
        const updatedUser = {...this.state.user};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        this.setState({ user: updatedUser });
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.mockLogin(this.state.user);
        this.setState({ redirect: true });
    }

    render()
    {
        if(this.state.redirect) return (<Redirect to="/userProfile" />);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}