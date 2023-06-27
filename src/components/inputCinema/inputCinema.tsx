import styles from "./inputCinema.module.css";
import {useContext, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import ArrowDown from "../../assets/svg/arrow_down_small.svg";
import ArrowUp from "../../assets/svg/arrow_up_small.svg";
import Image from "next/image";
import {FilterContext} from "@/context/filterContext";
import {useGetCinemasQuery} from "@/redux/services/cinemaApi";
import {CinemaType} from "@/types/cinema";

export default function InputCinema() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [modalRoot, setModalRoot] = useState<Element | DocumentFragment | null>(null);
  const [options, setOptions] = useState<Array<string>>([]);

  const { setCinemas } = useContext(FilterContext);
  const { data, isLoading, error} = useGetCinemasQuery("");

  useEffect(() => {
    if ((isLoading) || !data || error)  return;
    setOptions(data.map((item: CinemaType) => item.name));
  }, [data, isLoading, error])

  useEffect(() => {
    setModalRoot(document.getElementById('modal-cinema-root'));
  }, [])

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | null) => () => {
    setSelectedOption(value);
    setIsOpen(false);

    if (value === null) {
      setCinemas([] as string[]);
      return;
    }

    const currentData = data.filter((item: CinemaType) => (item.name === value))[0];
    setCinemas(currentData.movieIds);
  };

  function ModalCinema() {
    return (
      <div className={styles.selectList} style={{zIndex: 9}}>
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
        {"Кинотеатр"}
      </span>

      <div
        onClick={toggling}
        className={`${styles.selectWrapper} ${isOpen ? styles.selectWrapperActive : ""}`}
      >
        <div className={`${styles.selectHeader} ${!selectedOption ? styles.selectPlaceholder : ""}`}>
          {selectedOption || "Выберите кинотеатр"}
        </div>
        {isOpen ?
          <Image src={ArrowUp} alt={""} />
          :
          <Image src={ArrowDown} alt={""} />
        }
        {(isOpen && modalRoot) &&
          createPortal(<ModalCinema />, modalRoot)
        }
      </div>
    </div>
  )
}