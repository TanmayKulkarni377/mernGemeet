import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { toast } from "react-toastify";

export default function ContactUs() {

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email using EmailJS
    emailjs.sendForm('contactsmtpmail', 'template_a62c40f', form.current, 'ctwRW5yQFyrUh2NwA')
      .then((result) => {
        console.log(result.text);
        toast.success('mail sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      }, (error) => {
        console.log(error.text);
        toast.error('mail not sent due to error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      });
    event.target.reset();
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm('contactsmtpmail', 'template_a62c40f', e.target, 'ctwRW5yQFyrUh2NwA')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  return (
    <>
    <Container>

    {/* <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="mail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}



    <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
    <Form.Group className="mb-3" controlId="Name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"  name="user_name"  placeholder="Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="user_email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" name="message" placeholder="Message" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <div className="d-grid">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>

  </Container>

    </>
    
  );
}
