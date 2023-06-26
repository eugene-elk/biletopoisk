'use client'
import styles from './page.module.css'
import FilmElement from "@/components/filmElement/filmElement";
import InputSearch from "@/components/inputSearch/inputSearch";
import InputGenre from "@/components/inputGenre/inputGenre";
import InputCinema from "@/components/inputCinema/inputCinema";
import {useDispatch} from "react-redux";
import { useGetMoviesQuery, useGetMovieQuery, useGetMoviesInCinemaQuery } from "@/redux/services/movieApi";

export default function Home() {

  const content: Array<{id: string, name: string, genre: string}> = [
    {
      id: "film-1",
      name: "Властелин колеc",
      genre: "Фентези"
    },
    {
      id: "film-2",
      name: "Гарри Потный",
      genre: "Фентези"
    },
    {
      id: "film-3",
      name: "Форсаж 228",
      genre: "С лысыми"
    },
    {
      id: "film-4",
      name: "Властелин колеc",
      genre: "Фентези"
    },
    {
      id: "film-5",
      name: "Гарри Потный",
      genre: "Фентези"
    },
    {
      id: "film-6",
      name: "Форсаж 228",
      genre: "С лысыми"
    },
  ]

  const dispatch = useDispatch();

  const Films = () => {
    const { data, isLoading, error} = useGetMoviesQuery();

    if (isLoading) {
      return (
        <span className={styles.loadingText}>{"Loading..."}</span>
      )
    }
    if (!data || error) {
      return <span className={styles.loadingText}>{"Not Found"}</span>
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
