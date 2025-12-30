"use client";
import Image from "next/image";
import Link from "next/link";
import phoneCall from "@/public/phone-call.svg"
import { useEffect, useState } from "react";

type NavLink = {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "#about" },
    { label: "خبراتنا", href: "#expertise" },
    { label: "آراء العملاء", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faqs" },
    { label: "اتصل بنا", href: "#contact" },
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        // تم إضافة dir="rtl" وتغيير left-0 إلى right-0
        <div dir="rtl" className={`w-full transition-all py-5 duration-500 fixed top-0 right-0 z-50 ${isFixed ? "bg-black" : "bg-transparent"}`}>
            <div className={`w-full flex justify-between items-center transition-all duration-500 ${isFixed ? "px-[8%] lg:px-[16%]" : "px-[8%] lg:px-[5%]"}`}>
                
                {/* 1. الشعار (على اليمين في العربي) */}
                <Link href={"/"} className={`text-4xl lg:text-5xl font-bold Audiowide text-white`}>
                    Liv<span className="text-(--prim-dark)">ora</span>
                </Link>

                {/* 2. القائمة الرئيسية (في المنتصف) */}
                {/* تم استخدام gap-8 بدلاً من space-x لتجنب مشاكل الاتجاه */}
                <nav className="hidden lg:flex items-center gap-8 menu-link relative z-40">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.label} 
                            href={link.href} 
                            className="text-lg Rethink  text-gray-200 hover:text-(--prim-dark) transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* 3. الجزء الأيسر (رقم الهاتف والزر) */}
                <div className="flex items-center gap-5">
                    <Link href={"#"} className="hidden md:flex items-center gap-2 text-gray-200 group">
                        <Image src={phoneCall} alt="phone" width={20} height={20} className="invert" />
                        <span className="Rethink group-hover:text-white font-semibold">1234567890</span>
                    </Link>
                    
                    <Link 
                        href={"#contact"} 
                        className="Rethink font-semibold px-6 py-2 bg-white text-black hover:bg-(--prim) hover:text-white rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                        تواصل معنا
                    </Link>

                    {/* زر المنيو للجوال - يظهر فقط في الشاشات الصغيرة */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white text-3xl focus:outline-none"
                    >
                        <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </button>
                </div>
            </div>

            {/* قائمة الجوال */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-black/95 border-t border-gray-800 absolute w-full top-full left-0 transition-all duration-500">
                    <div className="flex flex-col p-5 space-y-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.href} 
                                className="text-xl text-gray-100 hover:text-(--prim) border-b border-gray-900 pb-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;