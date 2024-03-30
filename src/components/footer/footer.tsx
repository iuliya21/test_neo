import { FC } from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <NavLink className={styles.logo} to={"/"}>qpick</NavLink>
      <nav className={styles.footerNav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Избранное</li>
          <li className={styles.listItem}>
            <NavLink to={"/basket"} className={styles.link}>Корзина</NavLink>
          </li>
          <li className={styles.listItem}>Контакты</li>
        </ul>
        <div className={styles.footerInfo}>
          <p className={`${styles.text} ${styles.listItem}`}>Условия сервиса</p>
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
