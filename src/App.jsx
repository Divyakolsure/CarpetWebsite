import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePages from "./pages/Homepage";
import Footer from "./components/footer/Footer";
  // Ensure correct path

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div className="app">
     
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePages/>} />
          </Routes>
        </div>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
