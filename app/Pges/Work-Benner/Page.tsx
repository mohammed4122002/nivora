import Image from "next/image"
import partner1 from "@/public/partner-1.webp"
import partner2 from "@/public/partner-2.webp"
import partner3 from "@/public/partner-3.webp"
import partner4 from "@/public/partner-4.webp"
import partner5 from "@/public/partner-5.webp"
import partner6 from "@/public/partner-6.webp"

const WorkBanner = () => {
  // مصفوفة الشركاء لتقليل تكرار الكود وجعل التعديل أسهل
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

  return (
    <>
      {/* القسم العلوي - العنوان */}
      <div className="px-[8%] lg:px-[16%] py-20 work-banner" dir="rtl">
        <div className="work-banner-content flex flex-col h-full lg:flex-row justify-center items-center">
          <h2 className="text-white Rethink text-5xl lg:text-7xl font-bold text-center leading-tight">
            نحظى بثقة رواد الأعمال والعلامات التجارية عالمياً
          </h2>
        </div>
      </div>

      {/* شبكة الشعارات (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-gray-500" dir="rtl">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className={`
              p-10 flex items-center justify-center border-gray-500
              border-b 
              /* border-l تعني الخط الفاصل يكون على اليسار ليظهر الترتيب من اليمين بشكل صحيح */
              lg:border-l 
              ${index % 2 !== 0 ? 'md:border-l-0 lg:border-l' : 'md:border-l'} 
              /* إزالة الخط الأخير في نسخة الحاسوب */
              ${index === partners.length - 1 ? 'lg:border-l-0' : ''}
            `}
          >
            <Image 
              src={partner} 
              alt="شريك النجاح" 
              className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0" 
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default WorkBanner