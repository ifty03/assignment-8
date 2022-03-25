import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import './Cart.css'

/*---------------------------
     Set selected item  
---------------------------*/

const Cart = ({item,getItem,clear}) => {
    return (
        <div className='cart-container'>
            <h2 className='text-center'>This is cart</h2>
            {
                item.map(meal=><h5 key={meal.id}> <span><img style={{width:"45px",borderRadius:"50%",height:"40px"}} src={meal.picture} alt="" /></span> <span style={{margin:"0px 15px"}}>{meal.price}</span> <span style={{fontSize:"25px",cursor:"pointer"}}><MdDeleteForever/></span></h5>)
            }
            <button onClick={()=>{getItem(item)}} className='btn btn-success mt-4'>Chose one for me</button><br />
            <button onClick={clear} className='btn btn-danger mt-3'>Chose again</button>
        </div>
    );
};

export default Cart;