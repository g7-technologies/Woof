import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Mint from "./Pages/Mint";
import Roadmap from "./Pages/Roadmap";
import Mbl_Mint from "./Pages/Mbl_Mint";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

function App() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 5000);
  }, []);
  AOS.init();
  return (
    <>
      {loader ? <Loader /> : ""}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/mbl_mint' element={<Mbl_Mint />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;