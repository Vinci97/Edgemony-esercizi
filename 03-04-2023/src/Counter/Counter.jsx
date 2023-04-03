import { useContext } from "react";
import { Ctx } from "../store";
import "./index.css";
const Counter = ()=>{
    const { state, dispatch } = useContext(Ctx);
    const onHandleClick = (e) => dispatch({ type: e.target.className });
    return(
        <div className="Counter">
            <button className="increment" onClick={onHandleClick}>Increment</button>
            <h1>{state.value}</h1>
            <button className="decrement" onClick={onHandleClick}>decrement</button>
            <button className="reset" onClick={onHandleClick}>reset</button>
        </div>
    )

}
export default Counter