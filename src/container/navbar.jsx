import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export const Navbar = () => {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: 'background.paper',
        p: "0 16px"
      }}
      onClick={preventDefault}
    >
      <Link p="10px 4px" color="inherit" href="#">Technology</Link>
      <Link p="10px 4px" color="inherit" href="#">Design</Link>
      <Link p="10px 4px" color="inherit" href="#">Culture</Link>
      <Link p="10px 4px" color="inherit" href="#">Business</Link>
      <Link p="10px 4px" color="inherit" href="#">Politics</Link>
      <Link p="10px 4px" color="inherit" href="#">Opinion</Link>
      <Link p="10px 4px" color="inherit" href="#">Science</Link>
      <Link p="10px 4px" color="inherit" href="#">Health</Link>
      <Link p="10px 4px" color="inherit" href="#">Style</Link>
      <Link p="10px 4px" color="inherit" href="#">Travel</Link>
    </Box>
  );
};
