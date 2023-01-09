import { Link, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg.png";

export const MainRight = () => {
  return (
    <>
      <Box p="16px" m="0" backgroundColor="#eeeeee" borderRadius="8px">
        <Typography mb="8px" variant="h5" color="black">
          About
        </Typography>

        <Typography>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
      </Box>

      <Box>
        <Typography m="24px 0 8px" variant="h5" color="black">
          Archives
        </Typography>

        <Stack>
          <Link href="/" fontSize="16px">
            March 2020
          </Link>
          <Link href="/" fontSize="16px">
            February
          </Link>
          <Link href="/" fontSize="16px">
            January 2020
          </Link>
          <Link href="/" fontSize="16px">
            Novomber 1999
          </Link>
          <Link href="/" fontSize="16px">
            October 1999
          </Link>
          <Link href="/" fontSize="16px">
            September 1999
          </Link>
          <Link href="/" fontSize="16px">
            August 1999
          </Link>
          <Link href="/" fontSize="16px">
            July 1999
          </Link>
          <Link href="/" fontSize="16px">
            June 1999
          </Link>
          <Link href="/" fontSize="16px">
            May 1999
          </Link>
          <Link href="/" fontSize="16px">
            April 1999
          </Link>
        </Stack>
      </Box>

      <Box>
        <Typography m="24px 0 8px" variant="h5" color="black">
          Social
        </Typography>

        <Stack>
          <Link href="/" mb="8px" display="flex" alignItems="center" fontSize="16px">
            <Typography
              mr="8px"
              component="img"
              color="red"
              width="24px"
              src={github}
            />{" "}
            GitHub
          </Link>
          <Link href="/" mb="8px" display="flex" alignItems="center" fontSize="16px">
            <Typography mr="8px" component="img" width="24px" src={twitter} />{" "}
            Twitter
          </Link>
          <Link href="/" mb="8px" display="flex" alignItems="center" fontSize="16px">
            <Typography mr="8px" component="img" width="24px" src={facebook} />{" "}
            Facebook
          </Link>
        </Stack>
      </Box>
    </>
  );
};
