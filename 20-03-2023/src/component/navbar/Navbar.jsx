import style from "./index.module.scss"
const Navbar=()=>{
    return(
        <div className={style.Navbar}>
            <ul className={style.list}>
                <li>Home</li>
                <li>About</li>
                <li>Mission</li>
                <li>Contacs</li>
            </ul>
            <img className={style.logo} src="https://bit.ly/3TJhktP" alt="logo" />
            <div>
                <button className={style.button}>prenota</button>
                <div className={style.social}>
                    <img className={style.logoSocial} src="https://bit.ly/3JRN4cz" alt="facebook" />
                    <img className={style.logoSocial} src="https://bit.ly/3YWfaHX" alt="twitter" />
                    <img className={style.logoSocial} src="https://bit.ly/3Jva3sD" alt="instagram" />
                </div>
            </div>
        </div>
    )
}
export default Navbar