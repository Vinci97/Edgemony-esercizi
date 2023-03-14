import { useState } from "react";
import "./index.css"
const FullInput=({setShoppingList})=>{
    const [newItem, setNewItem] = useState("");
    const submit=(event)=> {
        event.preventDefault();
        setShoppingList((prev)=>[...prev,
            {
              id: prev.length + 1,
              content: newItem,
              isCompleted: false,
            }
        ]); 
        setNewItem('');
    }
    const change=(event)=> {
      setNewItem(event.target.value);
    }
    return(
        <div className="FullInput">
            <form onSubmit={submit}>
                <input
                   type="text"
                   value={newItem}
                   onChange={change}
                   placeholder="Aggiungi Prodotto"
                   required
                />
                <button type="submit">Aggiungi</button>
            </form>
        </div>
    )
}
export default FullInput