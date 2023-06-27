import styles from "./inputSearch.module.css";
import {useContext} from "react";
import {FilterContext} from "@/context/filterContext";

export default function InputSearch() {

  const { search, setSearch } = useContext(FilterContext);

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {"Название"}
      </span>
      <input
        placeholder={"Введите название"}
        type="text"
        value={search ? search : ""}
        className={styles.input}
        onChange={(event) => {
          //const newValue = event.target.value;
          setSearch(event.target.value);
        }}
      />
    </div>
  )
}