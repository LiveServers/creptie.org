import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import AppHeader from "../containers/AppHeader";
import GalleryContainer from "../containers/GalleryContainer";

const Gallery = ({
  contactRef,
  isMobileTablet,
  aboutRef,
  curriculumRef,
  coursesRef,
  teamRef,
}) => {
  const theme = useTheme();
  const location = useRouter();
  return (
    <>
      <Head>
        <title>CREPTIE SCHOOL - Our Gallery</title>
      </Head>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.grey[0],
          height: "100vh",
        }}
      >
        <AppHeader
          contactRef={contactRef}
          isMobileTablet={isMobileTablet}
          aboutRef={aboutRef}
          curriculumRef={curriculumRef}
          coursesRef={coursesRef}
          teamRef={teamRef}
          pathname={location.pathname}
        />
        <GalleryContainer isMobileTablet={isMobileTablet} />
      </Grid>
    </>
  );
};

export default Gallery;
