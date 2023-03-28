import { useState } from "react"
import styles from "./index.module.scss"
const Reservetion =()=>{
    const [surname,setSurname]=useState("")
    const [hour, setHour]= useState("")
    const [Date, setDate]= useState("")
    const onHandleTextImput=(e)=> setSurname(e.target.value)
    const onHandleTimeImput=(e)=> setHour(e.target.value)
    const onHandleDateImput=(e)=> setDate(e.target.value)
    const onHandleSumit = () =>{
        e.preventDefault();
    }
    return <div className={styles.Reservetion}>
        <div className={styles.overlay}></div>
            <div className={`${styles.container} container`}>
                <form action="">
                    <label htmlFor="text">Inserisci nominativo</label>
                    <input id="text" name="text" type="text" value={surname} onChange={onHandleTextImput} placeholder="Cognome" required/>
                    <label htmlFor="date">Inseriscil il giorno</label>
                    <input id="date" name="date" type="date" value={Date}onChange={onHandleDateImput}/>
                    <label htmlFor="time">Inseriscil l'orario</label>
                    <input id="time" name="time" type="time" value={hour} onChange={onHandleTimeImput} required/>
                    <input type="submit" value="click" onChange={onHandleSumit} required/>
                </form>
            </div>
    </div>
}
export default Reservetion