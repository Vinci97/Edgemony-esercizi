import CardList from "./components/CardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar";
import "./App.css";
import ListMini from "./components/listMini";
import ProductDetail from "./components/productDetail/ProductDetail";
import { useState } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });
  const [modalCart, setModalCart] = useState(false)

  const [cartList, setCardList] = useState(JSON.parse(localStorage.getItem("cartList")) || []);
  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;
  

  return (
    <div className="App">
      <Navbar
        cartListLength={localStorageCartList || cartList.length}
        setSearchInputValue={setSearchInputValue}
        setModalCart = {setModalCart}
        modalCart = {modalCart}
      />
      <Hero />
      <ListMini />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContext={setModalContext}
      />
      <Footer />
      {modalContext.isVisibile && (
        <ProductDetail
          productData={modalContext.productData}
          setCardList={setCardList}
          setModalContext={setModalContext}
        />
        )}
      {modalCart && <Cart productData={JSON.parse(localStorage.getItem("cartList"))}cartList={cartList} setCardList={setCardList}/>}
    </div>
  );
}

export default App;

