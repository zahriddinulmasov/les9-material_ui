import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HeroWrapper } from "./hero-styles";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Box maxWidth="580px" p="48px 0 48px 48px" minHeight="364px">
          <Typography variant="h3" color="white">
            Title of a longer featured blog post
          </Typography>

          <Typography color="white" fontSize="24px">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>

          <Link href="#">Continue reading…</Link>
        </Box>
      </HeroWrapper>

      {/* CARDS */}

      <Box sx={{ width: "100%", p: "32px 0" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "0",
                textAlign: "left",
              }}
            >
              <Card sx={{ maxWidth: 455, width: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      fontWeight="600"
                      variant="h5"
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography fontSize="12px">Nov 12</Typography>
                    <Typography
                      fontWeight="600"
                      variant="body2"
                      color="text.secondary"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link size="small" color="primary">
                    Continue reading...
                  </Link>
                </CardActions>
              </Card>
              <Box>
                <CardMedia
                  component="img"
                  width="160px"
                  height="190px"
                  image="https://source.unsplash.com/random/160"
                  alt="green iguana"
                />
              </Box>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item
              sx={{
                display: "flex",
                p: "0",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <Card sx={{ maxWidth: 445, width: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      fontWeight="600"
                      variant="h5"
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography fontSize="12px">Nov 12</Typography>
                    <Typography
                      fontWeight="600"
                      variant="body2"
                      color="text.secondary"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link size="small" color="primary">
                    Continue reading...
                  </Link>
                </CardActions>
              </Card>
              <Box>
                <CardMedia
                  component="img"
                  width="160px"
                  height="190px"
                  image="https://source.unsplash.com/random/160"
                  alt="green iguana"
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
