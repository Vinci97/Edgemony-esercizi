import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";
import Hero from "./components/hero";
import Gallery from "./components/gallery"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Hero title="Store" />
      <Gallery/>
      <ListProducts />
      <Footer />
    </div>
  );
};

export default Main;