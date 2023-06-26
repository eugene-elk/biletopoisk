import styles from './film.module.css'
import Review from "@/components/review.tsx/review";

export default function Film() {

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
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>

        </div>
        <div className={styles.textContainer}>
          <div className={styles.headerContainer}>
            <span className={styles.textHeader}>Властелин колец: Братство кольца</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Жанр:"}</span>
            <span className={styles.textInfoSmall}>Фентези</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Год выпуска:"}</span>
            <span className={styles.textInfoSmall}>2001</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Рейтинг:"}</span>
            <span className={styles.textInfoSmall}>8</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.textInfoBig}>{"Режиссер:"}</span>
            <span className={styles.textInfoSmall}>Питер Джексон</span>
          </div>

          <span className={styles.descriptionWord}>Описание</span>
          <span className={styles.descriptionText}>{"Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил."}</span>

        </div>
      </div>
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