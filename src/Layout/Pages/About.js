import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "md",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>
          Our mission is to <span style={{ color: "blue" }}>organise</span> the
          world’s <span style={{ color: "red" }}>information</span> and make it{" "}
          <span style={{ color: "green" }}>universally accessible</span> and{" "}
          <span style={{ color: "yellow" }}>useful</span>.
        </h1>
      </Box>

      <Outlet />
    </>
  );
}

export default About;
