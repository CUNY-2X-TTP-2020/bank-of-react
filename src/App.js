import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import UserProfile from './components/UserProfile';

export default class App extends Component 
{
    constructor()
    {
        super();
        this.state =
        {
            accountBalance: 14568.27,
            currentUser:
            {
                userName: 'bob_loblaw',
                memberSince: '08/23/99',
            }
        }
    }

    render()
    {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => 
        (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/userProfile" render={UserProfileComponent} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}