import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./main.module.css";
import CardSection from "../cardSection/cardSection";
import Card from "../card/card";
import { headphones, headphonesWireless } from "../../utils/utils";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import InfoCard from "../infoCard/infoCard";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { deleteDetails } from "../../services/infoCardSlice";

const Main: FC = () => {

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch<AppDispatch>();
  
  const showModal = () => {
    openModal();
  };
  const hideModal = () => {
    closeModal();
    dispatch(deleteDetails())
  };
  return (
    <main className={styles.main}>
      <CardSection titleSection="Наушники">
        {headphones.map(({ img, title, price, rate, discount, count, description }) => {
          const id = uuidv4();
          return (
            <Card
              img={img}
              title={title}
              price={Math.floor(price * discount)}
              rate={rate}
              key={id}
              id={id}
              totalPrice={price}
              count={count}
              openModal={() => showModal()}
              description={description}
            />
          );
        })}
      </CardSection>
      <CardSection titleSection="Беспроводные наушники">
      {headphonesWireless.map(({ img, title, price, rate, discount, count, description }) => {
          const id = uuidv4();
          return (
            <Card
              img={img}
              title={title}
              price={Math.floor(price * discount)}
              rate={rate}
              key={id}
              totalPrice={price}
              id={id}
              count={count}
              openModal={() => showModal()}
              description={description}
            />
          );
        })}
      </CardSection>
      {isModalOpen && (
        <Modal onClosePopup={hideModal}>
          <InfoCard />
        </Modal>
      )}
    </main>
  );
};

export default Main;
