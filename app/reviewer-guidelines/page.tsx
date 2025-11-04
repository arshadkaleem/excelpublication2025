"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import {
  Eye,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  Globe,
  Mail,
  ChevronDown,
  Clock,
  Shield,
  UserCheck,
  BookOpen,
  Search,
  Target,
  MessageSquare,
  Award,
  Star,
} from "lucide-react";

export default function ReviewerGuidelines() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const reviewerGuidelines = [
    {
      icon: BookOpen,
      title: "Introduction",
      items: [
        "Thank you for agreeing to review manuscripts for Excel Journal of Engineering Technology and Management Science [EJETMS]. Your expertise is invaluable in maintaining the quality and standards of our journal.",
        "As a reviewer, you play a crucial role in the peer-review process, ensuring the validity, clarity, and significance of the research presented.",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Users,
      title: "Reviewer Responsibilities",
      items: [
        "Confidentiality: All manuscripts and associated information are confidential. Do not disclose, reproduce, or use any information from the manuscript.",
        "Objectivity: Provide constructive, unbiased, and fair feedback. Avoid personal comments or bias based on factors such as race, gender, religion, or institutional affiliation.",
        "Timeliness: Promptly respond to the invitation to review. Notify the editorial office if you are unable to complete the review within the specified timeframe.",
        "Conflict of Interest: Disclose any potential conflicts of interest that may compromise your ability to provide an impartial review.",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Search,
      title: "Manuscript Evaluation",
      items: [
        "Originality: Assess the originality and novelty of the research. Comment on whether the work contributes to the existing body of knowledge.",
        "Methodology: Evaluate the study design, methods, and statistical analysis. Comment on the validity and reliability of the results.",
        "Clarity and Structure: Evaluate the clarity of the manuscript, including organization, language, and presentation of results. Provide suggestions for improvement if necessary.",
        "Significance: Comment on the significance and relevance of the research to the field. Assess the potential impact of the findings.",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: FileText,
      title: "Review Report",
      items: [
        "Summary: Provide a concise summary of the manuscript, highlighting major strengths and weaknesses.",
        "Comments to Authors: Offer clear and constructive feedback to authors, specifying any required revisions or improvements.",
        "Confidential Comments to Editors: Include any confidential comments to the editors regarding ethical concerns, potential conflicts, or additional considerations.",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Shield,
      title: "Ethical Considerations",
      items: [
        "Report any potential ethical concerns such as plagiarism, data fabrication, or conflicts of interest to the editorial office.",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: Target,
      title: "Final Recommendation",
      items: [
        "Provide a clear recommendation regarding acceptance, revision, or rejection. Justify your recommendation based on your evaluation.",
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: Award,
      title: "Acknowledgment",
      items: [
        "Thank you for your commitment to maintaining the quality of [Journal Name]. Your efforts contribute significantly to the advancement of scholarly research.",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
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
              <Eye className="w-4 h-4 mr-2" />
              Peer Review Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Reviewer Guidelines
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for peer reviewers to ensure thorough,
              fair, and constructive evaluation of manuscripts submitted to
              Excel Journal of Engineering Technology and Management Science.
            </p>

            {/* Key Values */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-300" />
                <span>Objectivity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>Timeliness</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-purple-300" />
                <span>Integrity</span>
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
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                  Welcome to Our Reviewer Community
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Peer review is a cornerstone of academic publishing and
                  scholarly communication. We are deeply grateful to our
                  reviewers for their valuable contributions to maintaining the
                  highest quality standards of the Excel Journal of Engineering
                  Technology and Management Science (EJETMS).
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  These comprehensive guidelines are designed to help you
                  provide thorough, constructive, and professional feedback that
                  enhances the quality of published research and supports
                  authors in their scholarly endeavors.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                    <Shield size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Ethical Review
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                    <Eye size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">
                      Rigorous Evaluation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
                    <Clock size={16} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">
                      Timely Feedback
                    </span>
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
              Detailed Reviewer Guidelines
            </h2>
            <p className="text-lg text-slate-600">
              Essential guidelines for conducting thorough and professional peer
              reviews
            </p>
          </div>

          {/* Enhanced Accordion */}
          <div className="space-y-4">
            {reviewerGuidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`${guideline.bgColor} border-2 ${
                    guideline.borderColor
                  } rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    isExpanded ? "shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className={`w-full px-8 py-6 flex items-center justify-between transition-all duration-300 ${
                      isExpanded ? "bg-white/50" : "hover:bg-white/30"
                    }`}
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
                      className={`${
                        guideline.color
                      } transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-8 pb-6 bg-white/70 border-t border-white/50">
                      <div className="pt-6 space-y-4">
                        {guideline.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${guideline.color.replace(
                                "text-",
                                "bg-"
                              )} mt-3 flex-shrink-0`}
                            ></div>
                            <p className="text-slate-700 leading-relaxed">
                              {item}
                            </p>
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

      {/* Review Process Flow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Review Process Flow
            </h2>
            <p className="text-lg text-slate-600">
              Step-by-step guide through the peer review process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Invitation & Acceptance",
                description:
                  "Receive invitation, evaluate for conflicts of interest, and accept or decline within 48 hours",
                icon: Mail,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                step: "02",
                title: "Thorough Evaluation",
                description:
                  "Conduct comprehensive review assessing originality, methodology, clarity, and significance",
                icon: Search,
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                step: "03",
                title: "Report Submission",
                description:
                  "Submit detailed review report with clear recommendation and constructive feedback",
                icon: FileText,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`${step.bgColor} p-6 rounded-2xl text-center border border-slate-200 hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className={`text-3xl font-bold ${step.color} mb-2`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Reviewers Network Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Become a Reviewer Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Join Our Reviewer Network
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                We are always looking for qualified reviewers in Engineering
                Technology and Management Science. Join our network of expert
                reviewers and contribute to advancing scholarly research in your
                field.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <CheckCircle size={16} className="text-blue-600" />
                  <span className="text-slate-700 text-sm font-medium">
                    PhD or equivalent qualification required
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <CheckCircle size={16} className="text-blue-600" />
                  <span className="text-slate-700 text-sm font-medium">
                    Active research experience in your field
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <CheckCircle size={16} className="text-blue-600" />
                  <span className="text-slate-700 text-sm font-medium">
                    Commitment to ethical review practices
                  </span>
                </div>
              </div>
            </div>

            {/* Support & Resources Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Reviewer Support
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                We provide comprehensive support to our reviewers, including
                training resources, guidelines, and direct editorial assistance
                when needed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Mail size={16} className="text-green-600" />
                  <a
                    href="mailto:editor@excelpublication.com"
                    className="text-green-700 font-medium hover:text-green-800 transition-colors"
                  >
                    editor@excelpublication.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Clock size={16} className="text-green-600" />
                  <span className="text-slate-700 text-sm">
                    Typical review timeframe: 4-6 weeks
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Award size={16} className="text-green-600" />
                  <span className="text-slate-700 text-sm">
                    Recognition for outstanding reviewers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
            Excellence in Peer Review
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join our community of expert reviewers and play a vital role in
            maintaining the highest standards of academic publishing in
            Engineering Technology and Management Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:editor@excelpublication.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 gap-2"
            >
              <Mail size={20} />
              Join as Reviewer
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 gap-2"
            >
              <MessageSquare size={20} />
              Contact Editorial Team
            </a>
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

// export default function ReviewerGuidelines() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#001F3F] to-[#0074D9] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Reviewer Guidelines</h1>
//           <p className="text-xl text-gray-200">Guidelines for peer reviewers and the review process</p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="mb-12">
//             <p className="text-lg text-gray-600 leading-relaxed mb-8">
//               Peer review is a cornerstone of academic publishing. We are grateful to our reviewers for their valuable
//               contributions to maintaining the quality of our journals. These guidelines are designed to help reviewers
//               provide constructive and thorough feedback.
//             </p>
//           </div>

//           <div className="space-y-12">
//             {[
//               {
//                 title: "Reviewer Responsibilities",
//                 content:
//                   "Reviewers are responsible for providing a thorough, fair, and constructive evaluation of the manuscript. Reviews should be completed within the specified timeframe (typically 4-6 weeks). Reviewers should assess the originality, significance, methodology, and presentation of the research. Confidentiality must be maintained throughout the review process. Reviewers should not share the manuscript or their review with anyone without permission.",
//               },
//               {
//                 title: "Conflict of Interest",
//                 content:
//                   "Reviewers must disclose any conflicts of interest that could bias their evaluation. This includes financial interests, personal relationships, or professional competition with the authors. If a conflict exists, the reviewer should decline the invitation to review. Reviewers should not review manuscripts from their own institution or close collaborators. Conflicts of interest should be disclosed to the editor before accepting the review invitation.",
//               },
//               {
//                 title: "Review Criteria",
//                 content:
//                   "Reviewers should evaluate manuscripts based on: (1) Originality and novelty of the research; (2) Significance and impact of the findings; (3) Soundness of the methodology and research design; (4) Quality of the analysis and interpretation; (5) Clarity and organization of the presentation; (6) Appropriateness of the references; (7) Compliance with ethical standards. Reviewers should provide specific comments and suggestions for improvement.",
//               },
//               {
//                 title: "Constructive Feedback",
//                 content:
//                   "Reviews should be constructive and professional in tone. Avoid personal criticism or derogatory language. Focus on the quality of the research and the presentation. Provide specific examples and suggestions for improvement. Distinguish between major issues that require revision and minor issues that are suggestions. Explain the reasoning behind your recommendations. Be fair and objective in your assessment.",
//               },
//               {
//                 title: "Review Report Format",
//                 content:
//                   "The review report should include: (1) A summary of the manuscript and its main contributions; (2) Assessment of strengths and weaknesses; (3) Specific comments and suggestions for improvement; (4) A recommendation (Accept, Minor Revisions, Major Revisions, or Reject); (5) Justification for the recommendation. Reports should be clear, concise, and well-organized. Use the provided review form to structure your report.",
//               },
//               {
//                 title: "Confidentiality and Integrity",
//                 content:
//                   "Maintain strict confidentiality of the manuscript and the review process. Do not discuss the manuscript with colleagues or use the information for your own research. Do not contact the authors directly. Do not share the manuscript or your review with anyone without permission from the editor. Maintain the integrity of the peer review process by providing honest and unbiased feedback.",
//               },
//               {
//                 title: "Timeliness",
//                 content:
//                   "Complete your review within the specified timeframe. If you cannot meet the deadline, notify the editor as soon as possible. Timely reviews help ensure that the publication process moves forward efficiently. If you are unable to complete the review, inform the editor so they can assign the manuscript to another reviewer. Delays in the review process can impact the publication timeline.",
//               },
//               {
//                 title: "Becoming a Reviewer",
//                 content:
//                   "We are always looking for qualified reviewers in our areas of publication. If you are interested in becoming a reviewer for Excel Publishing House, please contact us with your CV and areas of expertise. Reviewers should have a PhD or equivalent qualification and active research experience in their field. We maintain a database of reviewers and invite them to review manuscripts based on their expertise and availability.",
//               },
//             ].map((section, index) => (
//               <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
//                 <h2 className="text-2xl font-serif font-bold text-[#001F3F] mb-4">{section.title}</h2>
//                 <p className="text-gray-600 leading-relaxed">{section.content}</p>
//               </div>
//             ))}
//           </div>

//           {/* Contact Section */}
//           <div className="mt-16 p-8 bg-gradient-to-r from-[#FFC107]/10 to-[#0074D9]/10 rounded-xl border border-[#FFC107]/20">
//             <h3 className="text-2xl font-serif font-bold text-[#001F3F] mb-4">Interested in Reviewing?</h3>
//             <p className="text-gray-600 mb-4">
//               We welcome qualified reviewers in all our areas of publication. If you would like to join our reviewer
//               network, please contact us:
//             </p>
//             <p className="text-lg font-medium text-[#0074D9]">reviewers@excelpublishing.com</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
