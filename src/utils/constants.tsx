/**
 * Contains demo links, titles, images
 *  Don't remove anything from here (if not sure)
 **/

import CheckroomIcon from "@mui/icons-material/Checkroom";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import type { ReactNode } from "react";

import demoProfileImage from "../assets/demo-profile.png";
import demoThumbnailImage from "../assets/demo-thumbnail.png";
import LogoImage from "../assets/logo.png";

export const logo = LogoImage;

export const categories: { name: string; icon: ReactNode }[] = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Computerphile", icon: <ComputerIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = demoThumbnailImage;
export const demoChannelUrl = "/channel/UC9-y-6csu5WGm29I7JiwpnA";
export const demoVideoUrl = "/video/BBJa32lCaaY";
export const demoChannelTitle = "Awesome Channel";
export const demoVideoTitle = "A Random YouTube Video";
export const demoProfilePicture = demoProfileImage;
