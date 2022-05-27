import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactpage from "../components/Contactpage";

function Contact() {
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
      <Contactpage />
      <div className="fixed bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
