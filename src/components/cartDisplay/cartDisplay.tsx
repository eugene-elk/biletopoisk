'use client'
import styles from './cartDisplay.module.css'
import cartImage from '../../assets/svg/cart.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/redux/feature/cart/selector";

// Значок корзины в правом верхнем углу
export default function CartDisplay() {

  const productAmount = useSelector((state) => selectProductAmount(state, "summary"));

  return (
    <Link href='/cart' className={styles.container}>
      {(productAmount > 0) ?
        <div className={styles.orangeSquare}>
          <span className={styles.count}>{productAmount}</span>
        </div>
        :
        null
      }
      <Image src={cartImage} alt={""}/>
    </Link>
  )
}