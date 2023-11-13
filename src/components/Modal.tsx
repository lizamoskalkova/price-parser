import style from "./Modal.module.css";
import { ReactElement } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  children?: string;
  open: boolean;
  closeModal: () => void;
  icon: ReactElement;
};

export const Modal = ({ children, open, closeModal, icon }: ModalProps) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    closeModal();
    e.stopPropagation();
  };
  return (
    <>
      {open
        ? createPortal(
            <div className={style.modal}>
              <div className={style.icon} onClick={(e) => handleCloseModal(e)}>
                {icon}
              </div>
              <div className={style.children}>{children}</div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
