import MiniCard from "../miniCard/MiniCard";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css"

const ListMini = ()=>{
    const [miniCards, setMiniCards] = useState([]);
    useEffect(() => {
      GET("/products").then((data) => setMiniCards(() => data.products));
    }, []);
    return(
      <div className="App__miniCards">
        {miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
      </div>
    )
}
export default ListMini