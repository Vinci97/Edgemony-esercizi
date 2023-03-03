import { useEffect, useState } from "react";
import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = () => {
  const [list, setListData] = useState([])
  useEffect(()=>{fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((data) => setListData(data.products));
}, []);
  return (
    <><div className="titleProduct"><h1>I prodotti</h1></div><div className="ListProducts">
      {list.map((product) => (
        <CardProduct productData={product} key={product.id} />
      ))}
    </div></>
  );
};

export default ListProducts;