import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    const currentYr = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>eCommerce &copy; {currentYr}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer