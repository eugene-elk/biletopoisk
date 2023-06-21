import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
          <span className={styles.headerText}>Билетопоиск</span>
      </header>
      <h1 className={styles.text}>This is the main page</h1>
      <footer className={styles.footer}>
          <span className={styles.footerText}>Вопросы-ответы</span>
          <span className={styles.footerText}>О нас</span>
      </footer>
    </main>
  )
}
