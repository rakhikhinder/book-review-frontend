import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


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

        </Container>
    );
// };

export default BookDetails;