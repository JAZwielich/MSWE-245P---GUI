// CSS and other resources
import "./App.css";

// Components

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import SecondView from "./SecondView";
import WeatherView from "./WeatherView";
import Login from "./LoginView";




// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="Login">
      <Login/>
    <div className="App">
      <BrowserRouter>
      <Header />
      <Footer />
      <Sidebar />
      <Routes>
          <Route index element={<LandingView />} />
          <Route path="SecondView.js" element={<SecondView />}></Route>
          <Route path="WeatherView.js" element={<WeatherView />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    </div>
  );
}

export default App;