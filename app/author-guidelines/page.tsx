"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
// Add these imports to your component file:
// Add these imports to your component file:
import {
  Send,
  FileText,
  Shield,
  Users,
  BarChart,
  Eye,
  Globe,
  Award,
  Search,
  Mail,
  CheckCircle,
  BookOpen,
  ChevronDown,
  AlertTriangle,
  HelpCircle,
  Clock,
  AlertCircle,
  Download,
  ArrowRight,
  Edit,
  FileCheck,
} from "lucide-react";

import Link from "next/link";

export default function AuthorGuidelines() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const guidelines = [
    {
      icon: Send,
      title: "Manuscript Submission",
      items: [
        "Authors are invited to submit their original research articles, reviews, and short communications through the online submission system.",
        "Manuscripts should be prepared according to the journal's formatting guidelines, available on the journal website.",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: FileText,
      title: "Manuscript Preparation",
      items: [
        "Manuscripts should be written in English and adhere to the journal's specific formatting and style guidelines.",
        "Authors should include a title page with the title, author names, affiliations, and corresponding author's contact information.",
        "Abstracts should be clear and concise, providing a summary of the study's objectives, methods, results, and conclusions.",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Shield,
      title: "Originality and Ethical Considerations",
      items: [
        "Authors must ensure that their submissions are original and have not been previously published or under consideration elsewhere.",
        "Manuscripts should adhere to ethical standards, and any potential conflicts of interest should be disclosed.",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Users,
      title: "Authorship and Acknowledgments",
      items: [
        "All authors should have made substantial contributions to the research. The corresponding author must ensure that all co-authors have reviewed and approved the manuscript.",
        "Acknowledgments should be included for funding sources, research grants, and contributions from individuals or organizations.",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: BookOpen,
      title: "References",
      items: [
        "Citations and references should follow a standard citation style (e.g., APA, MLA, Chicago) as specified in the journal guidelines.",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: BarChart,
      title: "Figures and Tables",
      items: [
        "Figures and tables should be clear, labeled, and submitted in an editable format. High-resolution images are encouraged.",
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: Eye,
      title: "Review and Publication Process",
      items: [
        "Submitted manuscripts will undergo a peer-review process. Authors can track the status of their submissions through the online system.",
        "Accepted manuscripts will be subject to a final review and editing process before publication.",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      icon: Globe,
      title: "Open Access Policy",
      items: [
        "Information regarding the journal's open access policy, fees, and licensing options should be provided.",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Award,
      title: "Copyright and Permissions",
      items: [
        "Authors are required to transfer copyright to the journal upon acceptance. Permissions for the use of copyrighted material must be obtained by the authors.",
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: Search,
      title: "Indexing and Abstracting",
      items: [
        "The journal is indexed in [list of databases], ensuring global visibility.",
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Mail,
      title: "Contact Information",
      items: [
        "For any inquiries or assistance, authors can contact the editorial office.",
      ],
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
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
              <FileText className="w-4 h-4 mr-2" />
              Publication Guidelines
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Author Guidelines
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guidelines for manuscript preparation and submission
              to ensure your research meets our publication standards and
              expedites the review process.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>7 Page Limit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-300" />
                <span>Times New Roman 12pt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>150 Word Abstract</span>
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
                  Welcome to Excel Publishing House
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  We welcome submissions from researchers and academics in the
                  fields of Engineering, Management Science, and Technology.
                  Please follow these guidelines carefully to ensure your
                  manuscript meets our standards and expedites the review
                  process.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Peer Reviewed
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">
                      ISSN Registered
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">
                      Fast Review
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
              Detailed Guidelines
            </h2>
            <p className="text-lg text-slate-600">
              Click on each section below to view detailed requirements
            </p>
          </div>

          {/* Enhanced Accordion */}
          <div className="space-y-4">
            {guidelines.map((guideline, index) => {
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
                        {guideline.items &&
                          guideline.items.map((item, idx) => (
                            <p
                              key={idx}
                              className="text-slate-700 leading-relaxed text-lg"
                            >
                              {item}
                            </p>
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

      {/* Submission Process Section */}
      {/* Submission Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Submission Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Complete guide to manuscript submission and publication process at
              Excel Journal of Engineering Technology and Management Science
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submission",
                items: [
                  "Authors submit their manuscripts through the online submission system provided by the journal.",
                  "Manuscripts should adhere to the journal's specific formatting and style guidelines.",
                ],
                icon: Send,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                step: "02",
                title: "Initial Review",
                items: [
                  "The editorial team conducts an initial review to check for adherence to submission guidelines, ethical standards, and overall suitability for the journal.",
                  "Manuscripts that do not meet the initial criteria are rejected at this stage.",
                ],
                icon: Search,
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                step: "03",
                title: "Peer Review",
                items: [
                  "Manuscripts passing the initial review undergo a peer-review process.",
                  "Experts in the field evaluate the manuscript for scientific validity, methodology, originality, and overall quality.",
                  "Authors may receive feedback and revision requests from reviewers.",
                ],
                icon: Users,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                step: "04",
                title: "Revision and Resubmission",
                items: [
                  "Authors revise their manuscripts based on reviewer feedback and make necessary improvements.",
                  "Revised manuscripts are resubmitted for further evaluation.",
                ],
                icon: Edit,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
              },
              {
                step: "05",
                title: "Editorial Decision",
                items: [
                  "The editor, considering reviewer recommendations, makes an editorial decision on whether to accept, reject, or request further revisions.",
                  "Decision categories may include acceptance, minor/major revision, or rejection.",
                ],
                icon: CheckCircle,
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-200",
              },
              {
                step: "06",
                title: "Final Review",
                items: [
                  "Accepted manuscripts undergo a final review for formatting, language, and adherence to journal style.",
                  "Authors may be required to address any remaining editorial concerns.",
                ],
                icon: Eye,
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
              },
              {
                step: "07",
                title: "Proofreading",
                items: [
                  "Authors receive proofs of their accepted manuscripts for final review and corrections.",
                  "This step ensures accuracy before publication.",
                ],
                icon: FileCheck,
                color: "text-pink-600",
                bgColor: "bg-pink-50",
                borderColor: "border-pink-200",
              },
              {
                step: "08",
                title: "Copyright Transfer",
                items: [
                  "Authors typically transfer copyright to the journal upon acceptance.",
                  "Any necessary permissions for copyrighted material must be obtained.",
                ],
                icon: Shield,
                color: "text-cyan-600",
                bgColor: "bg-cyan-50",
                borderColor: "border-cyan-200",
              },
              {
                step: "09",
                title: "Publication",
                items: [
                  "Accepted and finalized manuscripts are published in the journal.",
                  "Published articles may be accessible online and, if applicable, in print.",
                ],
                icon: BookOpen,
                color: "text-emerald-600",
                bgColor: "bg-emerald-50",
                borderColor: "border-emerald-200",
              },
            ].map((process, index) => {
              const Icon = process.icon;
              return (
                <div
                  key={index}
                  className={`${process.bgColor} border-2 ${process.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md`}
                  >
                    <span className={`text-lg font-bold ${process.color}`}>
                      {process.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className={`w-8 h-8 ${process.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {process.title}
                  </h3>

                  {/* Items */}
                  <div className="space-y-3">
                    {process.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${process.color.replace(
                            "text-",
                            "bg-"
                          )} mt-2 flex-shrink-0`}
                        ></div>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Timeline Visualization */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Publication Timeline
            </h3>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transform -translate-y-1/2 z-0"></div>

              {/* Timeline Steps */}
              {[
                { title: "Submission", time: "Day 0", color: "bg-blue-500" },
                {
                  title: "Initial Review",
                  time: "3-5 days",
                  color: "bg-green-500",
                },
                {
                  title: "Peer Review",
                  time: "4-6 weeks",
                  color: "bg-purple-500",
                },
                {
                  title: "Author Revision",
                  time: "2-4 weeks",
                  color: "bg-orange-500",
                },
                {
                  title: "Final Decision",
                  time: "1-2 weeks",
                  color: "bg-teal-500",
                },
                {
                  title: "Publication",
                  time: "2-4 weeks",
                  color: "bg-emerald-500",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                >
                  <div
                    className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white font-bold mb-3 shadow-lg`}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">
                    {phase.title}
                  </h4>
                  <p className="text-slate-600 text-xs">{phase.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 text-sm">
                <span className="font-medium">Total Timeline:</span> Typically
                10-16 weeks from submission to publication
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Important Notes
                </h3>
              </div>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-yellow-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    All manuscripts must follow our specific formatting
                    guidelines
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-yellow-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Peer review process ensures quality and academic rigor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-yellow-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Authors retain moral rights while transferring publication
                    rights
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Need Help?</h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                Our editorial team is here to assist you throughout the
                submission process.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-600" />
                  <a
                    href="mailto:editor@excelpublication.com"
                    className="text-blue-700 text-sm font-medium hover:text-blue-800 transition-colors"
                  >
                    editor@excelpublication.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-600" />
                  <span className="text-slate-600 text-sm">
                    Response within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Need Help?
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                If you have any questions about the submission process or
                guidelines, please contact our editorial team. We're here to
                help you through the process.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <Mail size={16} className="text-blue-600" />
                  <a
                    href="mailto:editor@excelpublication.com"
                    className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    editor@excelpublication.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <AlertCircle size={16} className="text-blue-600" />
                  <span className="text-slate-700 text-sm">
                    Response within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Subscription Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Subscription Info
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Subscribe to our journal to receive the latest research
                publications in Engineering and Management Science.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-slate-700 font-medium">
                    Annual Subscription
                  </span>
                  <span className="text-green-700 font-bold">Rs. 2000/-</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-slate-700 font-medium">
                    Issues per Year
                  </span>
                  <span className="text-green-700 font-bold">2 Issues</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-slate-700 font-medium">
                    Postage (Outstation)
                  </span>
                  <span className="text-green-700 font-bold">Rs. 500/-</span>
                </div>
              </div>
            </div>
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

// "use client";

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function AuthorGuidelines() {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

//   const guidelines = [
//     {
//       title: "Manuscript Format",
//       content:
//         "Manuscript should not exceed 7 Pages (A4 Size Pages, Typed Single Space, Font size 12, and Font type – Times New Roman). Language Used – English.",
//     },
//     {
//       title: "Title and Author Details",
//       content:
//         "Title of the paper should be followed by Name, e-mail and affiliation(s) of Author(s).",
//     },
//     {
//       title: "Tables and Figures",
//       content:
//         "To the extent possible, tables and figures should appear in the document near/after where they are referenced in the text. In no case should tables or figures be in separate document or file.",
//     },
//     {
//       title: "Abstract",
//       content:
//         "An abstract of not more than 150 words is required. The paper should start with an introduction and end with a conclusion summarizing the finding of the paper.",
//     },
//     {
//       title: "References",
//       content:
//         "It is the author's obligation to provide complete references with the necessary information. References should appear in the text as 'Amit and Khanna (2005) reported that ——' and the list of all the references must be placed at the end of the manuscript in the following style Example:- Dr Akther Anwar (2009), Finance Policy and Management Accounting, 7th Edition, Prentice Hall, India.",
//     },
//     {
//       title: "Publication Policy",
//       content:
//         "Papers are accepted for publication on the understanding that they contain original unpublished work, not submitted for publication anywhere else. Excel Publication House, Aurangabad will not be responsible for any statements or text mentioned in the articles by the authors. The sole responsibility about the contents of the paper will be on the author of the paper presented.",
//     },
//     {
//       title: "Review Process",
//       content:
//         "Papers are processed through a blind referral system by experts in the subject areas. To ensure anonymity, the writers name, designation and other details should not be repeated any where. Manuscripts, which do not confirm to these guidelines, will not be considered for publication.",
//     },
//     {
//       title: "Submission and Subscription",
//       content:
//         "The articles can be submitted online at our e-mail editor@excelpublication.com. The annual subscription for the Journal is Rs. 2000/- (2 Issues) and Rs. 500/- will be extra towards postage charges for outstation subscribers.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#001F3F] to-[#0074D9] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
//             Author Guidelines
//           </h1>
//           <p className="text-xl text-gray-200">
//             Comprehensive guidelines for manuscript preparation and submission
//           </p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="mb-12">
//             <p className="text-lg text-gray-600 leading-relaxed mb-8">
//               We welcome submissions from researchers and academics in the
//               fields of Engineering, Management Science, and Technology. Please
//               follow these guidelines carefully to ensure your manuscript meets
//               our standards and expedites the review process.
//             </p>
//           </div>

//           {/* Accordion */}
//           <div className="space-y-4">
//             {guidelines.map((guideline, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
//               >
//                 <button
//                   onClick={() =>
//                     setExpandedIndex(expandedIndex === index ? null : index)
//                   }
//                   className="w-full px-6 py-4 bg-[#F1F3F6] hover:bg-[#E8EAEF] flex items-center justify-between transition-colors"
//                 >
//                   <h3 className="text-lg font-serif font-bold text-[#001F3F] text-left">
//                     {guideline.title}
//                   </h3>
//                   <ChevronDown
//                     size={24}
//                     className={`text-[#0074D9] transition-transform duration-300 ${
//                       expandedIndex === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {expandedIndex === index && (
//                   <div className="px-6 py-4 bg-white border-t border-gray-200 animate-fade-in-up">
//                     <p className="text-gray-600 leading-relaxed">
//                       {guideline.content}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Additional Info */}
//           <div className="mt-16 p-8 bg-[#F1F3F6] rounded-xl border-l-4 border-[#0074D9]">
//             <h3 className="text-2xl font-serif font-bold text-[#001F3F] mb-4">
//               Need Help?
//             </h3>
//             <p className="text-gray-600 mb-4">
//               If you have any questions about the submission process or
//               guidelines, please contact our editorial team at:
//             </p>
//             <p className="text-lg font-medium text-[#0074D9]">
//               contact@excelpublication.com
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
