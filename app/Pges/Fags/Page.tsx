"use client"
import { useState } from "react"

const faqData = [
    {
        question: "ما هي نيفورا (Nivora)؟",
        answer: "نيفورا هي منصة متكاملة مصممة لمساعدة المستخدمين على إدارة وتحسين تجاربهم الرقمية وتطوير بيئة العمل الخاصة بهم."
    },
    {
        question: "كيف تعمل منصة نيفورا؟",
        answer: "تعمل نيفورا من خلال توفير مجموعة من الأدوات والخدمات الذكية التي تتيح للمستخدمين تبسيط سير عملهم الرقمي وزيادة الإنتاجية بشكل ملحوظ."
    },
    {
        question: "ما هي فوائد استخدام نيفورا؟",
        answer: "تشمل الفوائد تحسين الكفاءة، تنظيم أفضل للمهام، وزيادة الإنتاجية من خلال أتمتة العمليات الرقمية المعقدة وتسهيل الوصول للمعلومات."
    },
    {
        question: "هل تقدمون دعماً مخصصاً للمشاريع الكبيرة؟",
        answer: "نعم، نحن نوفر خططاً مخصصة ودعماً فنياً مباشراً للمؤسسات والمشاريع الكبيرة لضمان تحقيق أقصى استفادة من حلولنا الرقمية."
    },
]

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <div className='px-[8%] lg:px-[16%] py-20 pb-30' id='faqs' dir="rtl">
                <div className="text-center">
                    <span className='text-(--text-light) text-lg uppercase Rethink tracking-widest'>
                        هل تبحث عن إجابات؟
                    </span>
                    <h2 className="text-4xl lg:text-6xl text-white Rethink font-bold mt-5 leading-tight">
                        الأسئلة الشائعة
                    </h2>
                    <p className="mt-8 DmSans text-gray-300 max-w-2xl mx-auto text-lg">
                        اكتشف الإجابات على الأسئلة الأكثر شيوعاً حول نيفورا وكيف يمكننا مساعدتك في تطوير تجربتك الرقمية.
                    </p>
                </div>

                <div className="space-y-6 pt-15 w-full">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`overflow-hidden border-b border-gray-500 transition-all duration-300 ${openIndex === index ? 'pb-6 border-white/40' : 'pb-0'}`}
                        >
                            <button 
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center py-6 text-right focus:outline-none cursor-pointer group"
                            >
                                <span className={`text-xl md:text-2xl Rethink font-bold transition-colors duration-300 ${openIndex === index ? 'text-(--prim)' : 'text-white group-hover:text-gray-300'}`}>
                                    {item.question}
                                </span>
                                <i className={`bi bi-chevron-down text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-(--prim)' : 'text-white'}`}></i>
                            </button>
                            
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100 py-3": "max-h-0 opacity-0 py-0"}`}>
                                <p className="text-lg font-medium w-full lg:w-[85%] DmSans text-gray-400 leading-relaxed">
                                    {item.answer}
                                </p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faqs