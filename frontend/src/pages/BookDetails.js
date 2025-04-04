import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';



const BookDetails = () => {
    const location = useLocation();
    const { title, price, image } = location.state || {}; 
    const [rating, setRating] = useState(0);
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    const handleRating = (index) => {
        setRating(index);
    };

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
                        <div className="mb-3">
                            <strong>Rate this Book:</strong>
                            <div>
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <FaStar 
                                        key={index} 
                                        onClick={() => handleRating(index)} 
                                        style={{ cursor: 'pointer', color: index <= rating ? 'gold' : 'gray' }} 
                                    />
                                ))}
                            </div>
                        </div>
                       <div className="mb-3">
                             <Button variant="success" className="me-2" onClick={() => setUpvotes(upvotes + 1)}>
                                <FaThumbsUp /> {upvotes}
                            </Button>
                            <Button variant="danger" onClick={() => setDownvotes(downvotes + 1)}>
                                <FaThumbsDown /> {downvotes}
                            </Button>
                        </div>
                        
                        <Button variant="primary" size="lg">Buy No</Button>
                    </Col>
                </Row>
                
                <Row className="mt-4">
                    <Col>
                        <h4>Reviews</h4>
                        <Card className="mb-2">
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
            
            {/* Responsive Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h5>Follow Us</h5>
                            <div>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <p>&copy; 2025 Book Review. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default BookDetails;
