"use client";

import Link from "next/link";
import { Calendar, BookOpen, Award } from "lucide-react";
import { IssuesEntry } from "@/lib/contentful-types";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface IssueCardProps {
  issue: IssuesEntry;
  isCurrent?: boolean;
}

export function IssueCard({ issue, isCurrent = false }: IssueCardProps) {
  const fields = issue.fields || {};

  // Safely extract and type fields
  const title = (fields.title || "Untitled Issue") as string;
  const volume = (fields.volumn || fields.volume || "Volume N/A") as string;
  const monthYear = fields.monthYear as string | undefined;
  const date = fields.date as string | undefined;
  const subtitle = fields.subtitle;
  const orderBy = fields.orderBy;
  const slug = orderBy ? String(orderBy) : undefined;

  // Convert subtitle rich text to plain text for preview
  let subtitleText = "Explore the latest research articles in Engineering and Management Science.";
  if (
    subtitle &&
    typeof subtitle === "object" &&
    subtitle !== null &&
    "nodeType" in subtitle &&
    "content" in subtitle
  ) {
    try {
      subtitleText = documentToPlainTextString(subtitle as any);
    } catch (error) {
      console.error("Error converting subtitle to plain text:", error);
    }
  }

  // Format date
  const formattedDate: string = date && typeof date === 'string'
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : (monthYear || "Date not available");

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-lg border transition-all duration-300 hover:shadow-2xl overflow-hidden ${
        isCurrent
          ? "border-yellow-400 ring-2 ring-yellow-400/50"
          : "border-slate-200 hover:border-blue-400"
      }`}
    >
      {/* Current Issue Badge */}
      {isCurrent && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 text-slate-800 px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center gap-1 shadow-lg">
            <Award className="w-4 h-4" />
            Current Issue
          </div>
        </div>
      )}

      {/* Gradient Background Accent */}
      <div
        className={`absolute top-0 left-0 w-full h-2 ${
          isCurrent
            ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
            : "bg-gradient-to-r from-blue-600 to-blue-400"
        }`}
      />

      <div className="p-8 pt-10">
        {/* Volume Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
          <BookOpen className="w-3.5 h-3.5 mr-1.5" />
          {volume}
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-serif font-bold mb-3 transition-colors ${
            isCurrent
              ? "text-slate-800"
              : "text-slate-800 group-hover:text-blue-600"
          }`}
        >
          {title}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{formattedDate}</span>
        </div>

        {/* Subtitle/Description */}
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {subtitleText}
        </p>

        {/* View Issue Button */}
        <Link
          href={slug ? `/issues/${slug}` : "#"}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isCurrent
              ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 hover:shadow-lg hover:scale-105"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
          }`}
        >
          View Issue
          <BookOpen className="w-4 h-4" />
        </Link>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className={`h-1 w-0 transition-all duration-300 ${
          isCurrent
            ? "bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full"
            : "bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full"
        }`}
      />
    </div>
  );
}
