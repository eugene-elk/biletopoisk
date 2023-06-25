import styles from './page.module.css'
import FilmElement from "@/components/filmElement/filmElement";

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

  return (
    <div className={styles.main}>
      <div className={styles.menu}>

      </div>
      <div className={styles.content}>
        {content.map((item) =>
          <FilmElement
            key={item.id}
            name={item.name}
            genre={item.genre}
          />
        )}
      </div>
    </div>
  )
}
