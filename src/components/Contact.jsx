import React, { useState} from 'react'
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import bgimage from '../assets/bg6.jpg'
import { ToastContainer, toast } from 'react-toastify';




export const Contact = () => {


    const [messages, setMessage] = useState([])
  
      const onChange = e => {    
        setMessage({...message, [e.target.name] : e.target.value})
      }
  
      const { name, email, message } = messages
  
      const onSubmitForm = async (e) => {
          e.preventDefault()
          try {
              const body = {name, email, message}
              
              const response = await fetch(
                  "https://api.ahglab.com/api:fXznCvvM/contact_us",
                  {
                      method: "POST",
                      headers: {
                          "Content-type": "application/json", 
                      },
                      body: JSON.stringify(body)
                  }
              )
              console.log(response)
              const parseRes = await response.json()
              console.log(parseRes)
              if(parseRes) {
                  toast.success('Message Successfully Sent', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
              } else {
                toast.error('Message failed', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                  
              }
            } catch (error) {
              console.log(error.message)
          }
      }
    


    
  return (
    <div style={{ 
        width: `100%`,
        height: `70vh`,
        background: `url(${bgimage})`,
        backgroundSize: `cover`
  
      }}>

<br/>
<br/>
<br/>
<Container>
<Row>
<Col >
   
<Card style={{ height: '500px'}}>
<br/>
<Container>

<Form onSubmit={onSubmitForm.value}>
<h4 className='text-center'>Contact Us:</h4>
    <Form.Group  >
        <Form.Label className="fw-bold">Full Name:</Form.Label>
        <Form.Control type="name" 
                      placeholder="Enter Full Name"
                      id="nameForm" 
                      name="name"  
                      value={name} 
                      onChange={e => onChange(e)}/>
    </Form.Group>
    <br/>
    <Form.Group >
        <Form.Label className="fw-bold">Email address:</Form.Label>
        <Form.Control type="email" 
                      placeholder="Enter Email Address" 
                      id="emailForm" 
                      name="email"
                      value={email} 
                      onChange={e => onChange(e)}/>
    </Form.Group>
    <br/>
    
    <Form.Group >
        <Form.Label className="fw-bold">Message:</Form.Label>
        <Form.Control as="textarea"
                      id="messageForm" 
                      name="message"  
                      value={message} 
                      onChange={e => onChange(e)}
        rows={5} style={{ resize: 'none'}} />
      </Form.Group>
      <br/>
    <Button type="submit" variant="outline-primary">Submit</Button>
    <br/>
    <span> </span>
    </Form>
    <ToastContainer/>  
    </Container>
    
    </Card>
        </Col>
<Col>

<br/>
<Container>
</Container>
    <br/>

</Col>
</Row>

        </Container>  










      </div>
  )
}
