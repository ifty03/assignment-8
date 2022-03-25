import React from 'react';
import './Cart.css'

/*---------------------------
     Set selected item  
---------------------------*/

const Cart = ({item,getItem}) => {
    return (
        <div className='cart-container'>
            <h2 className='text-center'>This is cart</h2>
            {
                item.map(meal=><h5 key={meal.id}>{meal.price}</h5>)
            }
            <button onClick={()=>{getItem(item)}} className='btn btn-success mt-4'>Chose one for me</button>
            <button className='btn btn-danger mt-3'>Chose again</button>
        </div>
    );
};

export default Cart;