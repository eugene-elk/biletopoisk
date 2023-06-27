import styles from "./inputGenre.module.css";
import {useEffect, useState, useContext} from "react";
import {createPortal} from "react-dom";
import ArrowDown from "../../assets/svg/arrow_down_small.svg";
import ArrowUp from "../../assets/svg/arrow_up_small.svg";
import Image from "next/image";
import {Genres} from "@/assets/dictionaries/genres";
import {SetFilterContext} from "@/context/filterContext";

export default function InputGenre() {

  const options = Object.values(Genres);

  const [localGenre, setLocalGenre] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<Element | DocumentFragment | null>(null);

  const { setGenre } = useContext(SetFilterContext);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-genre-root'));
  }, [])

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | null) => () => {
    setLocalGenre(value)
    setGenre(value);
    setIsOpen(false);
  };

  function ModalGenre() {
    return (
      <div className={styles.selectList} style={{zIndex: 10}}>
        <div onClick={onOptionClicked(null)} className={styles.selectItem}>
          {"Не выбран"}
        </div>
        {options.map(option => (
          <div key={option} onClick={onOptionClicked(option)} className={styles.selectItem}>
            {option}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {"Жанр"}
      </span>
      <div
        onClick={toggling}
        className={`${styles.selectWrapper} ${isOpen ? styles.selectWrapperActive : ""}`}
      >
        <div className={`${styles.selectHeader} ${!localGenre ? styles.selectPlaceholder : ""}`}>
          {localGenre || "Выберите жанр"}
        </div>
        {isOpen ?
          <Image src={ArrowUp} alt={""} />
          :
          <Image src={ArrowDown} alt={""} />
        }
        {(isOpen && modalRoot) &&
          createPortal(<ModalGenre />, modalRoot)
        }
      </div>
    </div>
  )
}