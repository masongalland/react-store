import React, { Component } from 'react';

import * as products from '../services/products.js';
import "./Product.css";

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        products.get(this.props.match.params.id)
        .then(product => this.setState({product}))
    }
    
    


    render() {
        const {product} = this.state;

        return (
            <div className="product_container">
                <img src={product.image} />

                <h1>{product.title}</h1>
                <p>{product.desc}</p>
            </div>
        );
    }
}

export default Product;