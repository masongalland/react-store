import React, { Component } from 'react';
import{Route, Switch, Link} from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Store from './Store/Store';
import Product from './Product/Product';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Store</h2>
        </div>
        <nav>
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/store"><p>Store</p></Link>
        </nav>

        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/store" component={Store} />
            <Route path="/product/:id" component={Product} />
          </Switch>

        
        
      </div>
    );
  }
}

export default App;
