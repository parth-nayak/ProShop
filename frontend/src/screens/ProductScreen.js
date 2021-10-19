import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';

const ProductScreen = ({match}) => {
    const product = products.find(p => p._id === match.params.id);
    console.log('product', product)
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        </>
    )
}

export default ProductScreen
