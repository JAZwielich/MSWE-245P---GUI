// CSS and other resources
import logo from "./logo.svg";
import "./App.css";

// Components

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import SecondView from "./SecondView";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Footer />
      <Sidebar />
      <Routes>
          <Route index element={<LandingView />} />
          <Route path="SecondView.js" element={<SecondView />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;