"use client";

import Image from "next/image";
import testbg from "@/public/testimonials-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import test1 from "@/public/testimonials-1.jpg";
import test2 from "@/public/testimonials-2.jpg";

const testimonialData = [
  {
    id: 1,
    image: test1,
    name: "أحمد منصور",
    desc: "تجربة رائعة جداً، الفريق محترف للغاية والنتائج تجاوزت توقعاتي. الاهتمام بالتفاصيل الصغيرة هو ما يميزهم فعلاً عن غيرهم في هذا المجال.",
    role: "المدير التنفيذي، شركة التقنية",
  },
  {
    id: 2,
    image: test2,
    name: "سارة الجاسم",
    desc: "أذهلني مستوى الإبداع والسرعة في التنفيذ. استطاعوا تحويل رؤيتي إلى واقع ملموس بطريقة فنية مذهلة. أنصح بالتعامل معهم بشدة.",
    role: "مديرة التسويق، شركة الإبداع",
  },
];

const Testimonial = () => {
  return (
    <>
      <div
        className="testimonial px-[8%] lg:px-[16%] py-20 gap-10 flex flex-col-reverse lg:flex-row-reverse items-center"
        id="test"
        dir="rtl"
      >
        {/* محتوى النصوص (الآن على اليمين) */}
        <div className="w-full lg:w-1/2">
          <div>
            <div className="flex flex-col text-right">
              <div className="w-full">
                <span className="text-lg Rethink font-semibold text-gray-400 uppercase tracking-widest">
                  ماذا يقول عملاؤنا
                </span>
              </div>
              <div className="w-full mt-4">
                <h1 className="text-5xl md:text-6xl Rethink font-semibold leading-tight">
                  إليك بعض <span className="text-(--prim)">الكلمات الطيبة من عملائنا</span> المخلصين
                </h1>
              </div>
            </div>

            {/* تقييم النجوم */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-8">
                <h1 className="text-7xl font-bold">4.80</h1>
                <div className="flex flex-col items-center">
                    <div className="stars-icon flex flex-row-reverse items-center gap-1 bg-(--prim) text-white px-3 py-1 rounded-full">
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                    </div>
                    <p className="mt-1 text-gray-400">2,688 مراجعة</p>
                </div>
                <p className="w-full lg:w-[50%] font-medium Rethink text-gray-300 leading-relaxed">
                  تم تقييمنا بـ 4.8/5 نجوم من قبل عملائنا لخدماتنا الممتازة ودعمنا المتواصل.
                </p>
            </div>
          </div>

          {/* السلايدر (Swiper) */}
          <div className="mt-10">
            <Swiper 
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              dir="rtl" // تفعيل اتجاه اليمين لليسار في السلايدر
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              speed={1500}
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-right">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-[85px] w-[85px] rounded-full object-cover border-2 border-(--prim)"
                    />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <p className="text-(--prim) font-medium">{item.role}</p>
                      <p className="mt-3 text-lg text-gray-300 leading-relaxed font-light italic">"{item.desc}"</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* صورة الخلفية (الآن على اليسار) */}
        <div className="w-full lg:w-1/2 testimonial-image relative">
          <Image
            src={testbg}
            alt="testimonials"
            className="w-full h-[500px] lg:h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;