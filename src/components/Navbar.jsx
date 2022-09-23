import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    {/* Logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="YouTube Clone" height={45} title="YouTube Clone" />
    </Link>
    {/* Search Bar */}
    <SearchBar />
  </Stack>
);

export default Navbar;
