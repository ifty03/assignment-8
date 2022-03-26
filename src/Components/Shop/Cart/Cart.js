import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import './Cart.css'

/*---------------------------
     Set selected item  
---------------------------*/

const Cart = ({item,getItem,clear}) => {
    return (
        <div className='cart-container'>
            <h3 className='text-center mb-4 selected'>Selected Watch <span><FaShoppingCart/><sup className='cart-quantity'>{item.length}</sup></span></h3>
            {
                item.map(meal=><h5 key={meal.id}> <span><img style={{width:"45px",borderRadius:"50%",height:"40px"}} src={meal.picture} alt="" /></span> 
                
                <span style={{margin:"0px 4px"}}>{meal.name.slice(0,13)+'...'}</span> 
                
                <span style={{fontSize:"25px",cursor:"pointer"}}><MdDeleteForever/></span></h5>)
            }
            <button onClick={()=>{getItem(item)}} className='btn btn-success mt-4'>Chose one for me <span style={{fontSize:"19px"}}><GiPerspectiveDiceSixFacesRandom/></span></button><br />
            
            <button onClick={clear} className='btn btn-danger mt-3'>Chose again <span style={{fontSize:"19px"}}><HiRefresh/></span></button>
        </div>
    );
};

export default Cart;