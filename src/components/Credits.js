import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import AccountBalance from './AccountBalance';
import CreditCard from './CreditCard';

export default class Credits extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Credits</h1>
                <Link to="/">Home</Link>

                <AccountBalance accountBalance={this.props.accountBalance} />
                <section className="credit-card-grid">
                    {this.generateCreditCards(this.props.data)}
                </section>
            </div>
        );
    }

    generateCreditCards(data)
    {
        let cards = [];

        data.forEach((element, index) =>
        {
            const description = element.description;
            const amount = element.amount;
            const id = element.id;
            const date = element.date;

            cards.push(<CreditCard 
                key={index.toString()}
                description={description}
                amount={amount}
                id={id}
                date={date}
            />);
        })

        return cards;
    }
}