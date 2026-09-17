import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import type { YouTubeItem } from "../types/youtube";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<YouTubeItem | null>(null);
  const [videos, setVideos] = useState<YouTubeItem[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items?.[0] ?? null),
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data.items ?? []),
    );
  }, [id]);

  return (
    <Box sx={{
      minHeight: "95vh"
    }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box
        sx={{
          display: "flex",
          p: "2"
        }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;