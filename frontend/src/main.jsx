import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/styles/bootstrap.custom.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ShopScreen from "./screens/ShopScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceorderScreen from "./screens/PlaceorderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import EmailTest from "./screens/EmailTest.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";
import ProductListScreen from "./screens/admin/ProductListScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/email" element={<EmailTest />} />
      {/* Private Routes   */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceorderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
      </Route>
      {/* Admin Route */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
      </Route>


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
      </Provider>
    </React.StrictMode>
  
);
