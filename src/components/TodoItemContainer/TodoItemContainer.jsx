import React from "react";
import styles from "../TodoItemContainer/TodoItemContainer.module.css";
import ShowMessage from "../Showmessage/ShowMessage";

const TodoItemContainer = ({ todoitems, onDeleteClick }) => {
  return (
    <div className={styles.todoitemsContainer}>
      {todoitems.length === 0 && <ShowMessage></ShowMessage>}
      <div className={styles.todoitem}>
        {todoitems.map((item) => (
          <div className={styles.itemRow}>
            <p key={item} className={styles.todoname}>
              {item.name}
            </p>
            <p key={item} className={styles.tododate}>
              {item.date}
            </p>
            <div className={styles.deleteBtn}>
              <button onClick={() => onDeleteClick(item.name)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItemContainer;
