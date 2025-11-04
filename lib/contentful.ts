// lib/contentful.ts
import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN is not defined");
}

// Create Contentful client
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

// Optional: Preview client for draft content
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ||
    process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  host: "preview.contentful.com",
});

// Helper function to choose client based on preview mode
export const getClient = (preview = false) => {
  return preview ? previewClient : contentfulClient;
};
