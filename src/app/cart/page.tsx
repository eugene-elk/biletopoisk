'use client'
import styles from './cart.module.css'
import Review from "@/components/review.tsx/review";
import FilmElement from "@/components/filmElement/filmElement";
import {useDispatch, useSelector} from "react-redux";
import {selectCartModule, selectProductAmount} from "@/redux/feature/cart/selector";
import {useEffect, useState} from "react";
import { useGetMoviesQuery } from "@/redux/services/movieApi";

export default function Cart() {

  const dispatch = useDispatch();
  const cartContent = useSelector((state) => selectCartModule(state));
  const { data, isLoading, error } = useGetMoviesQuery("");

  const [cartToShow, setCartToShow] = useState([]);

  useEffect(() => {
    if (isLoading) return;

    let idsInCart: string[] = [];

    Object.keys(cartContent).forEach(cartElement => {
      if (cartElement === "summary") return;
      idsInCart.push(cartElement);
    });

    let newCartToShow = data.filter((element:any) => idsInCart.includes(element.id));
    setCartToShow(newCartToShow);

  }, [isLoading, cartContent, data])

  const cartItems: Array<{id: string, name: string, genre: string, count: number}> = [
    {
      id: "film-1",
      name: "Властелин Колеc",
      genre: "Фентези",
      count: 2,
    },
    {
      id: "film-2",
      name: "Гарри Потный",
      genre: "Фентези",
      count: 3,
    },
    {
      id: "film-3",
      name: "Форсаж 228",
      genre: "С лысыми",
      count: 4,
    },
  ]

  return (
    <div className={styles.container}>
      {cartToShow.map((item:any) =>
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
  )
}