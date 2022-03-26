import React, { useEffect, useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import Cart from './Cart/Cart';
import Products from './Products/Products';
import './Shop.css'


const Shop = () => {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("product.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    /*--------------------------
         get selected item
    -------------------------- */
    const [item,setItem]=useState([])
    const selectedItem=(items)=>{
        const newItem = [...item,items];
        const exist = item.find(meal=>meal.id===items.id);
        if(!exist){

            if(newItem.length<5){
                setItem(newItem)
            }
            else{
                alert("Opps... You reach maximaum...!")
            }
        }
        else{
            alert("This Item alredy added...!!")
        }
    }

    /*--------------------------
        Clear selected item
    ---------------------------*/
    const clearSelectedItem =()=>{
        setItem([])
    }

    /*--------------------------
         get random food 
    ----------------------------*/
    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    
    function getItem(items){
        if(items.length){
            const randomIndex = getRandom(items.length);
            let random = [items[randomIndex]];
            setItem(random)
        }
        else{
            alert("Please select four item then click")
        }

    }

    return (
        <Row className='mt-5'>
            <Col sm={12} lg={9}>
            <Row>
            {
               products.map(product=><Products selectedItem={selectedItem} key={product.id} product={product}></Products> )
            }
            </Row>
            </Col>

            <Col sm={12} lg={3}>
               <Cart clear={clearSelectedItem} getItem={getItem} item={item}></Cart>
            </Col>
        </Row>
    );
};

export {Shop};
