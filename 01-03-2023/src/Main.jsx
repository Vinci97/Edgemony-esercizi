import { useState } from "react";
import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";
import Hero from "./components/hero";
import Gallery from "./components/gallery"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}> 
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <Header />
      <Hero title="Store" />
      <Gallery/>
      <ListProducts />
      <Footer />
    </div>
  );
};

export default Main;