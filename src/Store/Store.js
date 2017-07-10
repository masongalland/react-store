import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Products from './Products';

import * as products from '../services/products.js';
import "./Store.css"


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
                <div className="product_categories">
                    <Link to="/store/hats">Hats</Link>
                    <Link to="/store/shirts">Shirts</Link>
                </div>

                <Route path="/store/hats" render={() => (
                    <Products title="Hats" products={this.state.hats} />
                )} />
                <Route path="/store/shirts" render={() => (
                    <Products title="Shirts" products={this.state.shirts} />
                )} />

            </div>
        );
    }
}

export default Store;