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
    <div className={`${className}`}>
      <div className={headerStyle}>
        <div className={imageStyle}>
          <Image
            src={image ?? ""}
            className={`w-full object-cover`}
            width={300}
            height={150}
            alt="image"
          />
        </div>
        {action && (
          <ButtonCustom
            onClick={onClick}
            className={`min-w-[120px] cursor-pointer bg-[#49BBBD] text-white text-[18px] ${buttonStyle}`}
            name={buttonName ?? "News"}
          />
        )}
        {info}
      </div>
      <div className="flex flex-col gap-6">
        <h3 className={`text-[#252641] line-clamp-2 text-[26px] ${titleStyle}`}>
          {title}
        </h3>
        <p className={`line-clamp-2 text-[#696984] text-[20px] ${desStyle}`}>
          {description}
        </p>
        {footer}
      </div>
    </div>
  );
}

export default CardComponent;
