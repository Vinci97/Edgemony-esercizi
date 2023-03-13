import "./index.css"
import { useState } from "react"
import Day from "../day"
export const getDeyActualMonth = (plusMonth = 0) =>{
    let Year = new Date().getFullYear();
    let Month = new Date().getMonth() + 1 + plusMonth;
    let DeyInActualMonth = new Date(Year,Month,0).getDate();
    return DeyInActualMonth;
}
export const getMonthLiteral = ()=> new Date().toLocaleDateString('it-IT',{month: "long"}).toUpperCase();


const Month = ({monthNum,monthLiteral}) =>{
    const [Active, setActive] = useState(new Date().getDate() )
    return (
        <div className="Month">
            <h2>{monthLiteral}</h2>
            <div className="cont-dey">
                {[...new Array(monthNum)].map((item, i) =>(
                <Day
                content={i+1}
                Active={Active}
                setActive={setActive}
                  key={i}
                />
                ))}
            </div>
        </div>
    )
}
export default Month;