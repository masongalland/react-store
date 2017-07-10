import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import * as products from '../services/products.js';


class Store extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        products.index()
        .then(products => this.setState({products}))
    }
    



    render() {
        const products = this.state.products.map((product, i) => {
            return (
                <div key={i}>
                    <Link to={`product/${product.id}`} >{product.title}</Link>
                </div>
            )
        })

        return (
            <div>
                <h1>This is the Store Component</h1>
                <div>
                    {products}
                </div>
            </div>
        );
    }
}

export default Store;