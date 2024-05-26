import { Route, Router, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import Product from "./page/Product";
import Footer from "./Components/Footer";
import TermCondi from "./page/TermCondi";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Cart from "./page/Cart";
import SignInN from "./page/SignInN";
import Register from "./page/Register";
import SignUp from "./page/SignUp"
import CartForm from "./page/CartForm";
import UserDashbord from "./page/UserDashbord";
import Invoice from "./Components/Invoice"
import PdfGenerator from "./page/PdfGenerator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDetails } from "./services/opretions/userApi";
import { getAllProducts } from "./services/opretions/product";
import ContactUs from "./page/ContactUs";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  const {Token} = useSelector((state) => state.auth);
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const res = dispatch(getAllProducts());
  //   console.log("res of all products ", res);
  //   if (!user) {
  //     if (localStorage.getItem("Token")) {
  //       const token = JSON.parse(localStorage.getItem("Token"))
  //       dispatch(getUserDetails(token, navigate))
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getAllProducts());
        console.log("res of all products ", res);
        setProduct(res);
        console.log("res of all products ", product);
        if (!user && Token) {
          await dispatch(getUserDetails(Token, navigate));
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [dispatch, navigate, user, Token]);

  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home product={product} />} ></Route>
          <Route path="/signIn" element={<SignInN />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userProfile" element={<UserDashbord />} />
          <Route path="/cartCheckOut" element={<CartForm />} />
          <Route path="/termscondi" element={<TermCondi />} ></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />} ></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/PdfGenerator" element={<PdfGenerator />} />
          <Route path="/invoice/:productId" element={<Invoice />} />
          <Route path="/product/:productId" element={<Product />} ></Route>
        </Routes>
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
