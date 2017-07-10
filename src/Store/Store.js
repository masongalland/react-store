import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Hats from './Hats';
import Shirts from './Shirts';

import * as products from '../services/products.js';


class Store extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            hats: [],
            shirts: []
        };
    }
    
    componentDidMount() {
        products.index()
        .then(products => {
            this.setState({
                hats: products.slice(0,2),
                shirts: products.slice(2)
            })
            console.log(this.state)
        })
    }
    
    


    render() {
       
        return (
            <div>
                <h1>This is the Store Component</h1>
                <div>
                    <Link to="/store/hats">Hats</Link>
                    <Link to="/store/shirts">Shirts</Link>
                </div>

                <Route path="/store/hats" render={() => (
                    <Hats products={this.state.hats} />
                )} />
                <Route path="/store/shirts" render={() => (
                    <Shirts products={this.state.shirts} />
                )} />

            </div>
        );
    }
}

export default Store;