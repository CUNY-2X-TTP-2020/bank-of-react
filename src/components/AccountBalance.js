import React, {Component} from 'react';

/**
 * This component displays the user's account balance
 */
export default class AccountBalance extends Component
{
    render()
    {
        return (
            <div>
                Balance: {this.props.accountBalance.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </div>
        );
    }
}