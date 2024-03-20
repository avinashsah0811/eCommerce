import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Raating from '../components/Raating'
import { Link } from 'react-router-dom'

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find(product => product._id === productId);
    console.log(product);
    return (
       <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            {/* product image  */}
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='fluid' >

                     {/* product name */}
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                     {/* product rating */}
                    <ListGroup.Item>
                        <Raating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>

                     {/* product price */}
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <strong>Description:</strong> {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='fluid'>

                        {/* price  */}
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {/* stock status  */}
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {/* add to card btn  */}
                        <ListGroup.Item>
                            <Button 
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
       </>
    )
}

export default ProductScreen