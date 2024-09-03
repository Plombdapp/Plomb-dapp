import { Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import ContactUs from "./pages/ContactUs";
import Votes from "./pages/Votes";

import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#252525", color: "white" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Admin" element={<Admin />} /> 
          <Route path="/Vote" element={<Votes />} />
          <Route path="/Navbar" element={<Navbar />} />
           <Route path="/Contact" element={<ContactUs />} /> 
          
           <Route path="/About" element={<About />} /> 
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
