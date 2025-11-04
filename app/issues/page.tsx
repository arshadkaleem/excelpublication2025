import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IssueCard } from "@/components/IssueCard";
import { getAllIssues, getCurrentIssue } from "@/services/issue.service";
import { IssuesEntry } from "@/lib/contentful-types";
import { BookOpen } from "lucide-react";

export default async function IssuesPage() {
  let currentIssue: IssuesEntry | null = null;
  let otherIssues: IssuesEntry[] = [];
  let error: string | null = null;

  try {
    // Fetch current issue and all issues in parallel
    const [current, allIssues] = await Promise.all([
      getCurrentIssue(),
      getAllIssues(),
    ]);

    currentIssue = current;

    // Filter out current issue from the list and sort in descending order
    const filtered: IssuesEntry[] = allIssues.filter(
      (issue) => issue.sys.id !== current?.sys.id
    );

    // Sort by date in descending order (newest first)
    otherIssues = filtered.sort((a, b) => {
      const aDate = a.fields?.date;
      const bDate = b.fields?.date;

      const dateA = aDate && typeof aDate === 'string'
        ? new Date(aDate).getTime()
        : 0;
      const dateB = bDate && typeof bDate === 'string'
        ? new Date(bDate).getTime()
        : 0;
      return dateB - dateA;
    });
  } catch (err) {
    console.error("Error fetching issues:", err);
    error = "Failed to load issues. Please try again later.";
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Journal Issues
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Browse all published issues of Excel Journal of Engineering
            Technology & Management Science. Access cutting-edge research and
            scholarly articles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Error State */}
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          ) : (
            <>
              {/* Current Issue Section */}
              {currentIssue && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded" />
                    <h2 className="text-3xl font-serif font-bold text-slate-800">
                      Current Issue
                    </h2>
                  </div>
                  <div className="max-w-4xl">
                    <IssueCard issue={currentIssue} isCurrent={true} />
                  </div>
                </div>
              )}

              {/* Past Issues Section */}
              {otherIssues.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
                    <h2 className="text-3xl font-serif font-bold text-slate-800">
                      Past Issues
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherIssues.map((issue) => (
                      <IssueCard key={issue.sys.id} issue={issue} />
                    ))}
                  </div>
                </div>
              )}

              {/* No Issues State */}
              {!currentIssue && otherIssues.length === 0 && (
                <div className="text-center py-20">
                  <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    No Issues Available
                  </h3>
                  <p className="text-slate-600">
                    Check back soon for new journal issues.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
