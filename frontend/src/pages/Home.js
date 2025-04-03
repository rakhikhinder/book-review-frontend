import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for navigation
import bookImage from '../assets/images/backimageslide.png';
import backImageSlide from '../assets/images/backimageslide.png';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';


const Home = () => {
    return (
        <div>
            {/* Welcome Section */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Welcome to the Book Review App</h1>
                <p>Discover and review your favorite books!</p>
            </div>

            {/* Carousel Section */}
            <Carousel>
                <Carousel.Item>
                    <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                        <img
                            className='d-block w-100'
                            src={backImageSlide}
                            alt='Background Image'
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                            <h2>Featured Books</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <Link to="/bookDetails" state={{ title: "Book 1", price: "$12.99", image: book1 }}>
                                    <img src={book1} alt='Book 1' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 2", price: "$15.99", image: book2 }}>
                                    <img src={book2} alt='Book 2' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 3", price: "$10.99", image: book3 }}>
                                    <img src={book3} alt='Book 3' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 4", price: "$20.00", image: book4 }}>
                                    <img src={book4} alt='Book 4' style={{ height: '200px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                     <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                        <img
                            className='d-block w-100'
                            src={backImageSlide}
                            alt='Background Image'
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                            <h2>Featured Books</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <Link to="/bookDetails" state={{ title: "Book 1", price: "$12.99", image: book4 }}>
                                    <img src={book1} alt='Book 1' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 2", price: "$15.99", image: book5 }}>
                                    <img src={book2} alt='Book 2' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 3", price: "$10.99", image: book6 }}>
                                    <img src={book3} alt='Book 3' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 4", price: "$20.00", image: book7 }}>
                                    <img src={book4} alt='Book 4' style={{ height: '200px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                        <img
                            className='d-block w-100'
                            src={backImageSlide}
                            alt='Background Image'
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                            <h2>Featured Books</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <Link to="/bookDetails" state={{ title: "Book 1", price: "$12.99", image: book8 }}>
                                    <img src={book1} alt='Book 1' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 2", price: "$15.99", image: book9 }}>
                                    <img src={book2} alt='Book 2' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 3", price: "$10.99", image: book10 }}>
                                    <img src={book3} alt='Book 3' style={{ height: '200px' }} />
                                </Link>
                                <Link to="/bookDetails" state={{ title: "Book 4", price: "$20.00", image: book11 }}>
                                    <img src={book4} alt='Book 4' style={{ height: '200px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                {/* Other Carousel Items (omitted for brevity) */}
            </Carousel>
            </div>
    );
};

export default Home;