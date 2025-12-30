import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* إضافة dir="rtl" لضبط اتجاه العناصر من اليمين لليسار */}
      <div className="px-[8%] lg:px-[16%] py-20 pb-8" dir="rtl">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* القسم الأول: الشعار والوصف */}
          <div className="w-full lg:w-1/2">
            <Link
              href="/"
              className={`text-4xl lg:text-5xl font-bold Audiowide text-white`}
            >
              Liv<span className="text-(--prim-dark)">ora</span>
            </Link>
            <p className="text-(--text-light) DmSans my-5 text-lg leading-relaxed">
              ارتقِ بتجربتك الرقمية مع ليفورا - منصتك المثالية لإدارة وتحسين كل ما يخص أعمالك الرقمية وتصاميمك العصرية.
            </p>
            
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-3">
              <i className="bi bi-facebook border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-instagram border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-twitter-x border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-linkedin border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-all duration-300 cursor-pointer"></i>
            </div>
          </div>

          {/* القسم الثاني: الروابط والخدمات */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {/* روابط سريعة */}
              <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-6">
                  روابط سريعة
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">الرئيسية</Link>
                  <Link href="#about" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">من نحن</Link>
                  <Link href="#expertise" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">معرض الأعمال</Link>
                </div>
              </div>

              {/* خدماتنا */}
              <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-6">
                  خدماتنا
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">تطوير التطبيقات</Link>
                  <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">تطوير المواقع</Link>
                  <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300">تصميم UI/UX</Link>
                </div>
              </div>

              {/* اتصل بنا */}
              <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-6">
                  تواصل معنا
                </h3>
                <div className="flex flex-col space-y-3">
                  <span className="text-(--text-light) DmSans dir-ltr inline-block">
                    info@livora.com
                  </span>
                  <span className="text-(--text-light) DmSans">
                    +966 123 456 789
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />
        
        {/* حقوق النشر */}
        <div className="text-center text-(--text-light) DmSans text-sm">
          &copy; {new Date().getFullYear()} ليفورا. جميع الحقوق محفوظة.
        </div>
      </div>
    </>
  );
};

export default Footer;