import { FC } from "react";
import styles from "./infoCard.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const InfoCard: FC = () => {
  const selectedCard = useSelector(
    (store: RootState) => store?.details?.details
  );

  if (!selectedCard) return null;

  return (
    <div className={styles.modal}>
      <h3 className={styles.title}>{selectedCard.title}</h3>
      <img
        alt={selectedCard.title}
        src={selectedCard.img}
        className={styles.image}
      />
      <p className={styles.price}>{selectedCard.price} ₽</p>
      <p className={styles.price}>{selectedCard.description}</p>
    </div>
  );
};

export default InfoCard;
