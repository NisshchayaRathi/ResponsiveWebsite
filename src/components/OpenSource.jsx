import { Swiper, SwiperSlide } from "swiper/react";
import {ChevronsLeftRight } from "lucide-react";
import {Star } from "lucide-react";
import {GitBranch } from "lucide-react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { pricingOptions } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col  bg-white">
      <h2 className="text-3xl text-blue-800 sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        OPEN SOURCE
      </h2>
      <Swiper
     
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
         className="max-w-[90%] md:max-w-[40%] lg:max-w-[40%] mt-12 z-10 relative"
      >
        {pricingOptions.map((item,index) => (
          <SwiperSlide key={item.title} className={` sm:w-1/2 lg:w-1/4 ${
            index === 1 ? "bg-black text-white" : "bg-white"
          }`}
          >
          <div className="flex flex-wrap border border-neutral-700 p-12">
            <ChevronsLeftRight size={55} />
            <div className="pl-5">
              <h3 className="text-4xl">{item.title}</h3>
              <p className="pt-6">{item.content}</p>
              <div className="flex justify-start space-x-4 pt-8 pb-6">
                <Star fill="gray" />
                <span>645</span>
                <GitBranch fill="gray" />
                <span>324</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;