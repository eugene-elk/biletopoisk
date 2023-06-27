import './globals.css'
import Link from "next/link";
import CartDisplay from "@/components/cartDisplay/cartDisplay";
import {StoreProvider} from "@/redux/storeProvider";
import React from "react";

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
        <StoreProvider>
          <header>
            <span className={"headerText"}><Link href="/">Билетопоиск</Link></span>
            <CartDisplay/>
          </header>
          <main id="main-root">
            {children}
          </main>
          <footer>
            <span className={"footerText"}><Link href="/faq">Вопросы-ответы</Link></span>
            <span className={"footerText"}><Link href="/about">О нас</Link></span>
          </footer>
          <div id={"modal-root"}></div>
        </StoreProvider>
      </body>
    </html>
  )
}
