import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

const ProductListScreen = () => {
  const { data:products, isloading, error } = useGetProductsQuery();
  console.log(products);

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className="text-end">
            <Button className="btn-sm m-3">Create Product</Button>
          </Col>
        </Row>
        {isloading ? <Loader /> : error ? <Message variant="danger">{error}</Message>
         : (
          <>
            <Table striped hover responsive className="table-sm">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>PRICE</td>
                        <td>CATEGORY</td>
                        <td>BRAND</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                    products?.map((product) =>(
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button variant="light" className="btn-sm mx-2">
                                    <FaEdit/>
                                </Button>
                                </LinkContainer>
                            </td>
                        </tr>
                    ))}
                </tbody> 
            </Table>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductListScreen;
