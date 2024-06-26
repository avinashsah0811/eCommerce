import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'

export const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };

        fetchProduct();
    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                    <Product product={product} />
                </Col>
            ))}
            </Row>
        </>
    )
}

export default HomeScreen