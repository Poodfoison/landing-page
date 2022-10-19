import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';

export const Services = () => {
  return (
    <>
     <Container>
        <Row>
             <Col><span><br/></span></Col>
        </Row>
        <Row>
             <Col><span><br/></span></Col>
        </Row><Row>
             <Col><h1 className='text-center'>Services</h1></Col>
        </Row>
        <Row>
             <Col><span><br/></span></Col>
        </Row>
      <Row>
        <Col>
        <Card border="light" >
        <Card.Img variant="top" src={require('../assets/bg5.jpg')} />
        <Card.Body>
        <Card.Title>Wedding Photography</Card.Title>
          <Card.Text>
          3 photographers 8-12hours photo coverage for Preparation, Ceremony, and Reception. 400 culled and post-processed images. All photos stored in a flash drive Same-day slideshow.
          </Card.Text>
        </Card.Body>
        
      </Card>
        </Col>
        <Col>
        <Card border="light" >
        <Card.Img variant="top" src={require('../assets/bg4.jpg')} />
        <Card.Body>
        <Card.Title>Engagement Shoot</Card.Title>
          <Card.Text>
          3-4hrs Engagement Shoot 2-3 layouts AVP slideshow 100-200 culled and post processed images.
          <span><br/></span>
          <span><br/></span>
          </Card.Text>
        </Card.Body>
        
      </Card>
        </Col>
      </Row>
      <Row>
             <Col><span><br/></span></Col>
        </Row>
        <Row>
             <Col><span><br/></span></Col>
        </Row>
    </Container>
    
    
    </>
  )
}
