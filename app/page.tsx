"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  CheckCircle,
  FileText,
  Award,
  Globe,
  Calendar,
  Star,
  TrendingUp,
  Search,
  Download,
  Newspaper,
  Megaphone,
  CreditCard,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden relative">
        {/* Simple Background Pattern */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                <Award className="w-4 h-4 mr-2" />
                ISSN Journal Publisher Since 2011
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Excel Journal of
                <span className="block text-yellow-400">
                  Engineering Technology
                </span>
                <span className="block">& Management Science</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                A peer-reviewed, half-yearly publication dedicated to
                disseminating knowledge and information in Engineering and
                Management domains. Fostering innovation through academic
                excellence.
              </p>

              <div className="space-y-4">
                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/subscription"
                    className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <CreditCard size={20} />
                    Subscription
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/current-issue"
                    className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <BookOpen size={20} />
                    Explore Current Issue
                  </Link>
                </div>

                {/* Secondary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/call-for-papers"
                    className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                  >
                    <Megaphone size={16} />
                    Call for Papers
                  </Link>
                  <Link
                    href="/issues"
                    className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                  >
                    <Newspaper size={16} />
                    Issues
                  </Link>
                  <Link
                    href="/authors"
                    className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                  >
                    <Users size={16} />
                    Authors
                  </Link>
                </div>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Peer Reviewed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-300" />
                  <span>International Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  <span>Fast Publication</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <FileText className="w-8 h-8 text-yellow-400 mb-2" />
                      <p className="text-sm font-medium">Research Articles</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <Users className="w-8 h-8 text-blue-300 mb-2" />
                      <p className="text-sm font-medium">Expert Reviews</p>
                    </div>
                  </div>
                  <div className="relative aspect-video bg-gradient-to-br from-blue-400/60 to-yellow-400/50 rounded-xl flex items-center justify-center overflow-hidden">
                    {/* Background open book icon */}
                    {/* <BookOpen
                      size={200}
                      className="absolute text-white/10 -z-0"
                    /> */}

                    {/* Foreground images */}
                    <div className="relative z-10 flex items-center justify-center gap-6">
                      <img
                        src="/IIFC_logo.png"
                        alt="Image 1"
                        className="w-40 h-40 object-contain"
                      />
                      <img
                        src="/IJINDEX_LOGO1.png"
                        alt="Image 2"
                        className="w-64 h-64 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
                About Our Publication
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  The Excel Publishing House established in 2011 presently
                  publishes a journal in Engineering and Management Science.
                  This journal is entirely devoted to specific fields covering
                  various aspects of current development.
                </p>
                <p>
                  {" "}
                  With thrust on applications in science and technology such as
                  (Civil, Chemical, Mechanical, Electrical, Electronics,
                  Computer Science and Information Technology) and also the
                  field of Management Science like General Management, Finance,
                  Marketing, Human Resource and Production.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Publication</h3>
                  <p className="text-slate-600 text-sm">Half-yearly Issues</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <Award className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">ISSN</h3>
                  <p className="text-slate-600 text-sm">Registered Journal</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Impact</h3>
                  <p className="text-slate-600 text-sm">Global Reach</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <Search className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Indexing</h3>
                  <p className="text-slate-600 text-sm">Multiple Databases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Guidelines for Authors
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Essential guidelines to ensure your manuscript meets our
              publication standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FileText,
                title: "Manuscript Format",
                description:
                  "Maximum 7 pages (A4), single-spaced, Times New Roman font size 12",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Globe,
                title: "Language",
                description: "English language required for all submissions",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Users,
                title: "Author Details",
                description:
                  "Title followed by Name, e-mail, and affiliation(s) of Author(s)",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                icon: BookOpen,
                title: "Abstract",
                description: "Not more than 150 words summarizing key findings",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: CheckCircle,
                title: "Tables & Figures",
                description:
                  "Include near/after reference in text, not in separate files",
                color: "text-red-600",
                bgColor: "bg-red-50",
              },
              {
                icon: Award,
                title: "References",
                description:
                  "Complete references with necessary information at manuscript end",
                color: "text-teal-600",
                bgColor: "bg-teal-50",
              },
            ].map((guideline, index) => (
              <div
                key={index}
                className={`group p-6 ${guideline.bgColor} rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200`}
              >
                <guideline.icon
                  className={`w-10 h-10 ${guideline.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {guideline.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/author-guidelines"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 gap-2"
            >
              View Complete Guidelines <Download size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas Section - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We welcome research contributions across diverse engineering and
              management disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Areas */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-600" />
                Engineering Domains
              </h3>
              <div className="space-y-3">
                {[
                  "Computer Engineering",
                  "Mechanical Engineering",
                  "Electrical Engineering",
                  "Electronic Engineering",
                  "Civil Engineering",
                  "Chemical Engineering",
                  "Information Technology",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Areas */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Management Sciences
              </h3>
              <div className="space-y-3">
                {[
                  "Marketing Management",
                  "Finance & Accounting",
                  "Human Resource Management",
                  "Production & Operations",
                  "Logistics Management",
                  "Information Technology Management",
                  "General Management",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        {/* Simple Background Pattern */}
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
            Join the global community of researchers contributing to engineering
            and management science. Submit your scholarly work and contribute to
            advancing knowledge in your field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Submit Your Manuscript
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/reviewer-guidelines"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Become a Reviewer
            </Link>
          </div>

          <p className="text-sm text-slate-400">
            Contact us:{" "}
            <span className="text-white font-medium">
              editor@excelpublication.com
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
