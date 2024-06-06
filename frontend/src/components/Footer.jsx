import {
  Row,
  Col,
  Container,
  Stack,
  Image,
  Nav,
  NavLink,
  Form,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/Gemeet-logo.png";
import phonepe from '../assets/PhonePe-Logo.png'
import whatsappLogo from '../assets/whatsapp-logo.svg'
import facebookLogo from '../assets/facebook-logo.svg'
import instaLogo from '../assets/instagram-logo.svg'


const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className=" border mt-4 ">
          <Col md={4} className=" p-4 px-5 text-center ">
            <Image src={logo} width={125} />
            <p className="text-justify px-3">
            102, 1st Floor, Matoshree, Sr. No. 34, H. No. 10/2/1, PMT Colony, Mogannagar, Dhankawadi, Pune – 411043, Maharashtra, India
            </p>
            <div className=" flex flex-row ">
              <Image className="text-center m-2" src={whatsappLogo} width={40} />
              <Image className="text-center m-2" src={facebookLogo} width={40} />
              <Image className="text-center m-2" src={instaLogo} width={40} />
            </div>
          </Col>
          <Col md={4} className="border text-center border-top-0 border-bottom-0  p-4 ">
            <Row>
              <Col>
              <Nav className="flex-column fs-6">
              <h5>Useful Links</h5>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Shop</NavLink>
              <NavLink href="#">Blog</NavLink>
              <NavLink href="#">Contact us</NavLink>
            </Nav>
              </Col>
              <Col>
              <Nav className="flex-column fs-6">
              <h5>Useful Links</h5>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Shop</NavLink>
              <NavLink href="#">Blog</NavLink>
              <NavLink href="#">Contact us</NavLink>
            </Nav>
              </Col>
            </Row>
            
          </Col>
          <Col md={4} className=" p-4  mr-5">
          <h5>NEWSLETTER</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
            <Stack direction="horizontal" gap={3}>
                
              <Form.Control
                className="me-auto"
                placeholder="Email* "
              />
              <Button className="text-white btn-black" >Submit</Button>
            </Stack>
          </Col>
        </Row>
        <Row className="p-2 ">
            <Col>
            Made By Startabove
            </Col>
            <Col className="text-end pe-4">
            <span className="h5  px-2">Powered By</span>
            <Image src={phonepe} width={90} />
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
