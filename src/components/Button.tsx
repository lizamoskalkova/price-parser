import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { className, children, ...restButtonProps } = props;
  return (
    <button className={className ?? style.button} {...restButtonProps}>
      {children}
    </button>
  );
};
