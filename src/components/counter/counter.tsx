'use client'
import styles from "./counter.module.css";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/redux/feature/cart/selector";
import {cartActions} from "@/redux/feature/cart";
import {usePathname} from "next/navigation";

interface CounterParams {
  id: string;
  callbackShowModal?: () => void;
}

export default function Counter ({ id, callbackShowModal }: CounterParams){

  const productAmount = useSelector((state) => selectProductAmount(state, id));

  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div
        onClick={()=> {
          if (pathname !== "/cart") {
            dispatch(cartActions.decrement(id));
            return;
          }
          if (productAmount === 1) {
            if (callbackShowModal) callbackShowModal();
            else dispatch(cartActions.decrement(id));
            return;
          }
          dispatch(cartActions.decrement(id));
        }}
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