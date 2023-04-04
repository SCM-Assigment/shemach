import { Routes, Route,Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Signup  from "../pages/Signup";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/productDetail";


const Routers = () => {
    return <Routes> 
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop/id" element={<ProductDetail/>} />
    </Routes>
};

export default Routers;