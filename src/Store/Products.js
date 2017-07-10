import React from 'react';
import{Link} from  'react-router-dom';

export default function Products(props){
    const products  = props.products.map((product, i) => {
        return (
            <div key={i}>
                <Link to={`/product/${product.id}`} >{product.title}</Link>
            </div>
        )
    });
    return (
        <div>
            <h2>{props.title}</h2>
            {products}
        </div>
    )
}