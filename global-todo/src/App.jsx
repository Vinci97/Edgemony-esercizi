import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";
import TaskModal from "./components/TaskModal";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const onHandleModalToggle =()=>{
    dispatch({type: "SET_MODAL_TOGGLE"})
  }
  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        {state.isModalVisibile && <TaskModal />}
        <button className={styles.addTodo} 
        onClick={onHandleModalToggle}>
          {"+"}
        </button>
      </Context.Provider>
    </div>
  );
}

export default App;
