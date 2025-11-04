// lib/contentful-types.ts
import { Document } from "@contentful/rich-text-types";
import { Asset, Entry, EntrySkeletonType } from "contentful";

// Author Content Type
export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: "author";
  fields: {
    name: string;
    desc: string;
    slug: string;
  };
}

export type AuthorEntry = Entry<AuthorSkeleton>;

// Blog Page Content Type
export interface BlogPageSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPage";
  fields: {
    title: string;
    body: Document; // Rich text
    image: Asset;
    recommendedPosts?: Entry<BlogPageSkeleton>[]; // References, many
  };
}

export type BlogPageEntry = Entry<BlogPageSkeleton>;

// Issues Content Type
export interface IssuesSkeleton extends EntrySkeletonType {
  contentTypeId: "issues";
  fields: {
    title?: string;
    orderBy?: number;
    volume?: string;
    volumn?: string; // Legacy field, keeping for backward compatibility
    monthYear?: string;
    date?: string;
    subtitle?: Document; // Rich text
    subTitle?: Document; // Legacy field name, keeping for backward compatibility
    slug?: string;
    currentIssue?: boolean;
  };
}

export type IssuesEntry = Entry<IssuesSkeleton>;

// Issue List Content Type
export interface IssueListSkeleton extends EntrySkeletonType {
  contentTypeId: "issueList";
  fields: {
    issueNo: number;
    title: string;
    orderBy: number;
    issue: IssuesEntry; // Reference to Issues
    author: AuthorEntry[]; // References, many
    pdf: Asset[]; // Media, many files
    slug: string;
  };
}

export type IssueListEntry = Entry<IssueListSkeleton>;

// Helper type for API responses
export interface ContentfulCollection<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}
