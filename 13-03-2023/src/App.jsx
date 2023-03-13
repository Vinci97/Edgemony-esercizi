import { useState } from 'react'
import './App.css'

function App() {
  const [shoppingList, setShoppingList] = useState([
    'Latte',
    'Pane',
    'Burro',
    'Formaggio'
  ]);
  const [newItem, setNewItem] = useState('');
  const submit=(event)=> {
    event.preventDefault();
    setShoppingList([...shoppingList, newItem]); 
    setNewItem('');
  }
  const change=(event)=> {
    setNewItem(event.target.value);
  }

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {shoppingList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <input
          type="text"
          value={newItem}
          onChange={change}
          placeholder="Aggiungi Prodotto"
        />
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  )
}

export default App
