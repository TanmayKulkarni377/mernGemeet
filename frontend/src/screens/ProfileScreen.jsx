import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import indianflag from "../assets/Indiaflag.png";

const ProfileScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [billing_phone, setBilling_phone] = useState("");
  const [city, setCity] = useState("");
  const [address_state, setAddress_state] = useState("");
  const [pincode, setPincode] = useState("");
  const [billing_address, setBilling_address] = useState("");
  const [shipping_address, setShipping_address] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setFirstname(userInfo.firstname);
    setLastname(userInfo.lastname);
    setEmail(userInfo.email);
    setBilling_phone(userInfo.billing_phone);
    setCity(userInfo.city);
    setAddress_state(userInfo.address_state);
    setPincode(userInfo.pincode);
    setBilling_address(userInfo.billing_address);
    setShipping_address(userInfo.shipping_address);
  }, [
    userInfo.firstname,
    userInfo.lastname,
    userInfo.email,
    userInfo.billing_phone,
    userInfo.city,
    userInfo.address_state,
    userInfo.pincode,
    userInfo.billing_address,
    userInfo.shipping_address,
  ]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match ");
    } else
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          firstname,
          lastname,
          email,
          billing_phone,
          city,
          address_state,
          pincode,
          billing_address,
          shipping_address,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile Update");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={submitHandler}>
        <Row>
          <Form.Group as={Col} className="my-2" controlId="firstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="my-2" controlId="lastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} className="my-2" controlId="billing_phone">
            <Form.Label>Phone No.</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">
                <img src={indianflag} alt="indian flag" width="28px" />
                +91
              </InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Enter Phone No."
                required
                value={billing_phone}
                onChange={(e) => setBilling_phone(e.target.value)}
              ></Form.Control>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="city/Town">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City/Town"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="address_state">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              required
              value={address_state}
              onChange={(e) => setAddress_state(e.target.value)}
            >
              <option>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Pincode"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="billing_address">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="1234 Main St"
            required
            value={billing_address}
            onChange={(e) => setBilling_address(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="shipping_address">
          <Form.Label>
            Shipping Address(optional: If billing address is same as shipping
            address){" "}
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Apartment, studio, or floor"
            value={shipping_address}
            onChange={(e) => setShipping_address(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;
