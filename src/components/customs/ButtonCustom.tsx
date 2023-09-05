import React from "react";

type Props = {
  className?: string;
  name: string;
  onClick?: () => void;
  disabled?: boolean;
};

function ButtonCustom({ className, name, onClick, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`btn rounded-full normal-case ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default ButtonCustom;
