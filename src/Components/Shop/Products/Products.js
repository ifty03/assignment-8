import React from 'react';

const Products = (props) => {
    const {name,picture,price}=props.product;
    return (
        <div>
           <img src={picture} alt="" /> 
        </div>
    );
};

export default Products;