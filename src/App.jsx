import { useState } from "react";
import "./App.css";
import Header from "../components/layout/header";
import Intro from "../components/intro";
import About from "../components/about";
import Project from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/layout/footer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Intro />
        <Project />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
