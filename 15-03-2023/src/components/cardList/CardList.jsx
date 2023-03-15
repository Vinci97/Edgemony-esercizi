import SpinnerLoadin from "../spinnerLoading/SpinnerLoad"
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import "./index.css";

const CardList = ({ title, endpoint }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardList__list">
        {productsList.length ? (
          productsList.map((product) => (
            <Card productData={product} key={product.id} />
          ))
        ) : (
          <SpinnerLoadin/>
        )}
      </div>
    </div>
  );
};

export default CardList;