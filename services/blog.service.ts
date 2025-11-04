import { contentfulClient } from "@/lib/contentful";
import { BlogPageEntry, BlogPageSkeleton } from "@/lib/contentful-types";

export async function getAllBlogPosts(): Promise<BlogPageEntry[]> {
  try {
    const response = await contentfulClient.getEntries<BlogPageSkeleton>(
      {
        content_type: "blogPage",
        order: ["-sys.createdAt"],
        include: 2, // Include referenced entries
      }
    );

    return response.items as BlogPageEntry[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPageEntry | null> {
  try {
    const response = await contentfulClient.getEntries<BlogPageSkeleton>(
      {
        content_type: "blogPage",
        "fields.slug": slug,
        include: 3, // Include nested references
        limit: 1,
      } as any
    );

    return (response.items[0] as BlogPageEntry) || null;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    throw error;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries<BlogPageSkeleton>(
      {
        content_type: "blogPage",
        select: ["fields.slug"],
      } as any
    );

    return response.items
      .map((item: any) => item.fields.slug)
      .filter((slug:string): slug is string => !!slug);
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}
