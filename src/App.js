import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

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

    mockLogin = (loginInfo) =>
    {
        const newUser = {...this.state.currentUser};
        newUser.userName = loginInfo.userName;
        this.setState({ currentUser: newUser });
    }

    render()
    {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => 
        (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />);
        const LoginComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props} />);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/userProfile" render={UserProfileComponent} />
                            <Route exact path="/login" render={LoginComponent} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}