'use client'
import styles from './page.module.css'
import FilmElement from "@/components/filmElement/filmElement";
import InputSearch from "@/components/inputSearch/inputSearch";
import InputGenre from "@/components/inputGenre/inputGenre";
import InputCinema from "@/components/inputCinema/inputCinema";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import {ReactElement} from "react";

export default function Home() {

  const Films = (): ReactElement => {
    const { data, isLoading, error} = useGetMoviesQuery("");

    if (isLoading) {
      return (
        <span className={styles.loadingText}>{"Загрузка..."}</span>
      )
    }
    if (!data || error) {
      return <span className={styles.loadingText}>{"Фильмы не найдены, перезагрузите страницу позже"}</span>
    }

    return data.map((item:any) =>
      <FilmElement
        id={item.id}
        key={item.id}
        name={item.title}
        genre={item.genre}
        posterUrl={item.posterUrl}
      />
    )
  }

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <span className={styles.filterHeader}>{"Фильтр поиска"}</span>
        <InputSearch />
        <InputGenre />
        <div id={"modal-genre-root"}></div>
        <InputCinema />
        <div id={"modal-cinema-root"}></div>
      </div>
      <div className={styles.content}>
        <Films />
      </div>
    </div>
  )
}
