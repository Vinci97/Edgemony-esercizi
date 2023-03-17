import CartItem from "../cartItem"
import "./index.css"
const Cart = ({cartList,setCardList}) =>{
    function DeleteItem(id) {
        const filteredItems = cartList.filter((item) => item.id !== id);
        setCardList(filteredItems);
        localStorage.setItem("cartList", JSON.stringify(filteredItems));
    }
    return(
        <div className="Cart">
            {!cartList.length ? (
                <h2>inserisci prodotto</h2>
            ) : (
            <div className="Cart_container">
            <h1>I tuoi prodotti</h1>
           {cartList.map(item => <CartItem items={item} key={item.id} DeleteItem={DeleteItem}/>)}
           <h3>TOTALE: {cartList.reduce((acc,product)=>acc + product.price, 0)}</h3>
           </div>
           )}
        </div>
    )
}
export default Cart