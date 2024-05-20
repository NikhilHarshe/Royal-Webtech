import { Route, Router, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signIn" element={<SignInN />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cartCheckOut" element={<CartForm/>} />
        <Route path="/termscondi" element={<TermCondi/>} ></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} ></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product/>} ></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
