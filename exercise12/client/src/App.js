import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import FeatherView from "./FeatherView";
import BandanaView from "./BandanaView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="section">
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="sideAndMain">
      <Sidebar />
      <Routes>
          <Route index element={<LandingView />} />
          <Route path="FeatherView.js" element={<FeatherView />}></Route>
          <Route path="BandanaView.js" element={<BandanaView />}></Route>
        </Routes>
        </div>
        </BrowserRouter>
        <Footer />
    </div>
    </div>
  );
}

export default App;
