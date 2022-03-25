import React, { useEffect, useState } from 'react';
import Products from './Products/Products';


const Shop = () => {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("product.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
           {
               products.map(product=><Products product={product}></Products> )
           }
        </div>
    );
};

export default Shop;