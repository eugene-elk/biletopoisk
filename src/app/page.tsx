'use client'
import styles from './page.module.css'
import FilmElement from "@/components/filmElement/filmElement";
import InputSearch from "@/components/inputSearch/inputSearch";
import InputGenre from "@/components/inputGenre/inputGenre";
import InputCinema from "@/components/inputCinema/inputCinema";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import {ReactElement, useContext, useEffect, useState} from "react";
import {FilterContextProvider} from "@/context/filterContextProvider";
import {FilterContext} from "@/context/filterContext";
import {GenreKey, Genres} from "@/assets/dictionaries/genres";

export default function Home() {
  function Films (): ReactElement {

    const { data, isLoading, error} = useGetMoviesQuery("");
    const [filmsList, setFilmsList] = useState<any>([]);
    const { search, genre, cinemas } = useContext(FilterContext);

    useEffect(() => {
      console.log("Search in Films: ", search,", ", genre,", ", cinemas);
      if (isLoading) return;
      let filteredData = data;
      if (genre) {
        filteredData = data.filter((item:any) =>
          (item.genre in Genres) ?
            (Genres[item.genre as GenreKey] === genre)
            :
            false
        )
      }
      if (cinemas.length > 0) {
        filteredData = filteredData.filter((item:any) => cinemas.includes(item.id));
      }
      if (search !== "") {
        filteredData = filteredData.filter((item:any) => item.title.toLowerCase().includes(search.toLowerCase()));
      }
      setFilmsList(filteredData);
    }, [isLoading, search, genre, cinemas, data])

    if (isLoading) {
      return (
        <span className={styles.loadingText}>{"Загрузка..."}</span>
      )
    }
    if (!data || error) {
      return <span className={styles.loadingText}>{"Фильмы не найдены, перезагрузите страницу позже"}</span>
    }

    return filmsList.map((item:any) =>
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
      <FilterContextProvider>
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
      </FilterContextProvider>
    </div>
  )
}
