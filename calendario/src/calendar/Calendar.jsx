import "./index.css"
import Month from "../month/Month"
import { getDeyActualMonth,  getMonthLiteral} from "../month/Month"
import { useState } from "react"

const Calendar = () =>{
    const [monthCounter, setMonthCounter]= useState(0)
    const [monthNum, setMonthNum] = useState(new Date().getMonth());
    const onHandlePreviousClick = () =>{
        setMonthCounter((prev)=>prev - 1);
    }
    const onHandleNextClick = () =>{
        setMonthCounter((prev)=>prev + 1);
    }
    return(
        <div className="Calendar">
            <button onClick={onHandlePreviousClick}>{'<'}</button>
            <Month monthNum={getDeyActualMonth(monthCounter)} monthLiteral={getMonthLiteral(new Date().getMonth() + monthCounter)}/>
            <button onClick={onHandleNextClick}>{'>'}</button>
        </div>
    )
}
export default Calendar