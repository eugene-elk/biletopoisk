import styles from "./modalDelete.module.css";
import Image from "next/image";
import Cross from "../../assets/svg/cross.svg"

interface ModalDeleteProps {
  yesPressed: () => void,
  noPressed: () => void,
}

export default function ModalDelete({yesPressed, noPressed}: ModalDeleteProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <div className={styles.lineOne}>
          <span className={styles.textHeader}>
            {"Удаление билета"}
          </span>
          <div onClick={noPressed} className={styles.closeButton}>
            <Image src={Cross} alt={""} />
          </div>
        </div>
        <span className={styles.lineTwo}>
          {"Вы уверены, что хотите удалить билет?"}
        </span>
      </div>
      <div className={styles.containerButtons}>
        <div className={styles.buttonYes} onClick={yesPressed}>{"Да"}</div>
        <div className={styles.buttonNo} onClick={noPressed}>{"Нет"}</div>
      </div>
    </div>
  )
}