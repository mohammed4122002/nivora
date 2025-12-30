import Image from "next/image"
import starShape from "@/public/star-shapp.png"

const MarqueeSldier1 = () => {
  return (
    // أضفت dir="rtl" للتأكد من اتجاه العناصر بالداخل
    <div className='marquee bg-white py-6 overflow-hidden' dir="rtl">
        <div className="marquee_text flex items-center gap-10">
            <MarqueeItem text="منازل صُممت للحياة" />
            <MarqueeItem text="إبداع في التصميم" />
            <MarqueeItem text="جودة تدوم طويلاً" />
            <MarqueeItem text="رفاهية بلا حدود" />

            {/* تكرار العناصر لضمان استمرار الحركة السلسة */}
            <MarqueeItem text="منازل صُممت للحياة" />
            <MarqueeItem text="إبداع في التصميم" />
            <MarqueeItem text="جودة تدوم طويلاً" />
            <MarqueeItem text="رفاهية بلا حدود" />
        </div>
    </div>
  )
}

export default MarqueeSldier1

function MarqueeItem({text}:{text:string}){
    return(
     <div className="flex items-center gap-8 whitespace-nowrap">
        {/* تغيير الخط أو الحجم ليتناسب مع العربية */}
        <h2 className="marquee-text text-4xl md:text-5xl font-bold text-black uppercase">{text}</h2>
        <Image src={starShape} alt="star" width={40} height={40} />
     </div>   
    )
}