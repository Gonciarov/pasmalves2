import React from "react";

import './App.css';

import Amplify from "aws-amplify"
import {Container, Button, Form} from 'react-bootstrap';
import { API } from "aws-amplify";
import awsExports from './aws-exports';
Amplify.configure(awsExports);
async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message
    }
  };

  console.log(data);
  const apiData = await API.post('pasmalvesapi', '/contact', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { name: '', email: '', message: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

/* function Contact() {
  return (

    
  <Container>
  <div>
    <h3>Get in touch</h3>
    <br/>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Message" onChange={e => updateFormState('message', e.target.value)} />
        </Form.Group>
        <Button onClick={addContact}>Send a message</Button>
      </Form>
    </div>
  </Container>
  )
}

export default Contact; */


const Contact = () => {
    return (
      <div>
        <div id="contact">
        <Container>
            <div className="col-md-8 inline-block">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    How can we help you? Please leave your message below.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
                        </Form.Group>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
                        </Form.Group>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                  <Form.Group>
                  <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Message" onChange={e => updateFormState('message', e.target.value)} />
                    </Form.Group>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <Button onClick={addContact} className="btn btn-custom btn-lg">Send a message</Button>
                </form>
              </div>
            </div>
            
            <div className="col-md-3 col-md-offset-1 inline-block">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address: 
                  </span>{" "}
                  Sedulinos al. 35-17, LT-31232 Visaginas Lithuania
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone: 
                  </span>{" "}
                  +370 698 37152
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                  <i class="fa fa-user-tie"></i> Director: 
                  </span>{" "}
                  Jurij Kiricenko
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                  <i class="fa fa-envelope"></i> Email: 
                  </span>{" "}
                  pasmalves@tts.lt
                </p>
              </div>
            </div>
            </Container>
        </div>
        </div>
      
    );
  }


export default Contact; 