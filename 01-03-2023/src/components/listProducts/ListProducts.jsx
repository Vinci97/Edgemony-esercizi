import { productsList } from "../../mocks/productsList";
import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = () => {
  return (
    <><div className="titleProduct"><h1>I prodotti</h1></div><div className="ListProducts">
      {productsList.map((product) => (
        <CardProduct productData={product} key={product.id} />
      ))}
    </div></>
  );
};

export default ListProducts;