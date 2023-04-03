import { useReducer } from 'react'
import { GlobalReducer } from './store/reducers'
import { CounterCtx, InitGlobalState } from './store'
import Counter from './Counter'
import './App.css'
function App() {
  const [state, dispach]= useReducer(GlobalReducer, InitGlobalState)
  return (
    <div className="App">
      <CounterCtx.Provider value={{state, dispach}}>
        <Counter/>
      </CounterCtx.Provider>
    </div>
  )
}

export default App
