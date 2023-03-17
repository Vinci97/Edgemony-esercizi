import "./index.css"
const CartItem = ({items,DeleteItem}) =>{
    function handleClick() {
        DeleteItem(items.id);
      }
    return(
        <div className="CartItem">
           <img className="img_cart" src={items.thumbnail} alt={items.title} />
           <h3 className="title_cart">{items.title}</h3>
            <p className="price_cart">$ {items.price}</p>
            <button className="delete_cart" onClick={handleClick} >X</button>
        </div>
    )
}    
export default CartItem