import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { IoMdCart } from "react-icons/io";
import { Col } from 'react-bootstrap';

const Products = (props) => {
    const {selectedItem,product}=props;
    const {name,picture,price}=product;
    return (
        <Col className='mb-6' lg={4} sm={12} md={6}>
        <MDBCard style={{ maxWidth: '22rem' }}>
           <MDBCardImage src={picture} position='top' alt='this is food' />
        <MDBCardBody>
           <MDBCardTitle>Organic Food</MDBCardTitle>
            <MDBCardText>
            Price: ${price}
           </MDBCardText>
           <MDBBtn href='#' onClick={()=>{selectedItem(product)}}>Add To Cart <span style={{fontSize:'18px'}}><IoMdCart/></span> </MDBBtn>
           </MDBCardBody>
        </MDBCard>
        </Col>
    );
};

export default Products;