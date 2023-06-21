import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <h1>This is the main page</h1>
      <h3>Small text</h3>
    </main>
  )
}
