import { contentfulClient } from "@/lib/contentful";
import { IssuesEntry, IssuesSkeleton, IssueListEntry, IssueListSkeleton } from "@/lib/contentful-types";

// Get all issues
export async function getAllIssues(): Promise<IssuesEntry[]> {
  try {
    const response = await contentfulClient.getEntries<IssuesSkeleton>({
      content_type: "issues",
      order: ["fields.orderBy"],
    } as any);

    return response.items as IssuesEntry[];
  } catch (error) {
    console.error("Error fetching issues:", error);
    throw error;
  }
}

// Get current issue
export async function getCurrentIssue(): Promise<IssuesEntry | null> {
  try {
    const response = await contentfulClient.getEntries<IssuesSkeleton>({
      content_type: "issues",
      "fields.currentIssue": true,
      limit: 1,
    } as any);

    return (response.items[0] as IssuesEntry) || null;
  } catch (error) {
    console.error("Error fetching current issue:", error);
    return null;
  }
}

// Get all issue list items
export async function getAllIssueListItems(): Promise<IssueListEntry[]> {
  try {
    const response = await contentfulClient.getEntries<IssueListSkeleton>({
      content_type: "issueList",
      order: ["fields.orderBy"],
      include: 2, // Include referenced entries (issue, authors)
    } as any);

    return response.items as IssueListEntry[];
  } catch (error) {
    console.error("Error fetching issue list items:", error);
    throw error;
  }
}

// Get issue list item by slug
export async function getIssueListBySlug(
  slug: string
): Promise<IssueListEntry | null> {
  try {
    const response = await contentfulClient.getEntries<IssueListSkeleton>({
      content_type: "issueList",
      "fields.slug": slug,
      include: 3, // Include nested references
      limit: 1,
    } as any);

    return (response.items[0] as IssueListEntry) || null;
  } catch (error) {
    console.error("Error fetching issue list by slug:", error);
    return null;
  }
}

// Get issue list items by issue ID
export async function getIssueListByIssueId(
  issueId: string
): Promise<IssueListEntry[]> {
  try {
    const response = await contentfulClient.getEntries<IssueListSkeleton>({
      content_type: "issueList",
      "fields.issue.sys.id": issueId,
      order: ["fields.orderBy"],
      include: 2,
    } as any);

    return response.items as IssueListEntry[];
  } catch (error) {
    console.error("Error fetching issue list by issue ID:", error);
    return [];
  }
}

// Get issue by orderBy field
export async function getIssueByOrderBy(
  orderBy: number
): Promise<IssuesEntry | null> {
  try {
    const response = await contentfulClient.getEntries<IssuesSkeleton>({
      content_type: "issues",
      "fields.orderBy": orderBy,
      limit: 1,
    } as any);

    return (response.items[0] as IssuesEntry) || null;
  } catch (error) {
    console.error("Error fetching issue by orderBy:", error);
    return null;
  }
}

// Get issue list items by issueNo field
export async function getIssueListByIssueNo(
  issueNo: number
): Promise<IssueListEntry[]> {
  try {
    const response = await contentfulClient.getEntries<IssueListSkeleton>({
      content_type: "issueList",
      "fields.issueNo": issueNo,
      order: ["fields.orderBy"],
      include: 2,
    } as any);

    return response.items as IssueListEntry[];
  } catch (error) {
    console.error("Error fetching issue list by issueNo:", error);
    return [];
  }
}
