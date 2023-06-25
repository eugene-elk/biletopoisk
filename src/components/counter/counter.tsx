'use client'
import styles from "./counter.module.css";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import Image from "next/image";
import {useEffect, useState} from "react";

interface CounterParams {
  name: string;
}

export default function Counter ({ name }: CounterParams){

  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div
        onClick={() => count > 0 && setCount(val => val - 1)}
        className={`${styles.orangeSquare} ${count === 0 ? styles.disabled : ""}`}
      >
        <Image src={Minus} alt={""}/>
      </div>
      <span className={styles.count}>{count}</span>
      <div
        onClick={() => count < 30 && setCount(val => val + 1)}
        className={`${styles.orangeSquare} ${count === 30 ? styles.disabled : ""}`}
      >
        <Image src={Plus} alt={""}/>
      </div>
    </div>
  )
}