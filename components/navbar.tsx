"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  Users,
  Award,
  BookOpen,
  Phone, // ✅ Added
} from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: null },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/author-guidelines", label: "Author Guidelines", icon: FileText },
    { href: "/publication-ethics", label: "Publication Ethics", icon: Award },
    { href: "/reviewer-guidelines", label: "Reviewer Guidelines", icon: Users },
    { href: "/journals", label: "Journals", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: null },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/Excel-Logo.png"
                  alt="Excel Publications Logo"
                  width={160}
                  height={80}
                  className="w-52 h-auto object-contain transition-all duration-500 group-hover:brightness-110"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;

                // ✅ Special handling for "Contact" link
                if (link.label === "Contact") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1e40af] transition-all duration-300 group rounded-lg"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex items-center gap-2">
                        {/* ✅ Phone icon only on mobile */}
                        <Phone size={16} className="sm:hidden text-slate-700" />
                        {link.label}
                      </div>
                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] transition-all duration-300 transform -translate-x-1/2 ${
                          hoveredItem === index ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </Link>
                  );
                }

                // ✅ Default links
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1e40af] transition-all duration-300 group rounded-lg"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-center gap-2">
                      {Icon && <Icon size={16} className="opacity-70" />}
                      {link.label}
                    </div>
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] transition-all duration-300 transform -translate-x-1/2 ${
                        hoveredItem === index ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 relative group"
            >
              {isOpen ? (
                <X
                  size={24}
                  className="text-slate-700 transition-transform duration-300 rotate-0 group-hover:rotate-90"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-slate-700 transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </button>
          </div>

          {/* ✅ Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out ${
              isOpen ? "max-h-[80vh] pb-6" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/50 overflow-y-auto max-h-[70vh] px-1">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-[#1e40af] hover:bg-gradient-to-r hover:from-[#1e40af]/5 hover:to-transparent rounded-xl transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* ✅ Add Phone icon for Contact in mobile too */}
                    {link.label === "Contact" ? (
                      <Phone
                        size={18}
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      Icon && (
                        <Icon
                          size={18}
                          className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )
                    )}
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   FileText,
//   Users,
//   Award,
//   BookOpen,
// } from "lucide-react";
// import Image from "next/image";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     {
//       href: "/",
//       label: "Home",
//       icon: null,
//     },
//     {
//       href: "/about",
//       label: "About Us",
//       icon: Users,
//     },
//     {
//       href: "/author-guidelines",
//       label: "Author Guidelines",
//       icon: FileText,
//     },
//     {
//       href: "/publication-ethics",
//       label: "Publication Ethics",
//       icon: Award,
//     },
//     {
//       href: "/reviewer-guidelines",
//       label: "Reviewer Guidelines",
//       icon: Users,
//     },
//     {
//       href: "/journals",
//       label: "Journals",
//       icon: BookOpen,
//     },
//     {
//       href: "/contact",
//       label: "Contact",
//       icon: null,
//     },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
//           isScrolled
//             ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-slate-200/50"
//             : "bg-white/90 backdrop-blur-lg"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-24">
//             {/* Enhanced Logo */}
//             <Link href="/" className="flex items-center gap-3 group">
//               {/* Logo Image */}
//               <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
//                 <Image
//                   src="/Excel-Logo.png"
//                   alt="Excel Publications Logo"
//                   width={160}
//                   height={80}
//                   className="w-52 h-auto object-contain transition-all duration-500 group-hover:brightness-110"
//                   priority
//                 />

//                 {/* Optional subtle glow effect on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>

//               {/* Logo Text (optional, if not already part of image) */}
//               {/* <div className="flex flex-col">
//                 <span className="font-serif font-bold text-xl text-slate-800 hidden sm:inline leading-none">
//                   Excel Publishing
//                 </span>
//                 <span className="text-xs text-slate-500 hidden lg:inline font-medium tracking-wide">
//                   Engineering & Management Science
//                 </span>
//               </div> */}
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link, index) => {
//                 const Icon = link.icon;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1e40af] transition-all duration-300 group rounded-lg"
//                     onMouseEnter={() => setHoveredItem(index)}
//                     onMouseLeave={() => setHoveredItem(null)}
//                   >
//                     <div className="flex items-center gap-2">
//                       {Icon && <Icon size={16} className="opacity-70" />}
//                       {link.label}
//                     </div>
//                     <span
//                       className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] transition-all duration-300 transform -translate-x-1/2 ${
//                         hoveredItem === index ? "w-full" : "w-0"
//                       }`}
//                     ></span>
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-r from-[#1e40af]/5 to-[#3b82f6]/5 rounded-lg transition-all duration-300 ${
//                         hoveredItem === index ? "opacity-100" : "opacity-0"
//                       }`}
//                     ></div>
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Enhanced Submit Button */}
//             {/* <div className="hidden lg:block">
//               <Link
//                 href="/submit"
//                 className="group relative px-6 py-3 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   <FileText size={16} />
//                   Submit Manuscript
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </Link>
//             </div> */}

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 relative group"
//             >
//               <div className="relative">
//                 {isOpen ? (
//                   <X
//                     size={24}
//                     className="text-slate-700 transition-transform duration-300 rotate-0 group-hover:rotate-90"
//                   />
//                 ) : (
//                   <Menu
//                     size={24}
//                     className="text-slate-700 transition-transform duration-300 group-hover:scale-110"
//                   />
//                 )}
//               </div>
//             </button>
//           </div>

//           {/* Enhanced Mobile Navigation */}
//           <div
//             className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
//               isOpen ? "max-h-96 pb-6" : "max-h-0"
//             }`}
//           >
//             <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/50">
//               {navLinks.map((link) => {
//                 const Icon = link.icon;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-[#1e40af] hover:bg-gradient-to-r hover:from-[#1e40af]/5 hover:to-transparent rounded-xl transition-all duration-300 group"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {Icon && (
//                       <Icon
//                         size={18}
//                         className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
//                       />
//                     )}
//                     <span className="font-medium">{link.label}</span>
//                   </Link>
//                 );
//               })}
//               {/* <Link
//                 href="/submit"
//                 className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <FileText size={18} />
//                 Submit Manuscript
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// // "use client"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import { Menu, X } from "lucide-react"

// // export function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [isScrolled, setIsScrolled] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   const navLinks = [
// //     { href: "/", label: "Home" },
// //     { href: "/about", label: "About Us" },
// //     { href: "/author-guidelines", label: "Author Guidelines" },
// //     { href: "/publication-ethics", label: "Publication Ethics" },
// //     { href: "/reviewer-guidelines", label: "Reviewer Guidelines" },
// //     { href: "/journals", label: "Journals" },
// //     { href: "/contact", label: "Contact" },
// //   ]

// //   return (
// //     <nav
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //         isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200" : "bg-white/80 backdrop-blur-md"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center gap-2 group">
// //             <div className="w-10 h-10 bg-gradient-to-br from-[#0074D9] to-[#001F3F] rounded-lg flex items-center justify-center">
// //               <span className="text-white font-serif font-bold text-lg">E</span>
// //             </div>
// //             <span className="font-serif font-bold text-lg text-[#001F3F] hidden sm:inline">Excel</span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center gap-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.href}
// //                 href={link.href}
// //                 className="text-sm font-medium text-[#001F3F] hover:text-[#0074D9] transition-colors duration-200 relative group"
// //               >
// //                 {link.label}
// //                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0074D9] group-hover:w-full transition-all duration-300"></span>
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Submit Button */}
// //           <div className="hidden md:block">
// //             <Link
// //               href="/contact"
// //               className="px-6 py-2 bg-gradient-to-r from-[#0074D9] to-[#001F3F] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
// //             >
// //               Submit
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //           >
// //             {isOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden pb-4 animate-fade-in-up">
// //             <div className="flex flex-col gap-2">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.href}
// //                   href={link.href}
// //                   className="px-4 py-2 text-[#001F3F] hover:bg-[#F1F3F6] rounded-lg transition-colors"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ))}
// //               <Link
// //                 href="/contact"
// //                 className="px-4 py-2 bg-gradient-to-r from-[#0074D9] to-[#001F3F] text-white rounded-lg font-medium text-center"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Submit Manuscript
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   )
// // }
