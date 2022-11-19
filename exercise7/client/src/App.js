// CSS and other resources
import logo from "./logo.svg";
import "./App.css";

// Components

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TextMain from "./TextMain";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Sidebar />
      <TextMain />
    </div>
  );
}

export default App;