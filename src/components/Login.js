import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';

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
                username: "",
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

        let logoURL = "https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png";

        return (
            <div className="page-header">
                <fieldset>
                    <legend>
                        <img src={logoURL} width="20"/>&nbsp; Login &nbsp;<img src={logoURL} width="20"/>
                    </legend>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.user.username} required />
                        <br/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" required />
                        <br/>
                        <Link to="/"><button type="reset">Go Back</button></Link>
                        <button type="submit">Login</button>
                    </form>
                    
                </fieldset>
            </div>
        );
    }
}