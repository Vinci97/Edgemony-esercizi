import style from "./index.module.scss"
const Hero =({setCategory})=>{
   
    const onHandleClick=(value)=>{
        setCategory(value)
    }
    return(
        <div className={`${style.Hero} container`}>
            <h1>Cocktail by Vincenzo</h1>
            <ul className={style.first_list}>
                <li>Articolo</li>
                <li>Analcolico</li>
                <li>Vini</li>
                <li>Dessert</li>
            </ul>
            <hr />
            <ul className={style.second_list}>
                <li onClick={()=>onHandleClick('Ordinary Drink')}>Ordinary Drink</li>
                <li onClick={()=>onHandleClick('Cocktail')}>Cocktail</li>
                <li onClick={()=>onHandleClick('Shot')}>Shot</li>
                <li onClick={()=>onHandleClick('Pounch / Party Drinck')}>Pounch</li>
                <li onClick={()=>onHandleClick('Coffee / Tea')}>Coffee</li>
                <li onClick={()=>onHandleClick('Other / Unoknow')}>other</li>
            </ul>
        </div>
    )
}
export default Hero