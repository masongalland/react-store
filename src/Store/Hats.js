import React from 'react';
import{Link} from  'react-router-dom';

export default function Hats(props){
    const hats = props.products.map((product, i) => {
        return (
            <div key={i}>
                <Link to={`/product/${product.id}`} >{product.title}</Link>
            </div>
        )
    });
    return (
        <div>
            {hats}
        </div>
    )
}