import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AccountBalance from './AccountBalance';

/**
 * This component will be the homepage of the app, which will show the app's logo and name, along with
 * a login button that redirects users to the Login page
 */
export default class Home extends Component
{
    render()
    {
        return (
            <div>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/bank_1f3e6.png" alt="bank"/>
                <h1>Bank of React</h1>

                <Link to="/debits">Debits</Link>
            </div>
        );
    }
}