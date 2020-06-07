import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import axios from 'axios';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Debits from './components/Debits';

/**
 * This component will manage all the routings between pages
 */
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
            },
            debitData: []
        }
    }

    componentDidMount()
    {
        this.fetchDebitData();
    }

    fetchDebitData()
    {
        const debitUrl = "https://moj-api.herokuapp.com/debits";

        axios.get(debitUrl)
        .then((response) =>
        {
            const debitData = response.data;

            this.setState({ debitData });
            
        })
        .catch((error) =>
        {
            console.log(error);
            this.setState({ debitData: [] });
        })
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
        const DebitComponent = () => (<Debits data={this.state.debitData} accountBalance={this.state.accountBalance} />);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/userProfile" render={UserProfileComponent} />
                            <Route exact path="/login" render={LoginComponent} />
                            <Route exact path="/debits" render={DebitComponent} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}