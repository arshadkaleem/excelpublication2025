"use client";

import type React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Globe,
  Building,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
      setSubmitStatus("success");
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Editorial Office",
      primary: "editor@excelpublication.com",
      secondary: "For manuscript submissions and editorial inquiries",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Phone,
      title: "Phone Support",
      primary: "+91 8446641608",
      secondary: "",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: MapPin,
      title: "Office Location",
      primary: "Jaisingpura Near University Gate,Aurangabad, Maharashtra",
      secondary: "India",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "manuscript", label: "Manuscript Submission" },
    { value: "review", label: "Peer Review" },
    { value: "subscription", label: "Subscription" },
  ];

  const faqs = [
    {
      category: "Submissions",
      questions: [
        {
          q: "How do I submit a manuscript to EJETMS?",
          a: "You can submit your manuscript by sending it to editor@excelpublication.com along with a cover letter and necessary documents as outlined in our Author Guidelines.",
        },
        // {
        //   q: "What is the typical review timeline?",
        //   a: "The peer review process typically takes 4-6 weeks from submission. You will receive regular updates on the status of your manuscript.",
        // },
      ],
    },
    {
      category: "Publication",
      questions: [
        {
          q: "What are the publication charges?",
          a: "Please contact our editorial office for detailed information about publication fees and any available discounts or waivers.",
        },
        // {
        //   q: "Can I withdraw my manuscript after submission?",
        //   a: "Yes, you can withdraw your manuscript at any time before final acceptance. Please contact the editorial office with your request.",
        // },
      ],
    },
    {
      category: "Subscription",
      questions: [
        {
          q: "How can I subscribe to the journal?",
          a: "Annual subscription is Rs. 2000/- for 2 issues. Contact us for subscription details and payment methods.",
        },
        // {
        //   q: "Do you offer institutional subscriptions?",
        //   a: "Yes, we offer special rates for institutional subscriptions. Please contact us for more information.",
        // },
      ],
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with our editorial team for manuscript submissions, peer
              review inquiries, subscriptions, or any questions about Excel
              Journal of Engineering Technology and Management Science.
            </p>

            {/* Quick Contact Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm mt-12">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-300" />
                <span>Dedicated editorial support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>Professional assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className={`${method.bgColor} border-2 ${method.borderColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                    {method.title}
                  </h3>
                  <p className={`font-bold ${method.color} text-center mb-2`}>
                    {method.primary}
                  </p>
                  <p className="text-slate-600 text-sm text-center">
                    {method.secondary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-800">
                      Send us a Message
                    </h2>
                    <p className="text-slate-600">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                          size={18}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                          size={18}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      placeholder="Please provide detailed information about your inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-medium">
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span className="text-red-800 font-medium">
                        Failed to send message. Please try again.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={` cursor-pointer w-full px-8 py-4 bg-blue-600  text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        {/* <Send size={20} /> */}
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800">
                    About Excel Publishing House
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Established in 2011, Excel Publishing House has been at the
                  forefront of academic publishing in Engineering Technology and
                  Management Science. We are committed to maintaining the
                  highest standards of scholarly communication.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span className="text-slate-700 text-sm">
                      ISSN Registered Journal
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span className="text-slate-700 text-sm">
                      Peer-Reviewed Publications
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span className="text-slate-700 text-sm">
                      International Indexing
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-800">
                    Response Times
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">General Inquiries</span>
                    <span className="font-bold text-green-700">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">
                      Manuscript Submissions
                    </span>
                    <span className="font-bold text-green-700">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">
                      Review Process Updates
                    </span>
                    <span className="font-bold text-green-700">Weekly</span>
                  </div>
                </div>
              </div> */}

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-800">
                    Global Reach
                  </h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Our publications reach researchers and academicians worldwide,
                  fostering international collaboration in engineering and
                  management research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Find quick answers to common questions about submissions, reviews,
              and publications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-bold text-slate-800 mb-3 text-sm">
                        {faq.q}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Can't find what you're looking for? Our editorial team is here
                to help with any specific questions about your manuscript or the
                publication process.
              </p>
              <a
                href="mailto:editor@excelpublication.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 gap-2"
              >
                <Mail size={18} />
                Contact Editorial Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// "use client"

// import type React from "react"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { useState } from "react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     setFormData({ name: "", email: "", subject: "", message: "" })
//     alert("Thank you for your message. We will get back to you soon!")
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#001F3F] to-[#0074D9] text-white">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-gray-200">Get in touch with our team</p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
//             {/* Contact Info */}
//             <div className="lg:col-span-1 space-y-8">
//               <div className="animate-fade-in-up">
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-12 h-12 bg-[#0074D9] rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-serif font-bold text-[#001F3F] mb-2">Email</h3>
//                     <a
//                       href="mailto:info@excelpublishing.com"
//                       className="text-gray-600 hover:text-[#0074D9] transition-colors"
//                     >
//                       info@excelpublishing.com
//                     </a>
//                     <p className="text-sm text-gray-500 mt-1">Submissions: submissions@excelpublishing.com</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-12 h-12 bg-[#4FC3F7] rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-serif font-bold text-[#001F3F] mb-2">Phone</h3>
//                     <a href="tel:+1234567890" className="text-gray-600 hover:text-[#0074D9] transition-colors">
//                       +1 (234) 567-890
//                     </a>
//                     <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9AM - 5PM</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-serif font-bold text-[#001F3F] mb-2">Address</h3>
//                     <p className="text-gray-600">
//                       123 Publishing Avenue
//                       <br />
//                       Academic City, AC 12345
//                       <br />
//                       Country
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <form onSubmit={handleSubmit} className="bg-[#F1F3F6] rounded-xl p-8 animate-scale-in">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm font-bold text-[#001F3F] mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0074D9] transition-all"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-bold text-[#001F3F] mb-2">Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0074D9] transition-all"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-sm font-bold text-[#001F3F] mb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0074D9] transition-all"
//                     placeholder="How can we help?"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-sm font-bold text-[#001F3F] mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0074D9] transition-all resize-none"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-gradient-to-r from-[#0074D9] to-[#001F3F] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* FAQ Section */}
//           <div className="mt-20">
//             <h2 className="text-4xl font-serif font-bold text-[#001F3F] mb-12 text-center">
//               Frequently Asked Questions
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   q: "How do I submit a manuscript?",
//                   a: "You can submit your manuscript through our online submission portal. Visit the Author Guidelines page for detailed instructions.",
//                 },
//                 {
//                   q: "What is the review timeline?",
//                   a: "The peer review process typically takes 8-12 weeks. You will receive updates on the status of your submission.",
//                 },
//                 {
//                   q: "Are there publication fees?",
//                   a: "Please contact us for information about publication fees and any available waivers or discounts.",
//                 },
//                 {
//                   q: "Can I withdraw my manuscript?",
//                   a: "Yes, you can withdraw your manuscript at any time before acceptance. Please contact the editorial office.",
//                 },
//               ].map((faq, index) => (
//                 <div key={index} className="p-6 bg-[#F1F3F6] rounded-lg hover:shadow-md transition-all duration-300">
//                   <h3 className="font-serif font-bold text-[#001F3F] mb-3">{faq.q}</h3>
//                   <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
