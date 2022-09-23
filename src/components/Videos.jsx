import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction = "row" }) => {
  // Loading
  if (!videos?.length) return "Loading...";
  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {/* Videos */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* Video Card */}
          {item.id?.videoId && <VideoCard video={item} />}
          {/* Channel Card */}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
