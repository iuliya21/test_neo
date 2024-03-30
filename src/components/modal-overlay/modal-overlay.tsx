import { FC, ReactElement } from "react";
import styles from "./modal-overlay.module.css";

type TModal = {
  children: ReactElement;
  onClosePopup: () => void;
};

const ModalOverlay: FC<TModal> = ({ children, onClosePopup }) => {
  return (
    <div className={styles.overlay} onClick={onClosePopup}>
      {children}
    </div>
  );
};

export default ModalOverlay;
