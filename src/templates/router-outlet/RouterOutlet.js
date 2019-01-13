import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../../pages/home/Home";
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';

export default class RouterOutlet extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        );
    }
}
