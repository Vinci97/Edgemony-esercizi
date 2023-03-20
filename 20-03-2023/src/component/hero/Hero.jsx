import "./index.scss"
const Hero =()=>{
    return(
        <div className="Hero">
            <h1>Cocktail by Vincenzo</h1>
            <ul className="hero_first_list">
                <li>Articolo</li>
                <li>Analcolico</li>
                <li>Vini</li>
                <li>Dessert</li>
            </ul>
            <hr />
            <ul className="hero_second_list">
                <li>Ordinary Drink</li>
                <li>Cocktail</li>
                <li>Shot</li>
                <li>Pounch</li>
                <li>Coffee</li>
                <li>other</li>
            </ul>
        </div>
    )
}
export default Hero