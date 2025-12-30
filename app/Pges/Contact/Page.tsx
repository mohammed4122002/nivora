import React from 'react'

const Contact = () => {
  return (
    <>
      {/* تم تغيير md:justify-end إلى md:justify-start ليظهر النموذج على اليسار في التصميم العربي (RTL) */}
      <div 
        className='px-[8%] lg:px-[16%] py-20 pb-30 contact flex justify-center md:justify-start' 
        id='contact' 
        dir="rtl"
      >
        <div className='bg-white w-full max-w-lg p-10 rounded-md shadow-xl'>
          <h2 className='text-black text-4xl md:text-5xl font-bold Rethink leading-tight'>
            لديك سؤال؟ <br/> تواصل معنا الآن!
          </h2>
          
          <div className="space-y-5 pt-10">
            <form className='space-y-5'>
              <div>
                <input 
                  type="text" 
                  placeholder='الاسم الكامل' 
                  className='border border-gray-300 w-full rounded-md px-4 py-3 focus:outline-none focus:border-(--prim) hover:border-(--prim) text-black font-medium transition-all text-right' 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder='البريد الإلكتروني' 
                  className='border border-gray-300 w-full rounded-md px-4 py-3 focus:outline-none focus:border-(--prim) hover:border-(--prim) text-black font-medium transition-all text-right' 
                />
              </div>
              
              <div>
                <textarea 
                  placeholder='رسالتك هنا...' 
                  className='border border-gray-300 w-full rounded-md px-4 py-3 focus:outline-none focus:border-(--prim) hover:border-(--prim) text-black font-medium transition-all text-right' 
                  rows={5} 
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className='w-full bg-(--prim) text-white px-6 py-4 rounded-md font-bold text-lg hover:bg-black transition-all duration-300 cursor-pointer shadow-lg'
              >
                إرسال الرسالة
              </button> 
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact