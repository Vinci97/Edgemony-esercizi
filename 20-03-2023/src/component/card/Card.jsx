import "./index.scss"
const Card = ({data})=>{
    return(
        <div className="Card">
            <img className="Card_imgDrink" src={data.strDrinkThumb} alt={data.strDrink} />  
            <div className="Card_test">
              <h3 className="Card_title">{data.strDrink}</h3> 
              <ul >
                <li>{data.strIngredient1}</li>
                <li>{data.strIngredient2}</li>
                <li>{data.strIngredient3}</li>
                <li>{data.strIngredient4}</li>
              </ul>   
            </div>      
        </div>
    )
}
export default Card