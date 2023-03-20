import "./index.scss"
const Navbar=()=>{
    return(
        <div className="Navbar">
            <ul className="Navbar_list">
                <li>Home</li>
                <li>About</li>
                <li>Mission</li>
                <li>Contacs</li>
            </ul>
            <img className="Navbar_logo" src="https://bit.ly/3TJhktP" alt="logo" />
            <div>
                <button className="Navbar_button">prenota</button>
                <div className="Navbar_social">
                    <img src="https://bit.ly/3JRN4cz" alt="facebook" />
                    <img src="https://bit.ly/3YWfaHX" alt="twitter" />
                    <img src="https://bit.ly/3Jva3sD" alt="instagram" />
                </div>
            </div>
        </div>
    )
}
export default Navbar