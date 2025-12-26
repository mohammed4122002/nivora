"use client"
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <div className='px-[8%] lg:px-[5%] hero-header' id="home">
        <div className='hero-content w-full lg:w-1/2'>
        <h1 className='text-5xl md:text-7xl font-semibold '>Lorem ipsum dolor sit.</h1>
        <p className="my-5 w-full lg:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique quo magnam ad quibusdam illo in id asperiores perferendis et.</p>
       <button className='Rethink font-semibold px-8 py-4 text-xl bg-(--prim) mt-4 text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 cursor-pointer  '> Get Started</button>
        </div>
        <div className='md:absolute bottom-0 right-0 p-10 flex flex-col mt-10 md:mt-0 rounded-md bg-black  '>
            <h1 className='text-5xl mb-5 font-semibold '>About our studio</h1>
            <p className='w-full lg:w-[70%] text-(--text-light) '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus corrupti alias sint quisquam repellat doloremque earum et, autem sunt sit!</p>
             <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim)">
                        <CountUp start={0} end={73} duration={5}/>+
                    </h2>
                    <p className='text-(--text-light)'>Finished projects</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim)">
                        <CountUp start={0} end={504} duration={5}/>+
                    </h2>
                    <p className='text-(--text-light)'>Finished projects</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl Rethink font-bold text-(--prim)">
                        <CountUp start={0} end={5} duration={5}/>k
                    </h2>
                    <p className='text-(--text-light)'>Finished projects</p>
                </div>
             </div>
      
        </div>
    </div>
  )
}

export default Hero