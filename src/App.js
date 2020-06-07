import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

export default class App extends Component 
{
    constructor()
    {
        super();
        this.state =
        {
            accountBalance: 14568.27
        }
    }

    render()
    {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}