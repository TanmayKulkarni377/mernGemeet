import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import phonepe from '../assets/PhonePe-Logo.png'
import shield from '../assets/shield.png'
import fasion from '../assets/diamond.png'
import { Container, Image } from 'react-bootstrap';


const Usp = () => {
  return (
    <>
    <Container>
    <CardGroup className='my-5'>
      <Card>
        <Card.Body className='bg-lightgrey rounded'>
        <Image src={phonepe} height='60px' className='py-2' />
          <Card.Title>Safe Payments with PhonePe</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body className='bg-lightgrey rounded'>
        <Image src={shield} height='60px' className='py-2' />
          <Card.Title>High Quality Product</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body className='bg-lightgrey rounded'>
        <Image src={fasion} height='60px' className='py-2' />
          <Card.Title>Fashionable Jwellery</Card.Title>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </Container>
        
    </>
  )
}

export default Usp