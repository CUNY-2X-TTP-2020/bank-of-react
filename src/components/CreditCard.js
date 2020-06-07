import React, { Component } from 'react';

export default class CreditCard extends Component
{
    render()
    {
        return (
            <section>
                <h3>{this.props.description}</h3>
                <ul>
                    <li>Amount: ${this.props.amount}</li>
                    <li>Date: {this.props.date}</li>
                </ul>
            </section>
        );
    }
}