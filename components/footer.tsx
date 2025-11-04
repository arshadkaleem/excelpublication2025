import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  BookOpen,
  FileText,
  Award,
  Send,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#001F3F] via-[#0A2F5C] to-[#001F3F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section - Enhanced */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-40 h-8 flex items-center justify-center overflow-hidden">
                <img
                  src="/Excel-Logo.png"
                  alt="Excel Publishing Logo"
                  className="w-40 h-20 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Advancing knowledge in Engineering, Management Science, and
              Technology through peer-reviewed academic publications and
              research excellence.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Award className="w-4 h-4" />
              <span>ISSN Registered Journal</span>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-[#4FC3F7]/20 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-[#4FC3F7] rounded-full"></div>
              </div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/journals", label: "Current Issue" },
                { href: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group text-gray-300 hover:text-[#4FC3F7] transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#4FC3F7] group-hover:scale-150 transition-all duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidelines - Enhanced */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-[#4FC3F7]/20 rounded-lg flex items-center justify-center">
                <FileText className="w-3 h-3 text-[#4FC3F7]" />
              </div>
              Guidelines
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/author-guidelines", label: "Author Guidelines" },
                { href: "/publication-ethics", label: "Publication Ethics" },
                { href: "/reviewer-guidelines", label: "Reviewer Guidelines" },
                { href: "/submission", label: "Submit Manuscript" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group text-gray-300 hover:text-[#4FC3F7] transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#4FC3F7] group-hover:scale-150 transition-all duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Enhanced */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-[#4FC3F7]/20 rounded-lg flex items-center justify-center">
                <Mail className="w-3 h-3 text-[#4FC3F7]" />
              </div>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4FC3F7]/20 transition-colors duration-300">
                    <Mail size={14} className="text-[#4FC3F7]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:editor@excelpublication.com"
                      className="text-gray-300 hover:text-[#4FC3F7] transition-colors text-sm font-medium"
                    >
                      editor@excelpublication.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4FC3F7]/20 transition-colors duration-300">
                    <Phone size={14} className="text-[#4FC3F7]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:+919123456789"
                      className="text-gray-300 hover:text-[#4FC3F7] transition-colors text-sm font-medium"
                    >
                      +91 8446641608
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4FC3F7]/20 transition-colors duration-300">
                    <MapPin size={14} className="text-[#4FC3F7]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Address</p>
                    <span className="text-gray-300 text-sm">
                      Jaisingpura Near University Gate Aurangabad, Maharashtra,
                      India
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="font-serif font-bold text-xl text-white mb-3">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Subscribe to receive notifications about new issues and important
              updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-[#4FC3F7]/20 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#0074D9] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Send size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Social Links - Enhanced */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-400 text-sm">Follow us:</p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#4FC3F7] transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - Enhanced */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Excel Publishing House, Aurangabad. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <span>ISSN Journal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import Link from "next/link";
// import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-r from-[#001F3F] to-[#0A2F5C] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* About */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-40 h-8 flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/Excel-Logo.png"
//                   alt="Excel Publishing Logo"
//                   className="w-40 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Advancing knowledge in Engineering, Management Science, and
//               Technology since 2011.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/journals"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Journals
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Guidelines */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Guidelines</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/author-guidelines"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Author Guidelines
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/publication-ethics"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Publication Ethics
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/reviewer-guidelines"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   Reviewer Guidelines
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Contact</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2">
//                 <Mail size={16} className="mt-0.5 flex-shrink-0" />
//                 <a
//                   href="mailto:info@excelpublishing.com"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   info@excelpublishing.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Phone size={16} className="mt-0.5 flex-shrink-0" />
//                 <a
//                   href="tel:+1234567890"
//                   className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//                 >
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin size={16} className="mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-300">
//                   123 Publishing Ave, City, Country
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="border-t border-white/20 pt-8 mb-8">
//           <div className="flex justify-center gap-6">
//             <a
//               href="#"
//               className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-[#4FC3F7] transition-colors"
//             >
//               <Facebook size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-400">
//           <p>
//             &copy; {currentYear} Excel Publishing House. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
