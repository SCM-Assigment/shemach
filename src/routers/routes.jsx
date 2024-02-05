import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/productDetail";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Component defining the routes for the application
 */
const Routers = () => {
  // Define routes using Routes and Route components
  return (
    <Routes>
      {/* Redirect to home page when root path is accessed */}
      <Route path="/" element={<Navigate to="/home" />} />
      {/* Define route for home page */}
      <Route path="home" element={<Home />} />
      {/* Define route for signup page */}
      <Route path="signup" element={<Signup />} />
      {/* Define route for login page */}
      <Route path="login" element={<Login />} />
      {/* Define route for shop page */}
      <Route path="shop" element={<Shop />} />
      {/* Define route for checkout page with protection */}
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      {/* Define route for cart page */}
      <Route path="cart" element={<Cart />} />
      {/* Define route for product detail page with parameter */}
      <Route path="shop/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routers;
