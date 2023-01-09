import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import { Header } from "../container/header";
import { Navbar } from "../container/navbar";
import { Hero } from "../container/hero";
import { MainLeft } from "../container/mainLeft";
import { Footer } from "../container/footer";

export const Home = () => {
  return (
    <>
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box>
            <Header />
            <Navbar />
            <Hero />

            <Box>
              <MainLeft />
            </Box>
          </Box>

          <Footer />
        </Container>
      </Fragment>
    </>
  );
};
