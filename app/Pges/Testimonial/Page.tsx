"use client";

import Image from "next/image";
import testbg from "@/public/testimonials-bg.jpg";
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import test1 from "@/public/testimonials-1.jpg"
import test2 from "@/public/testimonials-2.jpg"

const testimonialData = [
  {
    id: 1,
    image: test1,
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    role: "CEO, Company A",
  },
  {
    id: 2,  
    image: test2,
    name: "Jane Smith",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    role: "Marketing Manager, Company B",
  },
];

const Testimonial = () => {
  return (
    <>
      <div
        className="testimonial px-[8%] lg:px-[16%] py-20 gap-10 flex flex-col-reverse lg:flex-row "
        id="test"
      >
        <div className="w-full lg:w-1/2 testimonial-image relative">
          <Image
            src={testbg}
            alt="alt"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <div className="flex flex-col">
              <div className="w-full">
                <span className="text-lg Rethink font-semibold text-gray-400 uppercase">Our Clients say</span>
              </div>
              <div className="w-full mt-4">
                <h1 className="text-5xl md:text-6xl Rethink font-semibold"> Here is What <span className="text-(--prim)">warm words our clients</span> Say</h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5">
                <h1 className="text-7xl">4.80</h1>
                <div className="flex flex-col items-center">
                    <div className="stars-icon flex items-center gap-1 bg-(--prim) text-white px-3 py-1 rounded-full">
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                    </div>
                    <p className="">2,688 reviwes</p>
                </div>
                <p className="w-full lg:w-[50%] font-semibold Rethink">
                  Rated 4.8/5 stars by our customers for excellent service
                  and support.
                </p>
            </div>
          </div>
          <div className="mt-10">
            <Swiper 
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
             
            }}
            modules={[Autoplay]}
            speed={1500}
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center ">
                    <Image
                      src={item.image}
                      alt="alt"
                      className="h-[75px] w-[75px] rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <p className="text-gray-500">{item.role}</p>
                      <p className="mt-3">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
