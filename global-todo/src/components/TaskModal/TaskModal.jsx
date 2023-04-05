import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";
const TaskModal = ()=>{
    const { state, dispatch } = useContext(Context);
    const onHandleCloseModal =()=>{
        dispatch({type: "SET_MODAL_TOGGLE"})
      }
    const onHandleFormSubmit=(e)=>{
        e.preventDefault();
        onHandleCloseModal();
        dispatch({ type: "CREATE_NEW_TASK", payload: state.tempTodo });
        console.log(state)
    }
    const onChangeImputUsername =(e)=>dispatch({
        type:"SET_TEMP_USERNAME",payload: e.target.value
    })
    const onChangeImputTodo =(e)=>dispatch({
        type:"SET_TEMP_TODO",payload: e.target.value
    })
    const onChangeImputImage =(e)=>dispatch({
        type:"SET_TEMP_IMAGE",payload: e.target.value
    })
    return(
        <div className={styles.TaskModal}>
            <form onSubmit={onHandleFormSubmit} className={styles.content}>
                <h1 className={styles.title}>Add a new Todo!</h1>
                <button className={styles.CloseModal} 
                onClick={onHandleCloseModal}>x</button>
                <input type="text" 
                   value={state.tempTodo.username}
                   onChange={onChangeImputUsername}
                   placeholder="Username"
                   required/>
                <input type="text" 
                   value={state.tempTodo.todo}
                   onChange={onChangeImputTodo}
                   placeholder="Content"
                   required/>
                <input type="text" 
                    value={state.tempTodo.image}
                    onChange={onChangeImputImage}
                    placeholder="Image Url"
                    required/>
                <input type="submit" value="Add Todo"/>
            </form>
            <div className={styles.overlay} onClick={onHandleCloseModal}></div>
            
        </div>
    )
}
export default TaskModal
