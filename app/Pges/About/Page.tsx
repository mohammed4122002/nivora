import Image from "next/image";
import about1 from "@/public/About-1.jpg";
import about2 from "@/public/About-2.jpg";
import about3 from "@/public/About-3.jpg";

const About = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20" id="about" dir="rtl">
        {/* الرأسية (Header) */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full lg:w-2/3 text-center">
            <span className="text-lg Rethink font-semibold uppercase text-(--text-light) tracking-wide">
              تصميم مساحات للحياة
            </span>
            <h1 className="text-5xl md:text-7xl Rethink font-semibold leading-tight mt-2">
              نصمم مساحاتنا بكل عناية وإتقان
            </h1>
          </div>
        </div>

        <div className="mt-20 about-wrap">
          {/* الجزء الأول: صورة يمين - نص يسار (تم العكس للعربي) */}
          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about1}
                  alt="تصميم عصري"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-start lg:pr-10">
              <div className="w-full lg:w-[90%] text-right">
                <h1 className="text-5xl Rethink font-semibold leading-snug">
                  تحويل المساحات برؤية إبداعية
                </h1>
                <p className="text-(--text-light) mt-5 text-lg leading-relaxed">
                  نحن نؤمن أن كل زاوية في منزلك تحكي قصة. نساعدك في تحويل تلك المساحات الصامتة إلى أماكن تنبض بالحياة والجمال الذي يعكس شخصيتك الفريدة.
                </p>
              </div>
            </div>
          </div>

          {/* الجزء الثاني: نص يمين - صورة يسار (استخدمنا flex-row-reverse لعكس الترتيب في الشاشات الكبيرة) */}
          <div className="about-content flex flex-col-reverse lg:flex-row-reverse gap-10 justify-between items-center w-full mt-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[90%] flex lg:justify-end">
                <Image
                  src={about2}
                  alt="رؤية فنية"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-start lg:pl-10">
              <div className="w-full lg:w-[90%] text-right">
                <h1 className="text-5xl Rethink font-semibold leading-snug">
                  جودة لا تضاهى في التنفيذ
                </h1>
                <p className="text-(--text-light) mt-5 text-lg leading-relaxed">
                  الدقة هي عنواننا. من اختيار المواد الخام وحتى اللمسات النهائية، نهتم بكل التفاصيل الصغيرة لنضمن لك نتيجة تفوق توقعاتك وتدوم طويلاً.
                </p>
              </div>
            </div>
          </div>

          {/* الجزء الثالث: صورة يمين - نص يسار */}
          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about3}
                  alt="إتقان العمل"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-start lg:pr-10">
              <div className="w-full lg:w-[90%] text-right">
                <h1 className="text-5xl Rethink font-semibold leading-snug">
                  حلول مخصصة لكل عميل
                </h1>
                <p className="text-(--text-light) mt-5 text-lg leading-relaxed">
                  لا نتبع نمطاً واحداً، بل نبتكر لكل عميل ما يناسب احتياجاته ومساحته الخاصة، لنضمن توظيف كل متر مربع بأفضل طريقة ممكنة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;