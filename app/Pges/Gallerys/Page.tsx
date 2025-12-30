import Image from "next/image"
import gallery1 from "@/public/gallery-1.jpg"
import gallery2 from "@/public/gallery-2.jpg"
import gallery3 from "@/public/gallery-3.jpg"
import gallery4 from "@/public/gallery-4.jpg"
import gallery5 from "@/public/gallery-5.jpg"
import gallery6 from "@/public/gallery-6.jpg"

const Gallery = () => {
  // وضع الصور في مصفوفة لجعل الكود أنظف وأسهل في الإدارة
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <>
      <div className="pt-20 pb-20" dir="rtl">
        {/* العنوان المترجم */}
        <h2 className='text-center pb-10 Rethink text-2xl md:text-3xl font-bold text-white'>
          تابعونا على <span className='underline text-(--prim) cursor-pointer hover:text-white transition-colors'>إنستغرام</span>
        </h2>
     
        {/* شبكة الصور */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item overflow-hidden relative group">
              <Image 
                src={img} 
                alt={`صورة المعرض ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* طبقة شفافة تظهر عند التمرير (Hover Effect) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="bi bi-instagram text-white text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery