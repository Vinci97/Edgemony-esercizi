import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Main = () => {
  return (
    <div className="Main">
      <Header />
      <ListProducts />
      <Footer />
    </div>
  );
};

export default Main;