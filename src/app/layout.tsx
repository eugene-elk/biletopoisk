import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import CartDisplay from "@/components/cartDisplay/cartDisplay";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Biletopoisk',
  description: 'Created at Yandex School of UI Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <span className={"headerText"}><Link href="/">Билетопоиск</Link></span>
          <CartDisplay/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <span className={"footerText"}><Link href="/faq">Вопросы-ответы</Link></span>
          <span className={"footerText"}><Link href="/about">О нас</Link></span>
        </footer>
      </body>
    </html>
  )
}
