import { FC } from "react";
import styles from "./shopItem.module.css";

type ShopItemProps = {
  image: string,
  title: string,
  price: number,
}

const ShopItem: FC<ShopItemProps> = ({image, title, price}) => {
  return (
    <div className={styles.shopItem}>
            <div className={styles.element}>
              <div className={styles.imageItem}>
                <img src={image} alt="" />
                <div className={styles.counter}>
                  <img
                    src="/images/decrement.svg"
                    alt="Уменьшить"
                    className={styles.counterImage}
                  />
                  <p>1</p>
                  <img
                    src="/images/increment.svg"
                    alt="Увеличить"
                    className={styles.counterImage}
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
              />
              <p className={styles.price}>{price} ₽</p>
            </div>
          </div>
  )
}
export default ShopItem;