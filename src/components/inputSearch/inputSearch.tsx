import styles from "./inputSearch.module.css";
import {useContext, useState} from "react";
import {SetFilterContext} from "@/context/filterContext";

export default function InputSearch() {

  const [localSearch, setLocalSearch] = useState("");
  const { setSearch } = useContext(SetFilterContext)

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {"Название"}
      </span>
      <input
        placeholder={"Введите название"}
        type="text"
        value={localSearch}
        className={styles.input}
        onChange={(event) => {
          //const newValue = event.target.value;
          setLocalSearch(event.target.value)
          setSearch(event.target.value);
        }}
      />
    </div>
  )
}