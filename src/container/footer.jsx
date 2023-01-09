import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <Box p="48px 0" textAlign='center'>
      <Typography variant="h5" mb="8px" color="black">
        Footer
      </Typography>

      <Box>
        <Typography>Something here to give the footer a purpose!</Typography>
        <Typography>
          Copyright © <Link color="inherit">Your Website</Link> 2023.
        </Typography>
      </Box>
    </Box>
  );
};
