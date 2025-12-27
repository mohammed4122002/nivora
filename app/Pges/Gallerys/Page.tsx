import Image from "next/image"
import gallery1 from "@/public/gallery-1.jpg"
import gallery2 from "@/public/gallery-2.jpg"
import gallery3 from "@/public/gallery-3.jpg"
import gallery4 from "@/public/gallery-4.jpg"
import gallery5 from "@/public/gallery-5.jpg"
import gallery6 from "@/public/gallery-6.jpg"



const Gallery = () => {
  return (
    <>
     <div className="pt-20 pb-20">
        <h2 className='text-center pb-5 Rethink text-2xl font-bold'>Follow us on <span className='underline text-(--prim)'>instagram</span></h2>
     
     <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 ">

     <div className="gallery-item">
        <Image src={gallery1} alt="alt"/>
     </div>

     <div className="gallery-item">
        <Image src={gallery2} alt="alt"/>
     </div>

     <div className="gallery-item">
        <Image src={gallery3} alt="alt"/>
     </div>

     <div className="gallery-item">
        <Image src={gallery4} alt="alt"/>
     </div>

     <div className="gallery-item">
        <Image src={gallery5} alt="alt"/>
     </div>

     <div className="gallery-item">
        <Image src={gallery6} alt="alt"/>
     </div>

     </div>
     </div>
    </>
  )
}

export default Gallery