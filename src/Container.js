import React from "react";
import Top from "./Top.js";
import Header from "./Header.js";
import Section from "./Section.js";
import Break from "./Break.js";
import Footer from "./Footer.js";

export default function Container() {
  return (
    <div className="container">
      <Top />
      <Header />
      <Section />
      <Break />
      <Footer />
    </div>
  );
}
