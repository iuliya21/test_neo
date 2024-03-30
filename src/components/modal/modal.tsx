import { FC, ReactElement, useEffect } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

export type TModal = {
  children: ReactElement;
  onClosePopup: () => void;
};

const modalRoot: HTMLElement | null = document.getElementById("react-modals");

const Modal: FC<TModal> = ({ children, onClosePopup }) => {

  



  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClosePopup();
      }
    };
    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, []);
  return (
    modalRoot &&
    createPortal(
      <ModalOverlay onClosePopup={onClosePopup}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <IoMdClose
            size={50}
            color="grey"
            className={styles.closeButton}
            onClick={onClosePopup}
          />
          {children}
        </div>
      </ModalOverlay>,
      modalRoot
    )
  );
};

export default Modal;
