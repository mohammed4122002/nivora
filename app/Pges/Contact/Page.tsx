import React from 'react'

const Contact = () => {
  return (
  <>
   <div className='px-[8%] lg:px-[16%] py-20 pb-30 contact flex justify-center md:justify-end  ' id='contact'>
  <div className='bg-white w-110 p-10 rounded-md'>
    <h2 className='text-black text-5xl font-bold Rethink '>
        Have question? Get in Touch!
    </h2>
    <div className="space-y-5 pt-10">
        <div className='space-y-5'>
            <input type="text" placeholder='Name' className='border border-gray-500 w-full rounded-md px-4 py-3 focus:outline-none hover:border-(--prim) text-black font-medium ' />
            <input type="email" placeholder='Email' className='border border-gray-500 w-full rounded-md px-4 py-3 focus:outline-none hover:border-(--prim) text-black font-medium ' />
            <textarea placeholder='Your Message' className='border border-gray-500 w-full rounded-md px-4 py-3 focus:outline-none hover:border-(--prim) text-black font-medium ' rows={5} ></textarea>
            <button className='btn w-full bg-(--prim) text-white px-6 py-3 rounded-md font-medium hover:bg-(--prim-dark) transition-colors duration-300 cursor-pointer '>
                Send Message
            </button> 
        </div>
    </div>
  </div>

 </div>
  </>
  )
}

export default Contact