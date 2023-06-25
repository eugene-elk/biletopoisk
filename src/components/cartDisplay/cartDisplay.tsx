'use client'
import styles from './cartDisplay.module.css'
import cartImage from '../../assets/cart.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from "react";

export default function CartDisplay() {

  const [count, setCount] = useState(1);

  return (
    <Link href='/cart' className={styles.container}>
      {(count > 0) ?
        <div className={styles.orangeSquare}>
          <span className={styles.count}>{count}</span>
        </div>
        :
        null
      }
      <Image src={cartImage} alt={""}/>
    </Link>
  )
}