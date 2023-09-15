import Image from "next/image";
import React, { ReactNode } from "react";
import ButtonCustom from "../customs/ButtonCustom";

type Props = {
  info?: ReactNode;
  action?: boolean;
  className?: string;
  headerStyle?: string;
  buttonStyle?: string;
  buttonName?: string;
  onClick?: () => void;
  image?: string;
  imageStyle?: string;
  title?: string;
  titleStyle?: string;
  description?: string;
  desStyle?: string;
  footer?: ReactNode;
};

function CardComponent({
  info,
  action = false,
  className = "",
  headerStyle,
  buttonStyle,
  buttonName,
  onClick,
  image,
  imageStyle,
  title,
  titleStyle,
  description,
  desStyle,
  footer,
}: Props) {
  return (
    <div className={`${className} group`}>
      <div className={headerStyle}>
        <div className={`${imageStyle} overflow-hidden rounded-2xl`}>
          <Image
            src={image ?? ""}
            className={`w-full object-contain transition-all duration-300 ease-in hover:transition-all hover:duration-500 hover:ease-out hover:scale-125`}
            width={300}
            height={150}
            alt="image"
          />
        </div>
        {action && (
          <ButtonCustom
            onClick={onClick}
            className={`min-w-[120px] cursor-pointer bg-[#49BBBD] text-[18px] ${buttonStyle}`}
            name={buttonName ?? "News"}
          />
        )}
        {info}
      </div>
      <div className="flex flex-col gap-6">
        <h3 className={`line-clamp-2 text-[26px] ${titleStyle}`}>
          {title}
        </h3>
        <p className={`line-clamp-2 text-[20px] ${desStyle}`}>
          {description}
        </p>
        {footer}
      </div>
    </div>
  );
}

export default CardComponent;
