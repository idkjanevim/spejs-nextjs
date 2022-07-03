import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aboutpage from "../components/Aboutpage";

function About() {
  return (
    <div className="text-white">
      <Head>
        <title>Spejs</title>
        <meta name="description" content="About Spejs" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
        />
      </Head>
      <Navbar />
      <Aboutpage />
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default About;
