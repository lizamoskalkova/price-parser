import style from "./Modal.module.css";
import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../store/modalSlice";
import { RootState } from "../../store/store";

export type ModalProps = {
  children?: string;
  icon: ReactElement;
};

export const Modal = ({ children, icon }: ModalProps) => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(setModalOpen(false));
    e.stopPropagation();
  };
  return (
    <>
      {isOpen
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
