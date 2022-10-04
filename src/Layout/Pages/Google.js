import React, { useState } from "react";
import { Box } from "@mui/system";
import CssTextField from "../../Assets/CssTextField";

const SearchField = CssTextField();

function Google() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    alert(`You have searched for ${input}`);
  };
  return (
    <>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Google</h1>
        <form onSubmit={handleSubmit}>
          <SearchField
            fullWidth
            label="Search"
            id="search"
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
        </form>
      </Box>
    </>
  );
}

export default Google;
