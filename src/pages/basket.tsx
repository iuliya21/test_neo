import { FC } from "react";
import styles from "./basket.module.css";
import ShopItem from "../components/shopItem/shopItem";
import { useSelector } from "react-redux";
import { RootState } from "../services/store";

const Basket: FC = () => {
  const items = useSelector((store: RootState) => store.items.buys);

  return (
    <div className={styles.basket}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.purchases}>
        <div className={styles.shoppingList}>
          {items.map((el, i) => (
            <ShopItem image={el.img} title={el.title} price={el.price} key={i}/>
          ))}
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.totalText}>
            <p className={styles.total}>итого</p>
            <p className={styles.sum}>₽ 2 927</p>
          </div>
          <button className={styles.button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
export default Basket;
