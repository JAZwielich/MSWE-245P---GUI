// CSS and other resources
import logo from "./logo.svg";
import "./App.css";

// Components

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;