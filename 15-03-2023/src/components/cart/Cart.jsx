import { useEffect, useState } from "react";
import CartItem from "../cartItem"
import "./index.css"
const Cart = ({productData}, cartList) =>{
    const [items, setItems] = useState(productData);
    function DeleteItem(id) {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
        localStorage.setItem("cartList", JSON.stringify(filteredItems));
    }
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('cartItems'));
      if (items) {
        setItems(items);}
    })
    return(
        <div className="Cart">
           {items.map(item => <CartItem items={item} key={item.id} DeleteItem={DeleteItem}/>)}
        </div>
    )
}
export default Cart