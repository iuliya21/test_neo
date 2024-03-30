import { FC } from "react";
import styles from "./shopItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { decrement, increment, removeItems } from "../../services/buysSlice";

type ShopItemProps = {
  image: string;
  title: string;
  price: number;
  сount: number;
  deleteHandler: Function;
  id: string;
};

const ShopItem: FC<ShopItemProps> = ({
  image,
  title,
  price,
  deleteHandler,
  id,
  сount,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const incrementItem = () => {
    dispatch(increment(id));
  };

  const decrementItem = () => {
    if (сount === 1) {
      dispatch(removeItems(id))
    } else {
      dispatch(decrement(id));
    }
  };

  return (
    <div className={styles.shopItem}>
      <div className={styles.element}>
        <div className={styles.imageItem}>
          <img src={image} alt="Изображение" />
          <div className={styles.counter}>
            <img
              src="/images/decrement.svg"
              alt="Уменьшить"
              className={styles.counterImage}
              onClick={decrementItem}
            />
            <p>{сount}</p>
            <img
              src="/images/increment.svg"
              alt="Увеличить"
              className={styles.counterImage}
              onClick={incrementItem}
            />
          </div>
        </div>
        <div>
          <h3 className={styles.titleItem}>{title}</h3>
          <p className={styles.priceItem}>{price} ₽</p>
        </div>
      </div>
      <div className={styles.total}>
        <img
          src="/images/basket.svg"
          alt="Корзина"
          className={styles.iconDelete}
          onClick={() => deleteHandler(id)}
        />
        <p className={styles.price}>{price * сount} ₽</p>
      </div>
    </div>
  );
};
export default ShopItem;
