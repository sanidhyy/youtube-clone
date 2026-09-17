import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import type { YouTubeItem } from "../types/youtube";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState<YouTubeItem[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items ?? []),
    );
  }, [searchTerm]);

  return (
    <Box
      sx={{
        p: 2,
        overflowY: "auto",
        height: "90vh",
        flex: 2
      }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#fff"
        }}>
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
