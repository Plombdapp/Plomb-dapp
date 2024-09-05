import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";

import { client } from "./client";

import Admin from "./pages/Admin";
import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ZKME from "./pages/ZKME";
import ContactUs from "./pages/ContactUs";
<<<<<<< HEAD
import Votes from "./pages/Votes";
import About from "./pages/About";
import Polls from "./pages/Polls";
import { Results } from "./pages/Results";
import '@zkmelabs/widget/dist/style.css';

=======
import Votes from "../src/pages/Votes";

import About from "./pages/About";
import Polls from "../src/pages/Polls";
import Faq from "./pages/Faq";
import { Results } from "./pages/Results";
import "@zkmelabs/widget/dist/style.css";

import { configureWeb3Modal } from "./context";
configureWeb3Modal();
>>>>>>> ddcb4e569dcf5764fef80cb9b3c0b2dee3f5f16e
function App() {
  // State for storing wallet information
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  
  

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
          <Route path="/Results" element={<Results />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Polls" element={<Polls />} />
          <Route path="/ZKME" element={<ZKME />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
