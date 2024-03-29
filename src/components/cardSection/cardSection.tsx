import { FC, ReactElement } from "react";
import styles from "./cardSection.module.css";

type CardSectionProps = {
  titleSection: string;
  children: any,
};

const CardSection: FC<CardSectionProps> = ({ titleSection, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{titleSection}</h2>
      <div className={styles.cards}>
        {children}
      </div>
    </section>
  );
};

export default CardSection;
