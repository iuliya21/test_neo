import { FC } from "react";
import styles from "./footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.logo}>qpick</p>
      <nav className={styles.footerNav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Избранное</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
        <div className={styles.footerInfo}>
          <p className={styles.text}>Условия сервиса</p>
          <div className={styles.langChange}>
            <img src="/images/lang.svg" alt="Выбор языка" />
            <p className={`${styles.langSelector} ${styles.active}`}>Рус</p>
            <p className={styles.langSelector}>Eng</p>
          </div>
        </div>
      </nav>
      <img src="/images/social.svg" alt="Социальные сети" />
    </div>
  );
};
export default Footer;
