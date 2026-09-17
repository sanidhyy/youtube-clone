import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import type { YouTubeItem } from "../types/youtube";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<YouTubeItem[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items ?? []),
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/sanidhyy/youtube-clone"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "#FC1503" }}
            title="View Source Code"
          >
            YouTube Clone
          </a>
        </Typography>
      </Box>

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
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;