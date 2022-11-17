import React from "react";
import Header from "./components/header/Header";
import Land from "./components/land/Land";
import About from "./components/about/About";
import FilmTV from "./components/filmTV/filmTV";
import Faq from "./components/faq/faq";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Land />
      <About />
      <FilmTV />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
