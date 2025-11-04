import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllAuthors } from "@/services/author.service";
import { AuthorEntry } from "@/lib/contentful-types";
import Link from "next/link";
import {
  User,
  Mail,
  BookOpen,
  Award,
  Users,
} from "lucide-react";

export default async function AuthorsPage() {
  let authors: AuthorEntry[] = [];
  let error: string | null = null;

  try {
    authors = await getAllAuthors();
  } catch (err) {
    console.error("Error fetching authors:", err);
    error = "Failed to load authors. Please try again later.";
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <Users className="w-4 h-4 mr-2" />
              Our Contributors
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Meet Our
              <span className="block text-yellow-400">Distinguished Authors</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Discover the brilliant minds behind our peer-reviewed publications.
              Our authors are leading experts in engineering and management
              sciences from around the world.
            </p>

            <div className="flex flex-wrap gap-6 justify-center text-sm pt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Expert Researchers</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-300" />
                <span>Published Scholars</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Industry Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Error Loading Authors
              </h3>
              <p className="text-slate-600">{error}</p>
            </div>
          ) : authors.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                No Authors Found
              </h3>
              <p className="text-slate-600">
                Check back later for our list of contributing authors.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
                  All Authors
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Browse our collection of {authors.length} distinguished{" "}
                  {authors.length === 1 ? "author" : "authors"} who have
                  contributed to our journal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authors.map((author) => {
                  if (!author.fields) return null;

                  const name = String(author.fields.name || "Unknown Author");
                  const desc = String(author.fields.desc || "No description available.");
                  const slug = String(author.fields.slug || "");

                  const getInitials = (fullName: string): string => {
                    return fullName
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2) || "AU";
                  };

                  const initials = getInitials(name);

                  return (
                    <Link
                      key={author.sys.id}
                      href={`/authors/${slug}`}
                      className="group"
                    >
                      <div className="h-full bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        {/* Avatar */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {initials}
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                              <Award className="w-4 h-4 text-slate-800" />
                            </div>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="text-center space-y-3">
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {name}
                          </h3>

                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                            {desc}
                          </p>

                        {/* View Profile Button */}
                        <div className="pt-4">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <User className="w-4 h-4" />
                            View Profile
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Become a Published Author
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join our community of distinguished researchers and scholars. Submit
            your manuscript and contribute to advancing knowledge in engineering
            and management sciences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/author-guidelines"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <BookOpen size={20} />
              Author Guidelines
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Submit Manuscript
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
