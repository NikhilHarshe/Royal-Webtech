import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import Product from "./page/Product";
import Footer from "./Components/Footer";
import TermCondi from "./page/TermCondi";
import PrivacyPolicy from "./page/PrivacyPolicy";

function App() {
  return (
    <div>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/termscondi" element={<TermCondi/>} ></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} ></Route>
        <Route path="/product/:productName" element={<Product/>} ></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
