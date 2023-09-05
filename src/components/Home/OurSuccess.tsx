import React from 'react'
import IntroduceItem from './IntroduceItem';
import { initialIntroduce } from '@/data';

function OurSuccess() {
  return (
    <div className="flex flex-col text-black items-center py-10 lg:py-20">
        <div className="w-full mx-auto">
        <h2 className="font-bold text-center text-[28px] lg:text-[48px]">Our Success</h2>
        <p className="text-center text-[18px] text-[#696984] lg:text-[22px]">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </p>
        </div>
        <div
            className='flex items-center flex-wrap gap-8 justify-center 2xl:gap-20'
        >
        {initialIntroduce?.map((item, index) => {
          return (
            <IntroduceItem
              key={index + item?.title}
              statistical={item.statistical}
              title={item.title}
            />
          );
        })}
      </div>
      </div>
  )
}

export default OurSuccess