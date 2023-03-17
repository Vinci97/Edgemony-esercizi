import { useEffect, useState } from "react";
import CartItem from "../cartItem"
import "./index.css"
const Cart = ({productData,cartList,setCardList}) =>{
    const [items, setItems] = useState(productData || []);
    function DeleteItem(id) {
        const filteredItems = cartList.filter((item) => item.id !== id);
        setCardList(filteredItems);
        localStorage.setItem("cartList", JSON.stringify(filteredItems));
    }
    return(
        <div className="Cart">
           {cartList.map(item => <CartItem items={item} key={item.id} DeleteItem={DeleteItem}/>)}
        </div>
    )
}
export default Cart