import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc   Auth user/set token
//route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      billing_phone: user.billing_phone,
      address_state: user.address_state,
      city: user.city,
      pincode: user.pinecode,
      billing_address: user.billing_address,
      shipping_address: user.shipping_address,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc   Register a new user
//route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, billing_phone, password, address_state, city, pincode, billing_address, shipping_address } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstname,
    lastname,
    email,
    billing_phone,
    password,
    address_state,
    city,
    pincode,
    billing_address,
    shipping_address,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      billing_phone: user.billing_phone,
      address_state: user.address_state,
      city: user.city,
      pincode: user.pinecode,
      billing_address: user.billing_address,
      shipping_address: user.shipping_address,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   Logout user
//route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User Logged out" });
});

// @desc  Get user Profile
//route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      billing_phone: user.billing_phone,
      address_state: user.address_state,
      city: user.city,
      pincode: user.pinecode,
      billing_address: user.billing_address,
      shipping_address: user.shipping_address,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc   Update user profile
//route PUT /api/users/auth
// @access Private
const UpdateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
    user.billing_phone= req.body.billing_phone || user.billing_phone;
    user.address_state= req.body.address_state || user.address_state;
    user.city = req.body.city || user.city;
    user.pincode = req.body.pincode || user.pincode;
    user.billing_address = req.body.billing_address || user.billing_address;
    user.shipping_address = req.body.shipping_address || user.shipping_address;
    user.password = req.body.password || user.password;
    
    const updatedUser = await user.save();

    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      billing_phone: user.billing_phone,
      address_state: user.address_state,
      city: user.city,
      pincode: user.pincode,
      billing_address: user.billing_address,
      shipping_address: user.shipping_address,
    });
  } else res.status(404);
  throw new Error("User not found");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  UpdateUserProfile,
};
