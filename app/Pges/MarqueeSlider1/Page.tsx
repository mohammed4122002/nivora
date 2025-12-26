import Image from "next/image"
import starShape from "@/public/star-shapp.png"
const MarqueeSldier1 = () => {
  return (
    <div className='marquee bg-white py-6 overflow-hidden'>
        <div className="marquee_text flex items-center gap-10">
            <MarqueeItem text="Home built for life 1" />
             <MarqueeItem text="Home built for life 2" />
              <MarqueeItem text="Home built for life 3" />
               <MarqueeItem text="Home built for life 4" />

            <MarqueeItem text="Home built for life 1" />
             <MarqueeItem text="Home built for life 2" />
              <MarqueeItem text="Home built for life 3" />
               <MarqueeItem text="Home built for life 4" />
        </div>
    </div>
  )
}

export default MarqueeSldier1

function MarqueeItem({text}:{text:string}){
    return(
     <div className="flex items-center gap-8 whitespace-nowrap">
        <h2 className="marquee-text text-5xl font-bold">{text}</h2>
        <Image src={starShape} alt="starShape" width={40} height={40} />
     </div>   
    )
}