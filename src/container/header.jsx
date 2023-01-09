import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "8px 24px",
          color: " #1976d2",
          bgcolor: "white",
          borderBottom: "2px solid #50575e",
          boxShadow: "none",
        }}
      >
        <Typography variant="h6" component="div">
          News
        </Typography>
        <Typography component="h1" fontSize="28px" color="black">
          Blog
        </Typography>

        <Box>
          <IconButton sx={{ p: "8px", mr: "4px" }}>
            <SearchIcon fontSize="large"/>
          </IconButton>
        <Button variant="outlined">SIGN UP</Button>
        </Box>
      </Box>
    </Box>
  );
};
