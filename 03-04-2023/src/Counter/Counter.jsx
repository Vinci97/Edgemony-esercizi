import { useContext} from "react"
import { CounterCtx } from "../store";
import "./index.css"
const Counter = ()=>{
    const { state, dispatch } = useContext(CounterCtx);
    const onHandleClik = (e) => dispatch({type: e.target.className});
    return(
        <div className="Counter">
            <button className="increment" onClick={onHandleClik}>Increment</button>
            <h1>{state.value}</h1>
            <button className="decrement" onClick={onHandleClik}>decrement</button>
            <button className="reset" onClick={onHandleClik}>reset</button>
        </div>
    )

}
export default Counter