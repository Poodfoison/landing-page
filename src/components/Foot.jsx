import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";



export const Foot = () => {
  return (
    <div>
        <Container>
            <br/>
            <Row className="justify-content-end">
                <Col >
                </Col>
                <Col varaint="success">
                 <a href="#home" className='h6'>Home</a><span> </span>
                 <a href="#services" className='h6'>Services</a><span> </span>
                 <a href="#portfoli" className='h6'>Porfolio</a><span> </span>
                 <a href="#contact" className='h6'>Contact Us</a>
                </Col>
                <Col >
        <a href="https://www.facebook.com/skylitphotoph"
        className="facebook social ">
        <FontAwesomeIcon icon={faFacebook} size="2x" color='blue'/>
      </a>
        <span> </span>
      <a href="https://www.instagram.com/skylitphotoph/"
        className="instagram social ">
        <FontAwesomeIcon icon={faInstagram} size="2x" color='blue'/>
      </a>
      <span> </span>
      <a href="skylitphotoph@gmail.com" className="google social" > 
        <FontAwesomeIcon icon={faGoogle} size="2x" color='blue'/>
      </a>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Skylit Photo <AiOutlineCopyrightCircle/> All Rights Reserve</p>
                </Col>
            </Row>
        </Container>

    </div>
  )
}
