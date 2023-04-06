import Link from "next/link"
import styles from "./header.module.scss"
const Header =()=>{
    return(
        <header className={styles.header}>
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    )
}
export default Header