import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Productcard.css'
import {Link } from 'react-router-dom'
import { getPRODUCT } from '../../../actions/product'
import {Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import avatar from '../../../Assets/log-pic.jpg'
  function Productcard({product}) {
    
    const dispatch = useDispatch()
    // const edit=useSelector(state=>state.productReducer.edit)
    // const editproduct=useSelector(state=>state.productReducer.product)




    return (
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{product.titre}</Card.Title>
    <Card.Text>
     {product.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       
    );
}

export default Productcard
