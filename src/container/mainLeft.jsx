import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, Typography } from "@mui/material";
import { MainRight } from "./mainRight";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const MainLeft = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={3}
          sx={{
            display: {
              md: "flex",
            },
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Grid md={8}>
            <Item sx={{p: "0", border: "none", boxShadow: "none"}}>
              <Box component="div">
                <Typography
                  color="black"
                  p="12px 0"
                  m="0"
                  borderBottom="1px solid lightgray"
                  fontWeight="60px"
                  variant="h5"
                >
                  From the firehose
                </Typography>

                <Box p="24px 0" component="div">
                  <Typography variant="h3" color="black">
                    Sample blog post
                  </Typography>

                  <Box component="em">
                    April 1, 2020 by{" "}
                    <Link href="/" >
                      Oliver
                    </Link>
                  </Box>

                  <Typography m="16px 0">
                    This blog post shows a few different types of content that
                    are supported and styled with Material styles. Basic
                    typography, images, and code are all supported. You can
                    extend these by modifying Markdown.js.
                  </Typography>

                  <Typography mb="16px">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Sed posuere consectetur est at lobortis. Cras mattis
                    consectetur purus sit amet fermentum.
                  </Typography>

                  <Typography mb="16px">
                    Curabitur blandit tempus porttitor.{" "}
                    <Typography display="inline" color="black" component="span">
                      Nullam quis risus eget urna mollis
                    </Typography>{" "}
                    ornare vel eu leo. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                  </Typography>

                  <Typography mb="16px">
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>

                  <Typography
                    component="h5"
                    mb="16px"
                    color="black"
                    fontWeight="600px"
                  >
                    Heading
                  </Typography>

                  <Typography mb="16px">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>

                  <Typography mb="16px">Sub-heading 1</Typography>

                  <Typography mb="16px">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </Typography>

                  <Typography mb="16px">Sub-heading 2</Typography>

                  <Typography mb="16px">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean lacinia bibendum
                    nulla sed consectetur. Etiam porta sem malesuada magna
                    mollis euismod. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </Typography>

                  <Box component="ul">
                    <Box mb="8px" component="li">
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.
                    </Box>
                    <Box mb="8px" component="li">
                      Donec id elit non mi porta gravida at eget metus.
                    </Box>
                    <Box mb="8px" component="li">
                      Nulla vitae elit libero, a pharetra augue.
                    </Box>
                  </Box>

                  <Typography m="16px">
                    Cras mattis consectetur purus sit amet fermentum. Sed
                    posuere consectetur est at lobortis.
                  </Typography>

                  <Box component="ol">
                    <Box mb="8px" component="li">
                      Vestibulum id ligula porta felis euismod semper.
                    </Box>
                    <Box mb="8px" component="li">
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </Box>
                    <Box component="li">
                      Maecenas sed diam eget risus varius blandit sit amet non
                      magna.
                    </Box>
                  </Box>

                  <Typography m="18px 0 16px 0">
                    Cras mattis consectetur purus sit amet fermentum. Sed
                    posuere consectetur est at lobortis.
                  </Typography>
                </Box>

                <Box p="24px 0" component="div">
                  <Typography variant="h3" color="black">
                    Another blog post
                  </Typography>

                  <Box component="em">
                    March 23, 2020 by{" "}
                    <Link href="/" color="#1976d2">
                      Matt
                    </Link>
                  </Box>

                  <Typography m="16px 0">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Sed posuere consectetur est at lobortis. Cras mattis
                    consectetur purus sit amet fermentum.
                  </Typography>

                  <Typography m="16px 0">
                    Curabitur blandit tempus porttitor.{" "}
                    <Typography display="inline" color="black">
                      Nullam quis risus eget urna mollis
                    </Typography>{" "}
                    ornare vel eu leo. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                  </Typography>

                  <Typography m="16px 0">
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>

                  <Typography m="16px 0">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                </Box>

                <Box p="24px 0" component="div">
                  <Typography variant="h3" color="black">
                    New feature
                  </Typography>

                  <Box component="em">
                    March 14, 2020 by{" "}
                    <Link href="/"  color="#1976d2">
                      Tom
                    </Link>
                  </Box>

                  <Typography m="16px 0">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean lacinia bibendum
                    nulla sed consectetur. Etiam porta sem malesuada magna
                    mollis euismod. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </Typography>

                  <Box component="ul">
                    <Box mb="8px" component="li">
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.
                    </Box>
                    <Box mb="8px" component="li">
                      Donec id elit non mi porta gravida at eget metus.
                    </Box>
                    <Box component="li">
                      Nulla vitae elit libero, a pharetra augue.
                    </Box>
                  </Box>

                  <Typography m="16px 0">
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>

                  <Typography m="16px 0">
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla
                    vitae elit libero, a pharetra augue.
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid md={4} >
            <Item sx={{p: "0", border: "none", boxShadow: "none"}}>
              <MainRight/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
