import { contentfulClient } from "@/lib/contentful";
import { AuthorEntry, AuthorSkeleton } from "@/lib/contentful-types";

export async function getAllAuthors(): Promise<AuthorEntry[]> {
  try {
    const response = await contentfulClient.getEntries<AuthorSkeleton>({
      content_type: "author",
      order: ["-sys.createdAt"],
    });

    return response.items as AuthorEntry[];
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
}

export async function getAuthorBySlug(
  slug: string
): Promise<AuthorEntry | null> {
  try {
    const response = await contentfulClient.getEntries<AuthorSkeleton>({
      content_type: "author",
      "fields.slug": slug,
      limit: 1,
    } as any);

    return (response.items[0] as AuthorEntry) || null;
  } catch (error) {
    console.error("Error fetching author by slug:", error);
    throw error;
  }
}

export async function getAuthorById(id: string): Promise<AuthorEntry | null> {
  try {
    const entry = await contentfulClient.getEntry<AuthorSkeleton>(id);
    return entry as AuthorEntry;
  } catch (error) {
    console.error("Error fetching author by ID:", error);
    return null;
  }
}
