import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getCurrentIssue,
  getIssueListByIssueNo,
} from "@/services/issue.service";
import { IssuesEntry, IssueListEntry } from "@/lib/contentful-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BookOpen,
  Calendar,
  FileText,
  User,
  Download,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function CurrentIssuePage() {
  let issue: IssuesEntry | null = null;
  let articles: IssueListEntry[] = [];
  let error: string | null = null;

  try {
    // Fetch current issue first
    issue = await getCurrentIssue();

    if (!issue) {
      error = "No current issue found.";
    } else {
      // Get the orderBy value from the current issue
      const orderBy = issue.fields?.orderBy;

      if (orderBy && typeof orderBy === "number") {
        // Fetch articles by issueNo matching the orderBy
        articles = await getIssueListByIssueNo(orderBy);
      }
    }
  } catch (err) {
    console.error("Error fetching current issue:", err);
    error = "Failed to load current issue. Please try again later.";
  }

  if (!issue && !error) {
    redirect("/issues");
  }

  const { title, volumn, volume, monthYear, date, subtitle, orderBy } =
    issue?.fields || {};

  // Format date
  const formattedDate =
    date && typeof date === "string"
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })
      : monthYear || "Date not available";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Current Issue Badge - Prominent */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-full font-bold text-base mb-6 shadow-2xl animate-pulse">
            <Award className="w-5 h-5 mr-2" />
            Current Issue
            <Sparkles className="w-5 h-5 ml-2" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-yellow-400" />
            <div>
              <div className="text-blue-200 text-sm font-medium mb-1">
                {volumn || volume || "Volume N/A"}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                {title || "Untitled Issue"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-100 mb-6">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">{formattedDate}</span>
          </div>

          {/* Subtitle/Description */}
          {subtitle && (
            <div className="prose prose-invert prose-lg max-w-none mt-6">
              {documentToReactComponents(subtitle as any)}
            </div>
          )}
        </div>
      </section>

      {/* Main Content - Articles List */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-600 font-medium">{error}</p>
              <Link
                href="/issues"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Issues
              </Link>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                No Articles Available
              </h3>
              <p className="text-slate-600">
                This issue does not have any published articles yet.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded" />
                <h2 className="text-3xl font-serif font-bold text-slate-800">
                  Articles in this Issue
                </h2>
                <div className="ml-auto text-slate-600 font-medium">
                  {articles.length}{" "}
                  {articles.length === 1 ? "Article" : "Articles"}
                </div>
              </div>

              <div className="space-y-6">
                {articles.map((article) => {
                  const {
                    title: articleTitle,
                    author,
                    pdf,
                    slug: articleSlug,
                  } = article.fields || {};

                  // Get author names
                  const authorNames =
                    author && Array.isArray(author)
                      ? author
                          .map((a) => a.fields?.name)
                          .filter(Boolean)
                          .join(", ")
                      : "Unknown Author";

                  // Get PDF URL
                  const pdfUrl =
                    pdf && Array.isArray(pdf) && pdf[0]?.fields?.file?.url
                      ? `https:${pdf[0].fields.file.url}`
                      : null;

                  return (
                    <article
                      key={article.sys.id}
                      className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-yellow-400"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          {/* Article Title */}
                          <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
                            {articleTitle || "Untitled Article"}
                          </h3>

                          {/* Authors */}
                          <div className="flex items-center gap-2 text-slate-600 mb-4">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {authorNames}
                            </span>
                          </div>

                          {/* View Article Link */}
                          {articleSlug && (
                            <Link
                              href={`/articles/${articleSlug}`}
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                              <FileText className="w-4 h-4" />
                              View Article Details
                              <svg
                                className="w-4 h-4"
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
                          )}
                        </div>

                        {/* Download PDF Button */}
                        {pdfUrl && (
                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                          >
                            <Download className="w-5 h-5" />
                            Download PDF
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/issues"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              View All Issues
            </Link>

            {orderBy && (
              <Link
                href={`/issues/${orderBy}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                View Issue Archive
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
