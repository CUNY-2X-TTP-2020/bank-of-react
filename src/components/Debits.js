import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import AccountBalance from './AccountBalance';
import DebitCard from './DebitCard';

export default class Debits extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Debits</h1>
                <Link to="/">Home</Link>

                <AccountBalance accountBalance={this.props.accountBalance} />
                <section className="debit-card-grid">
                    {this.generateDebitCards(this.props.data)}
                </section>
            </div>
        );
    }

    generateDebitCards(data)
    {
        let cards = [];

        data.forEach((element, index) =>
        {
            const description = element.description;
            const amount = element.amount;
            const id = element.id;
            const date = element.date;

            cards.push(<DebitCard 
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