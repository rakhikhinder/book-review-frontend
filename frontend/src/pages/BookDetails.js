import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
    const location = useLocation();
    const { title, price, image } = location.state || {}; 

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src={image} />
                    </Card>
                </Col>
                <Col xs={12} md={8}>
                    <h2>{title}</h2>
                    <h5 className="text-muted">Price: {price}</h5>
                    <p><strong>Description:</strong> A detailed description of the book goes here.</p>
                    <Button variant="primary">Buy Now</Button>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>Reviews</h4>
                    <Card>
                        <Card.Body>
                            <strong>Alice:</strong> A masterpiece!
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <strong>Bob:</strong> Loved the symbolism.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BookDetails;
