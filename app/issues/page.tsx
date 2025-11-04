"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
            Journal Issues
          </h1>
          <p className="text-lg text-slate-600">
            Browse all published issues of our journal.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
