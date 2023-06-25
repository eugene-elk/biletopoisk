'use client'
import {Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from './faqElement.module.css'
import ArrowDown from '../../assets/arrow_down.svg'
import ArrowUp from  '../../assets/arrow_up.svg'
import Image from "next/image";

interface FaqElementProps {
  name: string;
  text: string;
}

export default function FaqElement({ name, text }: FaqElementProps) {

  const [expanded, setExpanded] = useState<boolean>(false);
  const [basicHeight, setBasicHeight] = useState<number>(32 + (24 * 2));
  const [maxHeight, setMaxHeight] = useState<number>(32 + 8 + 32 + (24 * 2));

  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headerRef.current)
      setBasicHeight(headerRef.current?.offsetHeight + (24 * 2));
    if ((textRef.current) && (headerRef.current))
      setMaxHeight(textRef.current?.offsetHeight + 8 + headerRef.current?.offsetHeight + (24 * 2));
  }, []);

  const contentStyle = {
    maxHeight: expanded ? maxHeight : basicHeight,
    overflow: "hidden",
    transition: "max-height 0.2s ease",
  };

  const textStyle = {
    opacity: expanded ? 1 : 0,
    overflow: "hidden",
    transition: "opacity 0.2s ease",
  }

  return (
    <button style={contentStyle} className={styles.container} onClick={() => setExpanded(!expanded)}>
      <div className={styles.lineOne} >
        <span className={styles.header} ref={headerRef}>{name}</span>
        <div className={styles.button} >
          {expanded ? <Image src={ArrowUp} alt="User" /> : <Image src={ArrowDown} alt="User" />}
        </div>
      </div>
      <div className={styles.lineTwo}>
        <span style={textStyle} className={styles.text} ref={textRef}>{text}</span>
      </div>
    </button>
  )
}