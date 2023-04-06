import Image from "next/image";
import styles from "./Card.module.scss"
const Card =(props)=>{
    const {prod} = props;
    return( 
        <div>
            <img className={styles.Image} src={prod.thumbnail} alt={prod.title} />
            <p>{prod.brand}</p>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p>{prod.category}</p>
            <p>${prod.price}</p>
        </div>
    )
}
export default Card