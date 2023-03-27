import Card from "../card/Card"
import style from "./index.module.scss"

const Content = ({data}) =>{
    return(
        <div className={`${style.Content} flex-wrap`}>
            {
                data.map((cocktail)=>(<Card data={cocktail}/>))
            }
        </div>
    )
}
export default Content