import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calender from "./components/Calender";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [cartImages, setCartImages] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Calender setCartImages={setCartImages} cartImages={cartImages} />
          }
        />
        <Route path="cart" element={<ImageGallery cartImages={cartImages}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
