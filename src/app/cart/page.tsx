'use client'
import styles from './cart.module.css'
import FilmElement from "@/components/filmElement/filmElement";
import {useSelector} from "react-redux";
import {selectCartModule, selectProductAmount} from "@/redux/feature/cart/selector";
import {useEffect, useState} from "react";
import {useGetMoviesQuery} from "@/redux/services/movieApi";
import {MovieType} from "@/types/movie";

export default function Cart() {

  const productAmount = useSelector((state) => selectProductAmount(state, "summary"));
  const cartContent = useSelector((state) => selectCartModule(state));
  const { data, isLoading, error } = useGetMoviesQuery("");

  const [cartToShow, setCartToShow] = useState<MovieType[]>([]);

  useEffect(() => {
    if (isLoading || !data || error) return;

    let idsInCart: string[] = [];

    Object.keys(cartContent).forEach(cartElement => {
      if (cartElement === "summary") return;
      idsInCart.push(cartElement);
    });

    let newCartToShow = data.filter((element: MovieType) => idsInCart.includes(element.id));
    setCartToShow(newCartToShow);

  }, [isLoading, cartContent, data, error])

  if (cartToShow.length === 0) {
    return (
      <div className={styles.container}>
        <span className={styles.text}>{"Корзина пуста"}</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div>
        {cartToShow.map((item: MovieType) =>
          <FilmElement
            id={item.id}
            key={item.id}
            name={item.title}
            genre={item.genre}
            posterUrl={item.posterUrl}
            deleteButton={true}
          />
        )}
      </div>
      <div className={styles.summary}>
        <span className={styles.summaryText}>{"Итого билетов:"}</span>
        <span className={styles.summaryText}>{productAmount}</span>
      </div>
    </div>
  )
}