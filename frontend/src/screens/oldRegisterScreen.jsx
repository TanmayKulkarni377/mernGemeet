import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import indianflag from "../assets/Indiaflag.png";
import * as Yup from "yup";

const RegisterScreen = () => {
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
  const [errors, setErrors] = useState({});

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // yup schema

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is Required"),
    lastname: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    billing_phone: Yup.string()
      .matches(/^\d{10}$/, "pincode  Number must be 10 digits")
      .required(),
    pincode: Yup.string()
      .required("pincode required")
      .matches(/^\d{6}$/, "Phone Number must be 6 digits"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const submitHandler = async (e) => {
    e.preventDefault();

   

    try {
      await validationSchema.validate({firstname, lastname, email, billing_phone, pincode, password, confirmPassword}, { abortEarly: false });
      const res = await register({
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
            navigate("/");
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      toast.error("invalid form inputs ");
      // toast.error(err?.data?.message || err.error);
    }

    // if (password !== confirmPassword) {
    //   toast.error("invalid form inputs ");
    // } else
    //   try {
    //     const res = await register({
    //       firstname,
    //       lastname,
    //       email,
    //       billing_phone,
    //       city,
    //       address_state,
    //       pincode,
    //       billing_address,
    //       shipping_address,
    //       password,
    //     }).unwrap();
    //     dispatch(setCredentials({ ...res }));
    //     navigate("/");
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error);
    // }
  };

  return (
    <FormContainer>
      <h1>Sign UP</h1>

      <Form onSubmit={submitHandler}>
        <Row>
          <Form.Group as={Col} className="my-2" controlId="firstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Enter Firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></Form.Control>
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </Form.Group>
          <Form.Group as={Col} className="my-2" controlId="lastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter Lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></Form.Control>
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            {errors.email && <div className="error">{errors.email}</div>}
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
                name="billing_phone"
                placeholder="Enter Phone No."
                required
                value={billing_phone}
                onChange={(e) => setBilling_phone(e.target.value)}
              ></Form.Control>
              {errors.billing_phone && (
                <div className="error">{errors.billing_phone}</div>
              )}
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="city/Town">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
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
              name="state"
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
              name="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Group>
          {errors.pincode && <div className="error">{errors.pincode}</div>}
        </Row>

        <Form.Group className="mb-3" controlId="billing_address">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="billing_address"
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
            name="shipping_address"
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
            name="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          {errors.password && <div className="error">{errors.password}</div>}
        </Form.Group>

        <Form.Group className="my-2" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="con"
            placeholder="Enter Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          Sign Up
        </Button>

        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
