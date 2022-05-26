import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aboutpage from "../components/Aboutpage";

function About() {
  return (
    <div className="text-white">
      <Navbar />
      <Aboutpage />
      <div className="fixed bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default About;
