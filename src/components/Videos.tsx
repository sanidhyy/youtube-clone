import { Box, Stack } from "@mui/material";
import type { StackProps } from "@mui/material";

import type { YouTubeItem } from "../types/youtube";
import { ChannelCard, VideoCard } from "./";

type VideosProps = {
  videos?: YouTubeItem[] | null;
  direction?: StackProps["direction"];
};

const getResourceId = (item: YouTubeItem) =>
  typeof item.id === "string" ? undefined : item.id;

const Videos = ({ videos, direction = "row" }: VideosProps) => {
  if (!videos?.length) {
    return "Loading...";
  }

  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => {
        const resourceId = getResourceId(item);

        return (
          <Box key={idx}>
            {resourceId?.videoId && <VideoCard video={item} />}
            {resourceId?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
