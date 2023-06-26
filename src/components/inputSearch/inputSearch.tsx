import styles from "./inputSearch.module.css";
import {useState} from "react";
export default function InputSearch() {

  const [inputValue, setInputValue] = useState("");


  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {"Название"}
      </span>
      <input
        placeholder={"Введите название"}
        type="text"
        value={inputValue}
        className={styles.input}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
    </div>
  )
}