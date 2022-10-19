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
                <Col >
       
                </Col>
                <Col >
        <a href="https://www.facebook.com/skylitphotoph"
        className="facebook social ">
        <FontAwesomeIcon icon={faFacebook} size="2x" color='green'/>
      </a>
        <span> </span>
      <a href="https://www.instagram.com/skylitphotoph/"
        className="instagram social ">
        <FontAwesomeIcon icon={faInstagram} size="2x" color='green'/>
      </a>
      <span> </span>
      <a href="skylitphotoph@gmail.com" className="google social" > 
        <FontAwesomeIcon icon={faGoogle} size="2x" color='green'/>
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
