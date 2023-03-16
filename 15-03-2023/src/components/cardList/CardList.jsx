// import SpinnerLoadin from "../spinnerLoading/SpinnerLoad"
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import "./index.css";

const CardList = ({ title, endpoint, setModalContext }) => {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCardList] = useState([]);
  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardList__list">
        {productsList.length ? (
          productsList.map((product) => (
            <Card
              productData={product}
              setModalContext={setModalContext}
              key={product.id}
            />
          ))
        ) : (
         "o"
        )}
      </div>
    </div>
  );
};

export default CardList;
