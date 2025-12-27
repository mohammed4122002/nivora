"use client"
import { useState } from "react"
const faqData=[
    {
       question : "What is Nivora?",
       answer: "Nivora is a platform designed to help users manage and optimize their digital experiences." 

    },
    {
       question : "How does Nivora work?",
       answer: "Nivora works by providing tools and services that allow users to streamline their digital workflows and enhance productivity."
    },
    {
       question : "What are the benefits of using Nivora?",
       answer: "The benefits include improved efficiency, better organization, and enhanced productivity through streamlined digital workflows."
    },
    {
        question : "What are the benefits of using Nivora?",
        answer: "The benefits include improved efficiency, better organization, and enhanced productivity through streamlined digital workflows."
        },
]

const Faqs = () => {
    const [openIndex , setOpenIndex] =useState(null)
    const toggle = (index:any)=>{
        setOpenIndex(openIndex === index ? null : index)
    }
  return (
   <>
   <div className='px-[8%] lg:px-[16%] py-20 pb-30 ' id='faqs'>
    <div className="text-center">
        <span className='text-(--text-light) text-lg uppercase Rethink '>
            Looking for answers?
        </span>
        <h2 className="text-4xl lg:text-6xl text-white Rethink font-bold mt-5">
            Frequently asked questions
        </h2>
        <p className="mt-8 DmSans text-gray-300 ">
            Find answers to common questions about Nivora and how it can help you optimize your digital experience.
       </p>
    </div>
    <div className="space-y-6 pt-15 w-full">
        {faqData.map((item , index)=>(
    <div key={index} className={`overflow-hidden border-b border-gray-500 transition-all duration-300 ${openIndex === index ? 'pb-6' : 'pb-0'}`}>
        <button 
        onClick={()=>toggle(index)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
        >
            <span className="text-2xl Rethink font-bold text-white">{item.question}</span>
            <i className={`bi bi-chevron-down text-3xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
            
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-75 opacity-100 py-3": "max-h-0 opacity-0 py-0"}  `}>
           <p className="text-lg font-medium w-[70%] DmSans text-gray-300">{item.answer}</p> 
        </div>
        </div>
        ))}
    </div>
   </div>
   </>
  )
}

export default Faqs