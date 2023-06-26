import styles from "./review.module.css";
import Placeholder from '../../assets/svg/img_placeholder.svg';
import Image from "next/image";

interface ReviewParams {
  name: string;
  text: string;
  mark: number;
}

export default function Review({ name, text, mark }: ReviewParams) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image src={Placeholder} alt="User" />
      </div>
      <div className={styles.containerText}>
        <div className={styles.textTop}>
          <span className={styles.reviewerName}>{name}</span>
          <div>
            <span className={styles.markText}>{"Оценка:"}</span>
            <span className={styles.markValue}>{mark}</span>
          </div>
        </div>
        <span className={styles.reviewText}>{text}</span>
      </div>
    </div>
  )
}