import style from "./index.module.scss"
import { valuesExtractor } from "../../utils/funcs"
const Card = ({data})=>{
  const IngredientsData = ()=> valuesExtractor(data, 'strIngredient');

    return(
        <div className={style.Card}>
            <img className={style.imgDrink} src={data.strDrinkThumb} alt={data.strDrink} />  
            <div className={style.test}>
              <h3 className={style.title}>{data.strDrink}</h3> 
              <ul >
              {
                IngredientsData().map((ingredient)=>(<li key={ingredient}>{ingredient}</li>))
              }
              </ul>   
            </div>      
        </div>
    )
}
export default Card