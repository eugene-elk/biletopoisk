'use client'
import styles from "./filmElement.module.css";
import Cross from "../../assets/svg/cross.svg"
import Image from "next/image"
import Counter from "@/components/counter/counter";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import ModalDelete from "@/components/modalDelete/modalDelete";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/redux/feature/cart/selector";
import {cartActions} from "@/redux/feature/cart";
import {useRouter} from "next/navigation";

interface FilmElementParams {
  id: string;
  name: string;
  genre: string;
  posterUrl: string;
  deleteButton?: boolean;
}

export default function FilmElement({ id, name, genre, posterUrl, deleteButton = false }: FilmElementParams) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<Element | DocumentFragment | null>(null);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, [])

  function yesPressed () {
    console.log("Yes pressed");
    dispatch(cartActions.reset(id));
    setIsModalOpen(false);
  }

  function noPressed() {
    console.log("No pressed");
    setIsModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <div onClick={() => router.push(`/film/${id}`)} className={styles.containerImage}>
        <Image
          width={100}
          height={120}
          className={styles.image}
          src={posterUrl}
          alt={name}
        />
      </div>
      <div onClick={() => router.push(`/film/${id}`)} className={styles.containerText}>
        <span className={styles.filmTitle}>{name}</span>
        <span className={styles.filmGenre}>{genre}</span>
      </div>
      <Counter id={id} />
      {deleteButton &&
        <div onClick={() => {setIsModalOpen(val => !val)}} className={styles.deleteButton}>
          <Image src={Cross} alt={""} />
        </div>
      }
      {(isModalOpen && modalRoot) &&
        createPortal(
          <div className={styles.overlay}>
            <ModalDelete yesPressed={()=>yesPressed()} noPressed={()=>noPressed()} />
          </div>,
          modalRoot
        )
      }
    </div>
  )
}