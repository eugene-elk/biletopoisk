'use client'

import styles from './faq.module.css'
import {useState} from "react";
import FaqElement from "@/components/faqElement.tsx/faqElement";

export default function Faq() {

  const faqContent: Array<{key: string, name: string, text: string}> = [
    {
      key: "faq-0",
      name: "Что такое Билетопоиск?",
      text: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
    },
    {
      key: "faq-1",
      name: "Какой компании принадлежит Билетопоиск?",
      text: "Владельцем проекта до октября 2013 года являлась компания ООО «КиноПоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании AlloCiné. 15 октября 2013 года сервис приобрела компания «Яндекс»."
    },
    {
      key: "faq-2",
      name: "Как купить билет на Билетопоиск?",
      text: "Выбрать билеты, перейти в корзину, оформить покупку"
    },
    {
      key: "faq-3",
      name: "Как оставить отзыв на Билетопоиск?",
      text: "В данный момент все отзывы на этом сайте - ненастоящие, и настоящий оставить нельзя. Смиритесь с этим неприятным фактом."
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <span className={styles.header}>{"Вопросы-ответы"}</span>
      </div>
      {faqContent.map((element) =>
        <FaqElement
          key={element.key}
          name={element.name}
          text={element.text}
        />
      )}

    </div>
  )
}