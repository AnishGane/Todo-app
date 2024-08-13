import { useState } from "react";
import "./App.css";
import AddSection from "./components/AddSection/AddSection";
import TodoItemContainer from "./components/TodoItemContainer/TodoItemContainer";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h3>TODO APP</h3>
          <AddSection onAddClick={handleNewItem}></AddSection>
          <TodoItemContainer
            todoitems={todoItems}
            onDeleteClick={handleDeleteItem}
          ></TodoItemContainer>
        </div>
      </div>
      <p className="copy">&copy; Anish Gane</p>
    </>
  );
}

export default App;
