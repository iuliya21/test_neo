import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./main.module.css";
import CardSection from "../cardSection/cardSection";
import Card from "../card/card";
import { headphones, headphonesWireless } from "../../utils/utils";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <CardSection titleSection="Наушники">
        {headphones.map(({ img, title, price, rate, discount }) => {
          const uuid = uuidv4();
          return (
            <Card
              img={img}
              title={title}
              price={Math.floor(price * discount)}
              rate={rate}
              key={uuid}
              totalPrice={price}
            />
          );
        })}
      </CardSection>
      <CardSection titleSection="Беспроводные наушники">
      {headphonesWireless.map(({ img, title, price, rate, discount }) => {
          const uuid = uuidv4();
          return (
            <Card
              img={img}
              title={title}
              price={Math.floor(price * discount)}
              rate={rate}
              key={uuid}
              totalPrice={price}
            />
          );
        })}
      </CardSection>
    </main>
  );
};

export default Main;
