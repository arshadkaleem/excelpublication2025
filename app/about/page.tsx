"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  Award,
  Users,
  Globe,
  BookOpen,
  ArrowRight,
  Building,
  Calendar,
  Target,
  Eye,
  CheckCircle,
  FileText,
  Zap,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
              <Building className="w-4 h-4 mr-2" />
              Established in 2011
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              About Excel Publishing House
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A leading academic publisher dedicated to advancing knowledge in
              Engineering and Management Science through high-quality,
              peer-reviewed publications since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Based on Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  Our Story
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    The Excel Publishing House established in 2011 presently
                    publishes a journal in Engineering and Management Science.
                    This journal is entirely devoted to specific fields covering
                    various aspects of current development with thrust on
                    applications in science and technology such as (Civil,
                    Chemical, Mechanical, Electrical, Electronics, Computer
                    Science and Information Technology) and also the field of
                    Management Science like General Management, Finance,
                    Marketing, Human Resource and Production.
                  </p>
                  <p>
                    With well qualified editor associated with the publication,
                    it is also a platform for the author to publish their work
                    in book and also the colleges and university department to
                    publish their conference and seminar proceeding.
                  </p>
                  <p>
                    Our journals and books would be an asset to any
                    institution's science-engineering library. The quality of
                    the people who freely give their time and effort to the
                    journals and books, as editors, editorial board members and
                    contributors, bears witness to the high esteem the journals
                    and books are held in, in some circles. Of course, all
                    content is fully refereed. The journals and books are
                    well-established, properly organised and meet researcher's
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Indexing Logos */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 sticky top-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Indexed In
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl">
                    <img
                      src="/IIFC_logo.png"
                      alt="IIFC Index"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl">
                    <img
                      src="/IJINDEX_LOGO1.png"
                      alt="IJIndex"
                      className="w-40 h-32 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-slate-600 text-center">
                    Our publications are indexed in multiple prestigious
                    databases for global visibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Our Publication Areas
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We cover diverse fields in Engineering and Management Science to
              support comprehensive research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Areas */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Engineering & Technology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Civil Engineering",
                  "Chemical Engineering",
                  "Mechanical Engineering",
                  "Electrical Engineering",
                  "Electronics Engineering",
                  "Computer Science",
                  "Information Technology",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-slate-700 text-sm">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Areas */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                Management Science
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "General Management",
                  "Finance Management",
                  "Marketing Management",
                  "Human Resource Management",
                  "Production Management",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-slate-700 text-sm">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive publishing solutions for researchers, institutions,
              and academic communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Journal Publications",
                description:
                  "Peer-reviewed academic journals in Engineering and Management Science with rigorous editorial standards.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                icon: BookOpen,
                title: "Book Publishing",
                description:
                  "Platform for authors to publish their research work in book format with professional editing and design.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                icon: Users,
                title: "Conference Proceedings",
                description:
                  "Publication services for colleges and university departments to publish their conference and seminar proceedings.",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} p-8 rounded-2xl shadow-lg border ${service.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Quality & Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Maintaining excellence through rigorous processes and qualified
              editorial oversight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Qualified Editors",
                description:
                  "Well qualified editors associated with our publications ensure high academic standards.",
              },
              {
                icon: CheckCircle,
                title: "Full Peer Review",
                description:
                  "All content is fully refereed through rigorous peer review processes.",
              },
              {
                icon: Target,
                title: "Well-Established",
                description:
                  "Our journals are well-established, properly organised to meet researcher's needs.",
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description:
                  "High esteem journals held by academic and research communities worldwide.",
              },
            ].map((quality, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <quality.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {quality.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "conic-gradient(from 45deg at 50% 50%, white 0deg, transparent 90deg, transparent 270deg, white 360deg)",
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Become Part of Our Academic Community
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Whether you're a researcher, author, or institution, we invite you
            to contribute to advancing knowledge in Engineering and Management
            Science through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Submit Your Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/journals"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explore Our Publications
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import Link from "next/link"
// import { Award, Users, Globe, BookOpen, ArrowRight } from "lucide-react"

// export default function About() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001F3F] via-[#0074D9] to-[#001F3F] text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center animate-fade-in-up">
//             <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">About Excel Publishing</h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//               Advancing knowledge and fostering innovation in academic research since 2011. We are committed to
//               publishing high-quality, peer-reviewed journals that drive progress in Engineering, Management Science,
//               and Technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Mission */}
//             <div className="animate-fade-in-up">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-[#0074D9] rounded-lg flex items-center justify-center">
//                   <Globe size={24} className="text-white" />
//                 </div>
//                 <h2 className="text-3xl font-serif font-bold text-[#001F3F]">Our Mission</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 To provide a trusted platform for researchers and academics to publish groundbreaking research that
//                 advances knowledge in Engineering, Management Science, and Technology. We are dedicated to maintaining
//                 the highest standards of academic integrity and peer review.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Our mission is to bridge the gap between research and practice, ensuring that valuable insights reach
//                 the academic community and industry professionals who can benefit from them.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-[#4FC3F7] rounded-lg flex items-center justify-center">
//                   <BookOpen size={24} className="text-[#001F3F]" />
//                 </div>
//                 <h2 className="text-3xl font-serif font-bold text-[#001F3F]">Our Vision</h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 To become a globally recognized publisher of choice for academic researchers, known for our commitment
//                 to excellence, innovation, and accessibility. We envision a world where quality research is easily
//                 accessible to all who seek knowledge.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 We strive to foster a community of scholars and practitioners who collaborate to solve real-world
//                 challenges and drive technological and organizational advancement.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* History Timeline */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F1F3F6]">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001F3F] mb-12 text-center">Our Journey</h2>

//           <div className="space-y-8">
//             {[
//               {
//                 year: "2011",
//                 title: "Founded",
//                 description:
//                   "Excel Publishing House was established with a vision to publish quality academic journals.",
//               },
//               {
//                 year: "2013",
//                 title: "First Journal Launch",
//                 description: "Launched our flagship journal focusing on Engineering and Technology research.",
//               },
//               {
//                 year: "2016",
//                 title: "Expansion",
//                 description: "Expanded our portfolio to include Management Science and Business journals.",
//               },
//               {
//                 year: "2019",
//                 title: "Digital Transformation",
//                 description:
//                   "Implemented advanced digital publishing platform for seamless manuscript submission and review.",
//               },
//               {
//                 year: "2022",
//                 title: "Global Recognition",
//                 description: "Achieved international recognition for publishing standards and peer review excellence.",
//               },
//               {
//                 year: "2024",
//                 title: "Innovation Hub",
//                 description:
//                   "Launched innovation initiatives to support emerging research areas and early-career researchers.",
//               },
//             ].map((milestone, index) => (
//               <div key={index} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 bg-[#0074D9] rounded-full flex items-center justify-center text-white font-bold">
//                     {index + 1}
//                   </div>
//                   {index < 5 && <div className="w-1 h-16 bg-[#0074D9] mt-2"></div>}
//                 </div>
//                 <div className="pb-8">
//                   <p className="text-sm font-bold text-[#0074D9] mb-1">{milestone.year}</p>
//                   <h3 className="text-xl font-serif font-bold text-[#001F3F] mb-2">{milestone.title}</h3>
//                   <p className="text-gray-600">{milestone.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001F3F] mb-12 text-center">
//             Our Core Values
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: Award,
//                 title: "Excellence",
//                 description: "We maintain the highest standards in academic publishing and peer review.",
//               },
//               {
//                 icon: Users,
//                 title: "Integrity",
//                 description: "We uphold ethical standards and transparency in all our operations.",
//               },
//               {
//                 icon: Globe,
//                 title: "Accessibility",
//                 description: "We make quality research accessible to the global academic community.",
//               },
//               {
//                 icon: BookOpen,
//                 title: "Innovation",
//                 description: "We embrace new technologies and methodologies to advance publishing.",
//               },
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-[#F1F3F6] rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <value.icon className="w-10 h-10 text-[#0074D9] mb-4" />
//                 <h3 className="text-lg font-serif font-bold text-[#001F3F] mb-2">{value.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0074D9] to-[#001F3F] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">By The Numbers</h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { number: "13+", label: "Years of Excellence" },
//               { number: "50+", label: "Published Journals" },
//               { number: "10,000+", label: "Published Articles" },
//               { number: "100+", label: "Countries Represented" },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <p className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</p>
//                 <p className="text-lg text-gray-200">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001F3F] mb-6">Join Our Community</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Whether you are a researcher, reviewer, or industry professional, we invite you to be part of our mission to
//             advance knowledge and innovation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="px-8 py-3 bg-[#0074D9] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//             >
//               Submit Your Research <ArrowRight size={20} />
//             </Link>
//             <Link
//               href="/journals"
//               className="px-8 py-3 border-2 border-[#0074D9] text-[#0074D9] rounded-lg font-bold hover:bg-[#0074D9]/5 transition-all duration-300"
//             >
//               Explore Our Journals
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
