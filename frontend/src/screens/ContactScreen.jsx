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
import whatsappLogo from "../assets/whatsapp-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import instaLogo from "../assets/instagram-logo.svg";

const ContactScreen = () => {

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

  return (
    <Container>
      <h1 className="py-4">Contact Us</h1>
      <Row className="my-5 ">
        <Col lg={6} md={12}>
          <Row>
            <Col>
              <Stack gap={3}>
                <div className="p-2">
                  <h5 className="mb-1">
                    <strong>OFFICE ADDRESS</strong>
                  </h5>
                  <p className="text-justify">
                    102, 1st Floor, Matoshree, Sr. No. 34, H. No. 10/2/1, PMT
                    Colony, Mogannagar, Dhankawadi, Pune – 411043, Maharashtra,
                    India
                  </p>
                </div>
                <div className="p-2">
                  <h5 className="mb-1">
                    <strong>SHOWROOM ADDRESS</strong>
                  </h5>
                  <p className="text-justify">
                    OFFICE NO 1, 1 ST FLOOR, SUBHALAXMI APPERMENTNEAR VITTHAL
                    MANDIR KASTURI CHOWK Pune – 411002, Maharashtra India
                  </p>
                </div>
              </Stack>
            </Col>
            <Col>
              <Stack gap={2}>
                <div className="pt-1">
                  <h5 className="mb-1">
                    <strong>EMAIL US</strong>
                  </h5>
                  <p className="text-justify mb-0">info@gemeet.in</p>
                </div>
                <div className="">
                  <h5 className="mb-1">
                    <strong>TELEPHONE</strong>
                  </h5>
                  <p className="text-justify">+91 9967099613</p>
                </div>
                <div className="mt-4 pt-1">
                  <h5 className="">
                    <strong>FOLLOW US</strong>
                  </h5>
                  <div className=" flex flex-row ">
                    <Image
                      className="text-center m-2"
                      src={whatsappLogo}
                      width={40}
                    />
                    <Image
                      className="text-center m-2"
                      src={facebookLogo}
                      width={40}
                    />
                    <Image
                      className="text-center m-2"
                      src={instaLogo}
                      width={40}
                    />
                  </div>
                </div>
              </Stack>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={12}>
          <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                rows={3}
              />
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
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
