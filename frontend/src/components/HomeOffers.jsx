import { Row, Col, Button, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import bgimg from "../assets/bracelete-bg.webp";
import hbanner from "../assets/h1-banner.webp";
import iicon from "../assets/icon-05.webp";

const HomeOffers = () => {
  return (
    <>
      <Row className="my-4 g-0">
        <Col
          md={6}
          style={{ backgroundImage: `url(${hbanner})`   }}
          className=" py-4"
        >
            <Stack gap={3} className="">
                <div className="mt-5 mb-3 d-flex align-items-center justify-content-center" >
                <img src={iicon} alt="icon" width={100} />
                </div>
                <div className=" text-white text-center d-flex align-items-center justify-content-center">
                <h1 style={{fontSize: '50px'}}>Check Out Our<br/> Collections Now</h1>
                </div>
            </Stack>
            <div className="d-flex align-items-center justify-content-center">
            <LinkContainer to="/login">
            <Button className="btn-block bg-black my-3  fs-3" type="button">
              Shop Now
            </Button>
          </LinkContainer>
            </div>
            
            
        </Col>
        <Col
          md={6}
          className=""
          style={{ backgroundImage: `url(${bgimg})`, backgroundSize:'cover' }}
        ></Col>
      </Row>
    </>
  );
};

export default HomeOffers;
