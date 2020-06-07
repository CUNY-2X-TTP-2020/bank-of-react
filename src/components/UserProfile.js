import React, {Component} from 'react';

import { Link } from 'react-router-dom';

/**
 * This component is where the user's profile is displayed, with information such as 
 * user name and date since membership 
 */
export default class UserProfile extends Component
{
    render()
    {
        return (
            <div>
                <h1>User Profile</h1>

                <div>UserName: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>

                <Link to="/">Home</Link>
            </div>
        );
    }
}