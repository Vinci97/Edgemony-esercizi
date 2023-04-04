import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";
import { initialState } from "../../store/state";
const TaskModal = ()=>{
    const { state, dispatch } = useContext(Context, initialState);
    const onHandleCloseModal =()=>{
        dispatch({type: "SET_MODAL_TOGGLE"})
      }
    
    return(
        <div className={styles.TaskModal}>
            <button className={styles.CloseModal} onClick={onHandleCloseModal}>x</button>
        </div>
    )
}
export default TaskModal
