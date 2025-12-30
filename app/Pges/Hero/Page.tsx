"use client"
import CountUp from 'react-countup'

const Hero = () => {
  return (
    // إضافة dir="rtl" لقلب اتجاه الصفحة بالكامل
    <div className='px-[8%] lg:px-[5%] hero-header relative ' id="home" dir="rtl">
        
        {/* المحتوى الرئيسي - تم تعديل المحاذاة لليمين */}
        <div className='hero-content w-full lg:w-1/2 text-right py-20 lg:py-32'>
            <h1 className='text-5xl md:text-7xl font-semibold leading-tight'>
                نبتكر حلولاً رقمية <br/> لمستقبل أعمالك
            </h1>
            <p className="my-5 w-full lg:w-[80%] text-lg text-gray-200">
                نحن نساعد الشركات على النمو من خلال تصميم تجارب مستخدم استثنائية وبناء هويات بصرية قوية تترك أثراً لا ينسى.
            </p>
            <button className='Rethink font-semibold px-10 py-4 text-xl bg-(--prim) mt-4 text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 cursor-pointer'> 
                ابدأ مشروعك الآن
            </button>
        </div>

        {/* صندوق الإحصائيات - تم نقله لليسار باستخدام left-0 بدلاً من right-0 */}
        <div className='md:absolute bottom-0 left-0 p-10 flex flex-col mt-10 md:mt-0 rounded-t-3xl md:rounded-tr-3xl md:rounded-tl-none bg-black max-w-xl'>
            <h1 className='text-3xl mb-5 font-semibold text-white'>عن الاستوديو الخاص بنا</h1>
            <p className='w-full text-(--text-light) leading-relaxed'>
                فريق عمل شغوف يسعى لتحويل الأفكار المعقدة إلى واقع ملموس وبسيط، مع التركيز على الجودة والابتكار في كل تفصيلة.
            </p>
            
            <div className="grid grid-cols-3 gap-5 mt-8">
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim) flex items-center gap-1">
                        <CountUp start={0} end={73} duration={5}/>+
                    </h2>
                    <p className='text-(--text-light) text-sm'>مشروع مكتمل</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim) flex items-center gap-1">
                        <CountUp start={0} end={504} duration={5}/>+
                    </h2>
                    <p className='text-(--text-light) text-sm'>عميل سعيد</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim) flex items-center gap-1">
                        <CountUp start={0} end={5} duration={5}/>k
                    </h2>
                    <p className='text-(--text-light) text-sm'>ساعة عمل</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero