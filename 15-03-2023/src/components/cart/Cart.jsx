import "./index.css"
const CartItem = ({productData}) =>{
    return(
        <div className="CartItem">
           <img className="img_cart" src={productData.thumbnail} alt={productData.title} />
           <h3 className="title_cart">{productData.title}</h3>
           <p className="price_cart">$ {productData.price}</p>
           <button className="delete_cart" onClick="">Elimina</button>
        </div>
    )
}
const Cart = ({productData}) =>{
    return(
        <div className="Cart">
          {productData.map(item => <CartItem productData={item} key={item.id} /> )}
        </div>
    )

}
export default Cart