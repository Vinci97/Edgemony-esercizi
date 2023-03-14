import TodoItem from "../todoItem/TodoItem"
import "./index.css"
const TodoList =({shoppingList,setShoppingList})=>{
    return(
        <div className="TodoList">
            <h1></h1>
            <ul>
                {
                    shoppingList.sort((item1, item2) => (item1.content.localeCompare(item2.content))).map(item=><TodoItem item={item} setShoppingList={setShoppingList} content={item.content} key={item.id}/>)
                }
            </ul>
        </div>
    )
}
export default TodoList