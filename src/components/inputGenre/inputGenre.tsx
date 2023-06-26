import styles from "./inputGenre.module.css";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import ArrowDown from "../../assets/svg/arrow_down_small.svg";
import ArrowUp from "../../assets/svg/arrow_up_small.svg";
import Image from "next/image";

export default function InputGenre() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string|null>(null);
  const [modalRoot, setModalRoot] = useState<Element | DocumentFragment | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-genre-root'));
  }, [])

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | null) => () => {
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
        <div className={`${styles.selectHeader} ${!selectedOption ? styles.selectPlaceholder : ""}`}>
          {selectedOption || "Выберите жанр"}
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