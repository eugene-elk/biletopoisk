'use client'
import styles from "./counter.module.css";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import Image from "next/image";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/redux/feature/cart/selector";
import {cartActions} from "@/redux/feature/cart";

interface CounterParams {
  id: string;
}

export default function Counter ({ id }: CounterParams){

  const productAmount = useSelector((state) => selectProductAmount(state, id));
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div
        onClick={()=>dispatch(cartActions.decrement(id))}
        className={`${styles.orangeSquare} ${productAmount === 0 ? styles.disabled : ""}`}
      >
        <Image src={Minus} alt={""}/>
      </div>
      <span className={styles.count}>{productAmount}</span>
      <div
        onClick={()=>dispatch(cartActions.increment(id))}
        className={`${styles.orangeSquare} ${productAmount >= 30 ? styles.disabled : ""}`}
      >
        <Image src={Plus} alt={""}/>
      </div>
    </div>
  )
}