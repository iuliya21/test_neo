import { FC } from "react";
import styles from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/store";
import { addItem, BuyItem } from "../../services/buysSlice";

type CardProps = {
  img: string;
  title: string;
  price: number;
  rate: number;
  totalPrice: number;
};

const Card: FC<CardProps> = ({ img, title, price, rate, totalPrice }) => {
  const items = useSelector((store: RootState) => store.items);
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    const newItem: BuyItem = { img, title, price };
    dispatch(addItem(newItem));
  };


  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.text}>
        <p className={styles.titleCard}>{title}</p>
        <p className={styles.price}>{price} ₽</p>
        {price !== totalPrice && (
          <p className={styles.discount}>{totalPrice} ₽</p>
        )}
      </div>
      <div className={styles.textBottom}>
        <div className={styles.raiting}>
          <img src="/images/star.svg" alt="Рейтинг" className={styles.star} />
          <p className={styles.raitingNumber}>{rate}</p>
        </div>
        <button className={styles.button} onClick={clickHandler}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
