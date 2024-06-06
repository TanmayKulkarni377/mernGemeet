import { Col, Container, Image, Button  } from "react-bootstrap";
import aboutimg from "../assets/aboutus.jpg";
import { LinkContainer } from "react-router-bootstrap";


const AboutScreen = () => {
  return (
    <Container>
      <Col className="m-5 text-center">
        <h2 className="text-black">About Us</h2>
        <p className="fs-5">
          Bringing You Quality Metaphysical Tools for Over 50 Years
        </p>
        <p className=" f-16 text-justify">
          We have been passionately involved in the creation of energetically
          empowering jewelry and tools for multiple generations. What started as
          a small shop providing amulets and talismans has grown into the
          premier destination for all your crystal healing and spiritual needs.
          For over half a century, we have specialized in handcrafting
          bracelets, pyramids, malas, and accessories using sacred Rudraksha
          beads, precious gemstones, gold, and other premium materials. Our
          artisans have refined their skills over decades to produce every piece
          with meticulous care and imbue it with positive intentions.
        </p>
        <Image src={aboutimg} rounded />
        <p className="text-justify f-16 py-4">
          At our core, we value providing customers with metaphysical tools of
          the utmost quality. We are selective about every component that goes
          into our healing jewelry and products, sourcing only the highest-grade
          Rudraksha seeds, powerful tumbled crystals, and sacred geometry
          pyramids. You can trust that each piece meets our unwavering
          standards. <br />
          <br />
          Our diverse inventory includes crystals and stones like quartz,
          amethyst, citrine, carnelian, and lapis lazuli chosen intuitively for
          their unique energy properties. We carry every type of traditional and
          exotic Rudraksha, from standard 5-faced beads to rare Ganeshas. We
          offer pyramid and grid sets for manifestation and healing.
          <br />
          <br />
          In addition to our collection of handcrafted items, we provide
          astrological and crystal consultations to guide you in selecting
          pieces that will empower your journey based on the cosmic influences
          affecting you. Our experts have extensively studied the metaphysical
          arts.
        </p>
        <p className="fs-5 fw-semibold">
          We invite you to explore our sacred offerings and discover the
          transformation they can bring to your life. Please contact us if you
          have any questions – we’re always happy to help you on your path!
        </p>
        <LinkContainer to='/contact'>
        <Button className="btn-lg px-5 py-3">Contact US </Button>

        </LinkContainer>
      </Col>
    </Container>
  );
};

export default AboutScreen;
