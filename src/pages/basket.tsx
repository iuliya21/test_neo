import { FC } from "react";
import styles from "./basket.module.css";
import ShopItem from "../components/shopItem/shopItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store";
import { removeItems } from "../services/buysSlice";

const Basket: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector((store: RootState) => store.items.buys);

  const totalCost = items.reduce((acc, el) => acc += el.price * el.count, 0)

  const deleteHandler = (id: string) => {
    dispatch(removeItems(id));
  };

  return (
    <div className={styles.basket}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.purchases}>
        <div className={styles.shoppingList}>
          {items.map((el, i) => (
            <ShopItem
              image={el.img}
              title={el.title}
              price={el.price}
              key={i}
              сount={el.count}
              deleteHandler={() => deleteHandler(el.id)}
              id={el.id}
            />
          ))}
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.totalText}>
            <p className={styles.total}>итого</p>
            <p className={styles.sum}>₽ {totalCost}</p>
          </div>
          
          <button className={styles.button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
export default Basket;
