import { FC } from "react";
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { addItem, BuyItem } from "../../services/buysSlice";
import { selectedCard } from "../../services/infoCardSlice";

export type CardProps = {
  img: string;
  title: string;
  price: number;
  rate: number;
  totalPrice: number;
  id: string;
  count: number;
  openModal: Function,
  description: string,
};

const Card: FC<CardProps> = ({
  img,
  title,
  price,
  rate,
  totalPrice,
  id,
  count,
  openModal,
  description
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    const newItem: BuyItem = { img, title, price, id, count };
    dispatch(addItem(newItem));
  };
  const clickModal = () => {
    openModal();
    dispatch(selectedCard({img, title, price, description}))
  }
  
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
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        width={32}
        height={32}
        className={styles.info}
        onClick={clickModal}
      >
        <g>
          <g>
            <path
              fill="#838383"
              d="M437.019,74.981C388.668,26.628,324.379,0,256,0C187.62,0,123.332,26.628,74.981,74.981C26.629,123.333,0,187.62,0,256 c0,68.38,26.628,132.668,74.981,181.019C123.333,485.371,187.62,512,256,512c68.379,0,132.668-26.628,181.019-74.981 C485.371,388.667,512,324.38,512,256S485.372,123.332,437.019,74.981z M256,480.653C132.126,480.653,31.347,379.874,31.347,256 S132.126,31.347,256,31.347c123.875,0,224.653,100.779,224.653,224.653S379.875,480.653,256,480.653z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#838383"
              d="M256,83.592c-25.927,0-47.02,21.093-47.02,47.02s21.093,47.02,47.02,47.02s47.02-21.093,47.02-47.02 S281.927,83.592,256,83.592z M256,146.286c-8.642,0-15.673-7.031-15.673-15.673s7.031-15.673,15.673-15.673 c8.642,0,15.673,7.031,15.673,15.673S264.642,146.286,256,146.286z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#838383"
              d="M208.98,208.98v219.429h94.041V208.98H208.98z M271.673,397.061h-31.347V240.327h31.347V397.061z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Card;
