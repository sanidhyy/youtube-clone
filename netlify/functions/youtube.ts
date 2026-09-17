import type { Config } from "@netlify/functions";

const RAPID_API_HOST = "youtube-v31.p.rapidapi.com";
const RAPID_API_BASE_URL = `https://${RAPID_API_HOST}`;
const ALLOWED_ENDPOINTS = new Set(["search", "videos", "channels"]);
const ALLOWED_QUERY_PARAMS = new Set([
  "part",
  "q",
  "id",
  "channelId",
  "relatedToVideoId",
  "type",
  "order",
  "maxResults",
]);

const isSafePath = (path: string) =>
  !path.includes("://") && !path.includes("..") && !path.startsWith("/");

export default async (request: Request) => {
  const apiKey = process.env.RAPID_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Server misconfigured" },
      { status: 500 },
    );
  }

  const requestUrl = new URL(request.url);
  const resourcePath = requestUrl.searchParams.get("path");

  if (!resourcePath || !isSafePath(resourcePath)) {
    return Response.json({ error: "Invalid path" }, { status: 400 });
  }

  const [endpoint, queryString] = resourcePath.split("?");

  if (!ALLOWED_ENDPOINTS.has(endpoint)) {
    return Response.json({ error: "Unknown endpoint" }, { status: 400 });
  }

  const upstreamUrl = new URL(`${RAPID_API_BASE_URL}/${endpoint}`);
  const incomingParams = new URLSearchParams(queryString ?? "");

  for (const [key, value] of incomingParams) {
    if (ALLOWED_QUERY_PARAMS.has(key)) {
      upstreamUrl.searchParams.set(key, value);
    }
  }

  if (!upstreamUrl.searchParams.has("maxResults")) {
    upstreamUrl.searchParams.set("maxResults", "50");
  }

  const upstreamResponse = await fetch(upstreamUrl, {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  });

  const body = await upstreamResponse.text();

  return new Response(body, {
    status: upstreamResponse.status,
    headers: {
      "Content-Type":
        upstreamResponse.headers.get("Content-Type") ?? "application/json",
    },
  });
};

export const config: Config = {
  path: "/api/youtube",
  method: "GET",
};
