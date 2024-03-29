import { FC } from "react";
import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={"/"}>qpick</Link>
      <div className={styles.icons}>
        <div className={styles.likes}>
          <img src="/images/like.svg" alt="Избранное" />
          <div className={styles.circle}>2</div>
        </div>
        <div className={styles.likes}>
          <Link to={"/basket"}>
            <img src="/images/shopping-basket.svg" alt="Корзина" />
            <div className={styles.circle}>1</div>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
