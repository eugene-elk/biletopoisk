import styles from "./inputGenre.module.css";
import {useEffect, useState, useContext} from "react";
import {createPortal} from "react-dom";
import ArrowDown from "../../assets/svg/arrow_down_small.svg";
import ArrowUp from "../../assets/svg/arrow_up_small.svg";
import Image from "next/image";
import {Genres} from "@/assets/dictionaries/genres";
import { FilterContext } from "@/context/filterContext";

export default function InputGenre() {

  const options = Object.values(Genres);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string|null>(null);
  const [modalRoot, setModalRoot] = useState<Element | DocumentFragment | null>(null);

  const { genre, setGenre } = useContext(FilterContext);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-genre-root'));
  }, [])

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | null) => () => {
    setGenre(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  function ModalGenre() {
    return (
      <div className={styles.selectList}>
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
        <div className={`${styles.selectHeader} ${!genre ? styles.selectPlaceholder : ""}`}>
          {genre || "Выберите жанр"}
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