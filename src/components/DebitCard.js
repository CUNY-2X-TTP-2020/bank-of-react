import React, { Component } from 'react';

export default class DebitCard extends Component
{
    render()
    {
        return (
            <section>
                <h3>{this.props.description}</h3>
                <ul>
                    <li>{this.props.amount}</li>
                    <li>{this.props.id}</li>
                    <li>{this.props.date}</li>
                </ul>
            </section>
        );
    }
}