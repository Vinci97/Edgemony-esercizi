import "./index.css"

const TodoItem =({item,setShoppingList})=>{
    const onClick = () => setShoppingList((prev)=>[...prev.filter((todo)=>todo.id !== item.id)]);
   
    return(
        <div className="TodoItem">   
            <li onClick={onClick}>
                <p>{item.content}</p>
            </li>
        </div>
    )
}
export default TodoItem