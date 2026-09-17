export type YouTubeThumbnail = {
  url?: string;
  width?: number;
  height?: number;
};

export type YouTubeSnippet = {
  title?: string;
  channelId?: string;
  channelTitle?: string;
  thumbnails?: {
    default?: YouTubeThumbnail;
    medium?: YouTubeThumbnail;
    high?: YouTubeThumbnail;
  };
};

export type YouTubeId = {
  kind?: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
};

export type YouTubeStatistics = {
  viewCount?: string;
  likeCount?: string;
  subscriberCount?: string;
};

export type YouTubeItem = {
  id?: string | YouTubeId;
  snippet?: YouTubeSnippet;
  statistics?: YouTubeStatistics;
};

export type YouTubeListResponse<T = YouTubeItem> = {
  items?: T[];
};
