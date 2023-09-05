import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  image: string;
  children: ReactNode;
};

function OurCard({ image, children }: Props) {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:even:flex-row-reverse">
      <div className="basis-1/2">
        <Image
          src={image}
          className="w-full"
          width={600}
          height={300}
          alt="our-image"
        />
      </div>
      <div className="basis-1/2">
        {children}
      </div>
    </div>
  );
}

export default OurCard;
