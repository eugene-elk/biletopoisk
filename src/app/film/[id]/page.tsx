'use client'
import styles from './film.module.css'
import Review from "@/components/review.tsx/review";
import {ReactElement, useEffect} from "react";
import { useGetReviewsForMovieQuery } from "@/redux/services/reviewApi";
import {useGetMovieQuery, useGetMoviesQuery} from "@/redux/services/movieApi";
import FilmElement from "@/components/filmElement/filmElement";
import Image from "next/image";
import {GenreKey, Genres} from "@/assets/dictionaries/genres";
import Counter from "@/components/counter/counter";

export default function Film({ params }: { params: { id: string } }) {

  function InfoElement ({title, value}: {title: string, value: string | number}) {
    return (
      <div className={styles.infoItem}>
        <span className={styles.textInfoBig}>{title}</span>
        <span className={styles.textInfoSmall}>{value}</span>
      </div>
    )
  }

  const FilmInfo = (): ReactElement => {
    const { data, isLoading, error } = useGetMovieQuery(params.id);

    if (isLoading) {
      return <span className={styles.loadingText}>{"Загрузка..."}</span>
    }
    if (!data || error) {
      return <span className={styles.loadingText}>{"Фильм не найден =("}</span>
    }

    return (
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          <Image
            width={400}
            height={500}
            className={styles.image}
            src={data.posterUrl}
            alt={data.title}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.headerContainer}>
            <span className={styles.textHeader}>{data.title}</span>
            <Counter id={params.id}/>
          </div>

          <InfoElement
            title={"Жанр:"}
            value={(data.genre in Genres) ? Genres[data.genre as GenreKey] : " "}
          />
          <InfoElement
            title={"Год выпуска:"}
            value={data.releaseYear}
          />
          <InfoElement
            title={"Рейтинг:"}
            value={data.rating}
          />
          <InfoElement
            title={"Режиссер:"}
            value={data.director}
          />

          <span className={styles.descriptionWord}>Описание</span>
          <span className={styles.descriptionText}>{data.description}</span>

        </div>
      </div>
    )
  }

  const { data, isLoading, error } = useGetReviewsForMovieQuery(params.id);

  if ((isLoading) || (!data) || (error)) {
    return (
      <div className={styles.container}>
        <FilmInfo />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <FilmInfo />
      {data.map((review: any) =>
        <Review
          key={review.id}
          name={review.name}
          text={review.text}
          mark={review.rating}
        />
      )}
    </div>
  )
}