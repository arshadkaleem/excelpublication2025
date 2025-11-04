"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { 
  Shield, 
  Users, 
  FileText, 
  AlertCircle, 
  Eye, 
  CheckCircle, 
  Globe, 
  Mail, 
  ChevronDown,
  Edit,
  Scale,
  UserCheck,
  Database,
  BookOpen,
  RefreshCw,
  Phone
} from "lucide-react"

export default function PublicationEthics() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const ethicsGuidelines = [
    {
      icon: Users,
      title: "Authorship and Contributorship",
      items: [
        "All listed authors should have made substantial contributions to the research. The corresponding author must ensure that all co-authors have reviewed and approved the manuscript.",
        "Any changes to the authorship list after submission require the consent of all authors."
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: FileText,
      title: "Originality and Plagiarism",
      items: [
        "Authors must ensure that their submissions are original work and have not been published or submitted elsewhere.",
        "Plagiarism, in any form, is strictly prohibited. Manuscripts suspected of plagiarism will be thoroughly investigated, and appropriate actions will be taken."
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Database,
      title: "Data Integrity and Fabrication",
      items: [
        "Authors should provide accurate and authentic data. Any manipulation, falsification, or fabrication of data is considered unethical and may lead to rejection or retraction.",
        "Authors are encouraged to retain raw data for a reasonable period after publication and be prepared to provide it upon request."
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: AlertCircle,
      title: "Conflicts of Interest",
      items: [
        "Authors, reviewers, and editors must disclose any potential conflicts of interest that could influence the objectivity of the research or review process.",
        "Conflicts of interest should be reported to the editorial office, and appropriate actions will be taken to address them."
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Eye,
      title: "Peer Review Process",
      items: [
        "The peer-review process is crucial for maintaining the quality of the journal. Reviewers are expected to provide objective, constructive, and timely feedback.",
        "Editors will manage the peer-review process impartially, ensuring fairness and confidentiality."
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: Scale,
      title: "Editorial Independence",
      items: [
        "Editorial decisions are based on the scientific merit of the manuscript, without any influence from external factors.",
        "Editors and editorial board members should disclose any conflicts of interest that could affect their objectivity."
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Edit,
      title: "Corrections and Retractions",
      items: [
        "Corrections to published articles will be issued for honest errors. Authors are encouraged to report any errors promptly.",
        "Retractions will be considered in cases of serious ethical misconduct, data fabrication, or significant errors that affect the validity of the research."
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Shield,
      title: "Copyright and Permissions",
      items: [
        "Authors are required to transfer copyright to the journal upon acceptance. Permissions for the use of copyrighted material must be obtained."
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: UserCheck,
      title: "Reviewer and Editorial Board Conduct",
      items: [
        "Reviewers and editorial board members must maintain confidentiality regarding submitted manuscripts.",
        "Any conflicts of interest that may compromise the objectivity of the review process should be disclosed promptly."
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: Globe,
      title: "Transparency and Open Access",
      items: [
        "The journal is committed to transparency in all processes. Information about the editorial board, peer review, and publication policies is accessible to the public.",
        "The journal supports open access principles, providing wider access to research findings."
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Phone,
      title: "Contact Information",
      items: [
        "For inquiries or to report ethical concerns, authors, reviewers, and readers can contact the editorial office."
      ],
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Ethical Standards
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Publication Ethics Guidelines
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our unwavering commitment to maintaining the highest ethical standards in academic publishing, 
              ensuring integrity, transparency, and excellence in all our processes.
            </p>
            
            {/* Key Principles */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Integrity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-300" />
                <span>Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-purple-300" />
                <span>Accountability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                  Our Commitment to Ethical Publishing
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Excel Publishing House is dedicated to upholding the highest standards of publication ethics. 
                  These guidelines ensure the integrity of the scholarly record and maintain trust in the 
                  research process among authors, reviewers, editors, and readers.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                    <Shield size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">Rigorous Standards</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                    <Eye size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Transparent Process</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
                    <Users size={16} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">Fair Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Guidelines Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Ethical Guidelines & Standards
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive guidelines covering all aspects of ethical publishing
            </p>
          </div>

          {/* Enhanced Accordion */}
          <div className="space-y-4">
            {ethicsGuidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              const isExpanded = expandedIndex === index;
              
              return (
                <div
                  key={index}
                  className={`${guideline.bgColor} border-2 ${guideline.borderColor} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}`}
                >
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className={`w-full px-8 py-6 flex items-center justify-between transition-all duration-300 ${isExpanded ? 'bg-white/50' : 'hover:bg-white/30'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon className={`w-6 h-6 ${guideline.color}`} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-800 text-left">
                        {guideline.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`${guideline.color} transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-8 pb-6 bg-white/70 border-t border-white/50">
                      <div className="pt-6 space-y-4">
                        {guideline.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${guideline.color.replace('text-', 'bg-')} mt-3 flex-shrink-0`}></div>
                            <p className="text-slate-700 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethics Committee Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Ethics Support & Reporting
            </h2>
            <p className="text-lg text-slate-600">
              We're here to help with any ethical concerns or questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Report Ethical Concerns
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                If you have concerns about ethical issues related to a published article or the submission process, 
                please contact our editorial office. All reports are treated confidentially.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Mail size={16} className="text-blue-600" />
                  <a href="mailto:editor@excelpublication.com" className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
                    editor@excelpublication.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertCircle size={16} className="text-blue-600" />
                  <span className="text-slate-700 text-sm">Confidential reporting available</span>
                </div>
              </div>
            </div>

            {/* Resources Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Ethics Resources
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Access additional resources and guidelines to help you understand and follow 
                best practices in research ethics and publication integrity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <FileText size={16} className="text-green-600" />
                  <span className="text-slate-700 font-medium">Author Guidelines</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Users size={16} className="text-green-600" />
                  <span className="text-slate-700 font-medium">Reviewer Guidelines</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Shield size={16} className="text-green-600" />
                  <span className="text-slate-700 font-medium">Ethics Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: "conic-gradient(from 45deg at 50% 50%, white 0deg, transparent 90deg, transparent 270deg, white 360deg)",
            backgroundSize: "100px 100px"
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Committed to Ethical Excellence
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join us in maintaining the highest standards of academic integrity and contributing to 
            trustworthy, impactful research in Engineering and Management Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:editor@excelpublication.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 gap-2"
            >
              <Mail size={20} />
              Contact Editorial Office
            </a>
            <a
              href="/author-guidelines"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 gap-2"
            >
              <FileText size={20} />
              View Guidelines
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// export default function PublicationEthics() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#001F3F] to-[#0074D9] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Publication Ethics Guidelines</h1>
//           <p className="text-xl text-gray-200">Our commitment to ethical publishing practices</p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-12">
//             {[
//               {
//                 title: "Authorship and Contribution",
//                 content:
//                   "All individuals who have made substantial contributions to the research should be listed as authors. The corresponding author should ensure that all co-authors have reviewed and approved the final manuscript. Authorship should be based on: (1) substantial contributions to conception or design, or acquisition, analysis, or interpretation of data; (2) drafting or critically revising the intellectual content; (3) final approval of the version to be published.",
//               },
//               {
//                 title: "Originality and Plagiarism",
//                 content:
//                   "Manuscripts submitted to Excel Publishing House must be original and not previously published in any form. Authors must ensure that their work does not infringe upon the intellectual property rights of others. All sources must be properly cited and acknowledged. We use plagiarism detection software to screen all submissions. Plagiarism in any form is unacceptable and will result in rejection.",
//               },
//               {
//                 title: "Conflict of Interest",
//                 content:
//                   "Authors must disclose any financial or personal relationships that could influence their work. This includes funding sources, employment, consultancies, stock ownership, or other financial interests. Reviewers and editors must also disclose conflicts of interest. We maintain strict confidentiality regarding disclosed conflicts and use this information only to make editorial decisions.",
//               },
//               {
//                 title: "Data Availability",
//                 content:
//                   "Authors are encouraged to make their research data available to support transparency and reproducibility. Data should be deposited in appropriate public repositories where possible. If data cannot be made publicly available due to privacy or ethical concerns, authors should provide a clear explanation. Raw data should be retained for at least five years after publication.",
//               },
//               {
//                 title: "Research Ethics",
//                 content:
//                   "All research involving human subjects must have received approval from an institutional review board or ethics committee. Research involving animals must comply with institutional and national guidelines for animal care and use. Authors must obtain informed consent from human subjects and ensure confidentiality and anonymity. Any potential harm to subjects must be minimized and justified.",
//               },
//               {
//                 title: "Peer Review Process",
//                 content:
//                   "Our peer review process is designed to ensure the quality and integrity of published research. Reviewers are selected based on their expertise and are asked to provide constructive feedback. The review process is confidential, and reviewer identities are protected. Authors have the right to respond to reviewer comments and provide revisions. We maintain records of the review process for quality assurance.",
//               },
//               {
//                 title: "Corrections and Retractions",
//                 content:
//                   "If errors are discovered in published articles, we will publish corrections or errata as appropriate. In cases of serious misconduct or fundamental flaws that undermine the validity of the research, we may retract the article. Retractions will be clearly marked and will include an explanation of the reason for retraction. Authors are responsible for notifying us of any errors discovered after publication.",
//               },
//               {
//                 title: "Editorial Independence",
//                 content:
//                   "Editorial decisions are made independently based on the quality and merit of the research. Editors are not influenced by commercial interests or political pressure. We maintain a clear separation between editorial and business functions. All editorial decisions are documented and can be reviewed if necessary. We are committed to transparency in our editorial processes.",
//               },
//             ].map((section, index) => (
//               <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
//                 <h2 className="text-2xl font-serif font-bold text-[#001F3F] mb-4">{section.title}</h2>
//                 <p className="text-gray-600 leading-relaxed">{section.content}</p>
//               </div>
//             ))}
//           </div>

//           {/* Contact Section */}
//           <div className="mt-16 p-8 bg-gradient-to-r from-[#0074D9]/10 to-[#4FC3F7]/10 rounded-xl border border-[#0074D9]/20">
//             <h3 className="text-2xl font-serif font-bold text-[#001F3F] mb-4">Questions About Ethics?</h3>
//             <p className="text-gray-600 mb-4">
//               If you have concerns about ethical issues related to a published article or the submission process, please
//               contact our ethics committee:
//             </p>
//             <p className="text-lg font-medium text-[#0074D9]">ethics@excelpublishing.com</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
