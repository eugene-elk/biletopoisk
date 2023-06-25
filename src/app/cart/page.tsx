import styles from './cart.module.css'
import Review from "@/components/review.tsx/review";
import FilmElement from "@/components/filmElement/filmElement";

export default function Cart() {

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
      {cartItems.map((item) =>
        <FilmElement
          key={item.id}
          name={item.name}
          genre={item.genre}
          deleteButton={true}
        />
      )}
    </div>
  )
}