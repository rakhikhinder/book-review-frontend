import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for navigation
import bookImage from '../assets/images/backimageslide.png';
import backImageSlide from '../assets/images/backimageslide.png';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import book5 from '../assets/images/book5.jpg';
import book6 from '../assets/images/book6.jpg';
import book7 from '../assets/images/book7.jpg';
import book8 from '../assets/images/book8.jpg';
import book9 from '../assets/images/book9.jpg';
import book10 from '../assets/images/book10.jpg';
import book11 from '../assets/images/book11.jpg';
import book12 from '../assets/images/book12.jpg';

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

            {/* Book List Section */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Explore More Books</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    <Link to="/bookDetails" state={{ title: "Book 1", price: "$12.99", image: book1 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book1} alt='Book 1' style={{ width: '100%' }} />
                            <h5>Book Title 1</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 2", price: "$15.99", image: book2 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book2} alt='Book 2' style={{ width: '100%' }} />
                            <h5>Book Title 2</h5>
                            <p>Price: $15.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 5", price: "$12.99", image: book5 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book5} alt='Book 5' style={{ width: '100%' }} />
                            <h5>Book Title 3</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 6", price: "$12.99", image: book6 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book6} alt='Book 6' style={{ width: '100%' }} />
                            <h5>Book Title 4</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 7", price: "$12.99", image: book7 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book7} alt='Book 7' style={{ width: '100%' }} />
                            <h5>Book Title 5</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 8", price: "$12.99", image: book8 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book8} alt='Book 8' style={{ width: '100%' }} />
                            <h5>Book Title 6</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 9", price: "$12.99", image: book9 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book9} alt='Book 9' style={{ width: '100%' }} />
                            <h5>Book Title 9</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                     <Link to="/bookDetails" state={{ title: "Book 10", price: "$12.99", image: book10 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book10} alt='Book 9' style={{ width: '100%' }} />
                            <h5>Book Title 10</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 11", price: "$12.99", image: book11 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book11} alt='Book 11' style={{ width: '100%' }} />
                            <h5>Book Title 11</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    <Link to="/bookDetails" state={{ title: "Book 12", price: "$12.99", image: book12 }}>
                        <div style={{ width: '200px' }}>
                            <img src={book12} alt='Book 12' style={{ width: '100%' }} />
                            <h5>Book Title 12</h5>
                            <p>Price: $12.99</p>
                        </div>
                    </Link>
                    {/* More books can be added similarly */}
                </div>
            </div>
        </div>
    );
};

export default Home;
