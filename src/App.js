import React, { Component } from 'react';
import './App.css';
import RouterOutlet from './templates/router-outlet/RouterOutlet';
import TopNav from './templates/top-nav/TopNav';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <TopNav />
        </div>
        <div className="pages">
          <RouterOutlet />
        </div>
      </div>
    );
  }
}

export default App;
