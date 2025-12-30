"use client";
import Image from "next/image";
import expertise1 from "@/public/expertise-1.jpg";
import expertise2 from "@/public/expertise-2.jpg";
import expertise3 from "@/public/expertise-3.jpg";

// ترجمة محتوى الخبرات
const expertise = [
  {
    id: 1,
    title: "واجهات عصرية 1",
    desc: "خطوط انسيابية تلتقي مع الزجاج العاكس",
    img: expertise1,
  },
  {
    id: 2,
    title: "واجهات عصرية 2",
    desc: "تصاميم معمارية تجمع بين الفخامة والوظيفة",
    img: expertise2,
  },
  {
    id: 3,
    title: "واجهات عصرية 3",
    desc: "لمسات إبداعية في تشكيل الفراغات الخارجية",
    img: expertise3,
  },
];

const Expertise = () => {
  return (
    <>
      {/* إضافة dir="rtl" لضبط اتجاه العناصر */}
      <div id="expertise" className="px-[8%] lg:px-[16%] py-20 pt-30" dir="rtl">
        <div className="text-center">
          <span className="text-(--text-light) text-lg uppercase Rethink tracking-widest">
            خبراتنا المتميزة
          </span>
          <h2 className="text-5xl lg:text-7xl text-white Rethink font-bold mt-5 leading-tight">
            تصميم وتشكيل <br className="hidden md:block" /> مساحات فريدة من نوعها
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-200/20 rounded-md text-center p-6 overflow-hidden cursor-pointer transition-colors hover:border-white/30"
            >
              <h3 className="text-2xl Rethink font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 DmSans mb-5 leading-relaxed">{item.desc}</p>
              
              <div className="overflow-hidden rounded mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="mx-auto rounded transition-transform duration-500 ease-out group-hover:scale-105"
                  placeholder="blur" // اختيار اختياري إذا كنت تستخدم استيراد محلي
                />
              </div>

              {/* تغيير الأيقونة إلى السهم الأيسر ليتناسب مع اتجاه النص العربي */}
              <button className="Rethink font-medium text-lg cursor-pointer flex justify-center items-center w-full gap-3 border py-3 border-gray-200/20 hover:bg-gray-200/10 transition-all duration-300 rounded-sm">
                تعرف على المزيد 
                <i className="bi bi-arrow-left"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expertise;