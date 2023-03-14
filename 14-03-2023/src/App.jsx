import { useState } from 'react';
import './App.css';
import FullInput from './component/fullInput';
import TodoList from './component/todoList';
import List from './mock/todoList';

function App() {
  const [shoppingList, setShoppingList] = useState(List);
  return (
    <div className="App">
      <FullInput setShoppingList={setShoppingList}/>
      <TodoList shoppingList={shoppingList} setShoppingList={setShoppingList}/>
    </div>
  )
}

export default App
