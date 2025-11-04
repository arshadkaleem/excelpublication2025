"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  BookOpen,
  Calendar,
  Award,
  Users,
  Globe,
  FileText,
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
  Search,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function Journals() {
  const currentJournal = {
    title: "Excel Journal of Engineering Technology and Management Science",
    shortTitle: "EJETMS",
    description:
      "A comprehensive peer-reviewed journal covering diverse aspects of Engineering Technology and Management Science, fostering innovation through academic excellence and research collaboration.",
    fields: {
      engineering: [
        "Civil Engineering",
        "Chemical Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Electronics Engineering",
        "Computer Science",
        "Information Technology",
      ],
      management: [
        "General Management",
        "Finance Management",
        "Marketing Management",
        "Human Resource Management",
        "Production Management",
      ],
    },
    frequency: "Half-yearly (2 Issues per year)",
    issn: "ISSN Registered",
    established: "2011",
    subscription: {
      annual: "Rs. 2000/-",
      postage: "Rs. 500/- (Outstation)",
    },
  };

  const latestIssues = [
    {
      volume: 13,
      issue: 2,
      year: 2024,
      title: "Engineering Innovations & Management Perspectives",
      articles: 8,
      pages: "45-98",
      coverTheme: "from-blue-600 to-purple-600",
    },
    {
      volume: 13,
      issue: 1,
      year: 2024,
      title: "Technology Advancement in Engineering Systems",
      articles: 10,
      pages: "1-44",
      coverTheme: "from-green-600 to-teal-600",
    },
    {
      volume: 12,
      issue: 2,
      year: 2023,
      title: "Management Science & Technological Integration",
      articles: 9,
      pages: "47-89",
      coverTheme: "from-orange-600 to-red-600",
    },
    {
      volume: 12,
      issue: 1,
      year: 2023,
      title: "Contemporary Research in Engineering & Management",
      articles: 7,
      pages: "1-46",
      coverTheme: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Enhanced Hero Section */}
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
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Peer-Reviewed Publications
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Our Academic Journals
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our flagship publication dedicated to advancing knowledge
              in Engineering Technology and Management Science through rigorous
              peer review and scholarly excellence.
            </p>

            {/* Publication Stats */}
            {/* <div className="flex flex-wrap justify-center gap-8 text-sm mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">13+</div>
                <div className="text-blue-200">Years Publishing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2</div>
                <div className="text-blue-200">Issues per Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-blue-200">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">Global</div>
                <div className="text-blue-200">Reach</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Journal Information */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
              {/* Main Content */}
              {/* <div className="lg:col-span-2 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-slate-800">
                      {currentJournal.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium">
                      {currentJournal.shortTitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {currentJournal.description}
                </p> */}

                {/* Research Areas */}
                {/* <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      Engineering & Technology
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentJournal.fields.engineering.map((field, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Management Science
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentJournal.fields.management.map((field, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-sm font-medium border border-green-200 hover:shadow-md transition-shadow"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Sidebar */}
              {/* <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-8 space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Journal Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600">
                        Publication Frequency
                      </p>
                      <p className="font-bold text-slate-800">
                        {currentJournal.frequency}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600">ISSN Status</p>
                      <p className="font-bold text-slate-800">
                        {currentJournal.issn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600">Established</p>
                      <p className="font-bold text-slate-800">
                        {currentJournal.established}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600">Indexing</p>
                      <p className="font-bold text-slate-800">
                        Multiple Databases
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Subscription Info */}
                {/* <div className="bg-white p-4 rounded-xl border border-slate-200 mt-6">
                  <h4 className="font-bold text-slate-800 mb-3">
                    Subscription
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Annual (2 Issues)</span>
                      <span className="font-bold text-slate-800">
                        {currentJournal.subscription.annual}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        Postage (Outstation)
                      </span>
                      <span className="font-bold text-slate-800">
                        {currentJournal.subscription.postage}
                      </span>
                    </div>
                  </div>
                </div> */}

                {/* Action Buttons */}
                {/* <div className="space-y-3 pt-4">
                  <Link
                    href="/author-guidelines"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FileText size={18} />
                    Submit Manuscript
                  </Link> */}
                  {/* <Link
                    href="/contact"
                    className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Subscribe Now
                  </Link> */}
                {/* </div>
              </div> */}
            {/* </div>
          </div>
        </div>
      </section> */}

      {/* Latest Issues */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Latest Issues
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our recent publications featuring cutting-edge research in
              Engineering Technology and Management Science
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {latestIssues.map((issue, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              > */}
                {/* Cover */}
                {/* <div
                  className={`aspect-[3/4] bg-gradient-to-br ${issue.coverTheme} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div>
                      <div className="text-xs font-medium opacity-80 mb-2">
                        EXCEL PUBLISHING HOUSE
                      </div>
                      <div className="text-sm font-bold">EJETMS</div>
                    </div>

                    <div className="text-center">
                      <BookOpen size={48} className="mx-auto mb-4 opacity-60" />
                      <div className="text-2xl font-bold">
                        Vol. {issue.volume}
                      </div>
                      <div className="text-lg">Issue {issue.issue}</div>
                      <div className="text-sm opacity-80">{issue.year}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs opacity-80">
                        Engineering Technology &
                      </div>
                      <div className="text-xs opacity-80">
                        Management Science
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Content */}
                {/* <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span>
                      Volume {issue.volume}, Issue {issue.issue}
                    </span>
                    <span>{issue.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {issue.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <span className="flex items-center gap-1">
                      <FileText size={14} />
                      {issue.articles} Articles
                    </span>
                    <span>Pages {issue.pages}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className=" cursor-pointer flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm flex items-center justify-center gap-1">
                      <Search size={14} />
                      View Issue
                    </button> */}
                    {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-1">
                      <Download size={14} />
                      PDF
                    </button> */}
                  {/* </div>
                </div> */}
              {/* </div>
            ))}
          </div> */}
        {/* </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Why Publish With Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join a community of researchers committed to excellence and
              innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Rigorous Peer Review",
                description:
                  "All submissions undergo thorough peer review by subject matter experts",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                icon: Globe,
                title: "Global Visibility",
                description:
                  "Indexed in multiple databases for maximum research impact and reach",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                icon: Zap,
                title: "Fast Publication",
                description:
                  "Efficient editorial process ensuring timely publication of quality research",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                icon: Users,
                title: "Expert Editorial Board",
                description:
                  "Guided by experienced editors and reviewers from prestigious institutions",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
              },
              {
                icon: Award,
                title: "ISSN Registered",
                description:
                  "Officially registered journal ensuring credibility and recognition",
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-200",
              },
              {
                icon: Target,
                title: "Open Access Options",
                description:
                  "Flexible publishing options to maximize your research accessibility",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-6 rounded-2xl border-2 ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Ready to Publish Your Research?
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join the global community of researchers publishing in Engineering
            Technology and Management Science. Submit your manuscript today and
            contribute to advancing knowledge in your field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/author-guidelines"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 gap-2"
            >
              <FileText size={20} />
              Submit Your Manuscript
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 gap-2"
            >
              <ExternalLink size={20} />
              Subscribe to Journal
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
// import { BookOpen, Calendar } from "lucide-react"

// export default function Journals() {
//   const journals = [
//     {
//       title: "Engineering & Technology Journal",
//       description:
//         "A comprehensive journal covering all aspects of engineering and technology research including civil, chemical, mechanical, electrical, electronics, and computer science.",
//       fields: [
//         "Civil Engineering",
//         "Chemical Engineering",
//         "Mechanical Engineering",
//         "Electrical Engineering",
//         "Electronics",
//         "Computer Science",
//         "IT",
//       ],
//       frequency: "Quarterly",
//       issn: "ISSN: 2023-XXXX",
//     },
//     {
//       title: "Management Science Review",
//       description:
//         "Dedicated to publishing research in management science, covering general management, finance, marketing, human resources, and production management.",
//       fields: ["General Management", "Finance", "Marketing", "Human Resource", "Production Management"],
//       frequency: "Quarterly",
//       issn: "ISSN: 2023-YYYY",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#001F3F] to-[#0074D9] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Journals</h1>
//           <p className="text-xl text-gray-200">
//             Explore our peer-reviewed journals in Engineering and Management Science
//           </p>
//         </div>
//       </section>

//       {/* Journals */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-12">
//             {journals.map((journal, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
//                   <div className="lg:col-span-2">
//                     <h2 className="text-3xl font-serif font-bold text-[#001F3F] mb-4">{journal.title}</h2>
//                     <p className="text-gray-600 leading-relaxed mb-6">{journal.description}</p>

//                     <div className="mb-6">
//                       <h3 className="font-serif font-bold text-[#001F3F] mb-3">Research Areas:</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {journal.fields.map((field, idx) => (
//                           <span
//                             key={idx}
//                             className="px-3 py-1 bg-[#F1F3F6] text-[#001F3F] rounded-full text-sm font-medium"
//                           >
//                             {field}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-[#F1F3F6] rounded-lg p-6 h-fit">
//                     <div className="space-y-4">
//                       <div className="flex items-start gap-3">
//                         <Calendar className="w-5 h-5 text-[#0074D9] mt-1 flex-shrink-0" />
//                         <div>
//                           <p className="text-sm text-gray-600">Publication Frequency</p>
//                           <p className="font-bold text-[#001F3F]">{journal.frequency}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-3">
//                         <BookOpen className="w-5 h-5 text-[#0074D9] mt-1 flex-shrink-0" />
//                         <div>
//                           <p className="text-sm text-gray-600">ISSN</p>
//                           <p className="font-bold text-[#001F3F]">{journal.issn}</p>
//                         </div>
//                       </div>
//                       <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-[#0074D9] to-[#001F3F] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300">
//                         Submit Manuscript
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Latest Issues */}
//           <div className="mt-20">
//             <h2 className="text-4xl font-serif font-bold text-[#001F3F] mb-12 text-center">Latest Issues</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[1, 2, 3, 4].map((issue) => (
//                 <div
//                   key={issue}
//                   className="bg-[#F1F3F6] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
//                 >
//                   <div className="aspect-square bg-gradient-to-br from-[#0074D9] to-[#001F3F] flex items-center justify-center">
//                     <BookOpen size={80} className="text-white/30" />
//                   </div>
//                   <div className="p-6">
//                     <p className="text-sm text-gray-600 mb-2">Volume 13, Issue {issue}</p>
//                     <h3 className="text-lg font-serif font-bold text-[#001F3F] mb-4">
//                       {issue % 2 === 0 ? "Engineering & Technology Journal" : "Management Science Review"}
//                     </h3>
//                     <button className="text-[#0074D9] font-bold hover:text-[#001F3F] transition-colors">
//                       View Issue →
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
