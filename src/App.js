import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

export default class App extends Component 
{
    render()
    {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}