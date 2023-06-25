import styles from "./filmElement.module.css";
import Cross from "../../assets/cross.svg"
import Image from "next/image"
import Counter from "@/components/counter/counter";

interface FilmElementParams {
  name: string;
  genre: string;
  deleteButton?: boolean;
}

export default function FilmElement({ name, genre, deleteButton = false }: FilmElementParams) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>

      </div>
      <div className={styles.containerText}>
        <span className={styles.filmTitle}>{name}</span>
        <span className={styles.filmGenre}>{genre}</span>
      </div>
      <Counter name={name} />
      {deleteButton &&
        <div className={styles.deleteButton}>
          <Image src={Cross} alt={""} />
        </div>
      }
    </div>
  )
}