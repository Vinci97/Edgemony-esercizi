import { useEffect, useState } from "react";
import CartItem from "../cartItem"
import "./index.css"
const Cart = ({productData,cartList,setCardList}) =>{
    const [items, setItems] = useState(productData || []);
    function DeleteItem(id) {
        const filteredItems = cartList.filter((item) => item.id !== id);
        setCardList(filteredItems);
        localStorage.setCardList("cartList", JSON.stringify(filteredItems));
    }
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('cartItems'));
      if (items) {
        setCardList(items);}
    })
    return(
        <div className="Cart">
           {cartList.map(item => <CartItem items={item} key={item.id} DeleteItem={DeleteItem}/>)}
        </div>
    )
}
export default Cart