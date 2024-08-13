import React, { useState } from "react";
import styles from "../AddSection/AddSection.module.css";

const AddSection = ({ onAddClick }) => {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const HandleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const HandleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };

  const HandleAddBtn = () => {
    onAddClick(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className={styles.addContainer}>
      <input
        type="text"
        placeholder="Enter your todo"
        className={styles.inputName}
        onChange={HandleTodoName}
        value={todoName}
      />
      <input
        type="date"
        className={styles.inputDate}
        onChange={HandleTodoDate}
        value={todoDate}
      />
      <div className={styles.btnContainer}>
        <button className={styles.addBtn} onClick={HandleAddBtn}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddSection;
