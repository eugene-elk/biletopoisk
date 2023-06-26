'use client'
import styles from './film.module.css'
import Review from "@/components/review.tsx/review";
import {ReactElement, useEffect} from "react";
import {useGetMovieQuery, useGetMoviesQuery} from "@/redux/services/movieApi";
import FilmElement from "@/components/filmElement/filmElement";
import Image from "next/image";

export default function Film({ params }: { params: { id: number } }) {

  const FilmInfo = (): ReactElement => {
    const { data, isLoading, error} = useGetMovieQuery(params.id);

    if (isLoading) {
      return (
        <span className={styles.loadingText}>{"Загрузка..."}</span>
      )
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
          </div>

          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Жанр:"}</span>
            <span className={styles.textInfoSmall}>{data.genre}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Год выпуска:"}</span>
            <span className={styles.textInfoSmall}>{data.releaseYear}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Рейтинг:"}</span>
            <span className={styles.textInfoSmall}>{data.rating}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Режиссер:"}</span>
            <span className={styles.textInfoSmall}>{data.director}</span>
          </div>

          <span className={styles.descriptionWord}>Описание</span>
          <span className={styles.descriptionText}>{data.description}</span>

        </div>
      </div>
    )
  }

  const reviews: Array<{id: string, name: string, text: string, mark: number}> = [
    {
      id: "25",
      name: "Роман",
      text: "По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...",
      mark: 8,
    },
    {
      id: "20",
      name: "Евгений",
      text: "Не впечатлило",
      mark: 3,
    },
  ]

  return (
    <div className={styles.container}>
      <FilmInfo />
      {reviews.map((review) =>
        <Review
          key={review.id}
          name={review.name}
          text={review.text}
          mark={review.mark}
        />
      )}

    </div>
  )
}