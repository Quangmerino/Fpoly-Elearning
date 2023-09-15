import React, { ReactNode } from "react";

type Props = {
  className?: string;
  name: string;
  icon?: ReactNode,
  onClick?: () => void;
  disabled?: boolean;
};

function ButtonCustom({ className, name, icon, onClick, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`btn rounded-full normal-case ${className}`}
      onClick={onClick}
    >
      {icon} {name}
    </button>
  );
}

export default ButtonCustom;
