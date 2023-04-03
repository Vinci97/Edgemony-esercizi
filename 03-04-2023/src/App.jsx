import { useReducer } from 'react'
import { GlobalReducer } from './store/reducers'
import { Ctx, InitGlobalState } from './store'
import Counter from './Counter'
import './App.css'
function App() {
  const [state, dispach]= useReducer(GlobalReducer, InitGlobalState)
  return (
    <div className="App">
      <Ctx.Provider value={{state, dispach}}>
        <Counter/>
      </Ctx.Provider>
    </div>
  )
}

export default App
