import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const Footer = () => {
  return (
    <>
     <div>
        <footer className="text-center py-1 mt-1" style={{backgroundColor:'rgb(83 89 96)', height:'100px', color:'white'}}>
          <Container >
            <Row>
              <Col>
                <h5 style={{ zIndex:999 }}>Follow Us</h5>
                <div>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="mt-1" style={{ zIndex:999 }}>
              <Col>
                <p>&copy; 2025 Book Review. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default Footer