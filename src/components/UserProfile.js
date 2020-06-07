import React, {Component} from 'react';

export default class UserProfile extends Component
{
    render()
    {
        return (
            <div>
                <h1>User Profile</h1>

                <div>UserName: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
            </div>
        );
    }
}