import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import Product from "./page/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/product/:productName" element={<Product/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
