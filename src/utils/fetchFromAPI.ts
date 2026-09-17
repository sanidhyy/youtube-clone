import type { YouTubeItem, YouTubeListResponse } from "../types/youtube";

export const fetchFromAPI = async <T = YouTubeItem>(
  resourcePath: string,
): Promise<YouTubeListResponse<T>> => {
  const url = new URL("/api/youtube", window.location.origin);
  url.searchParams.set("path", resourcePath);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<YouTubeListResponse<T>>;
};
