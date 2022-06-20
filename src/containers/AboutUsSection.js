import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import MuiButton from "../components/Button";

const AboutUsSection = ({ isMobileTablet, aboutRef }) => {
  const theme = useTheme();
  const aboutUs = [
    {
      title: "Develop Key Skills",
      message:
        "Learning to code helps improve a child’s logical thinking and problem-solving skills by 70%, also enabling them to perform better at school.",
      src: "/images/girl.jpg",
    },
    {
      title: "Prepare For The Future",
      message:
        "Learning to code helps improve a child’s logical thinking and problem-solving skills by 70%, also enabling them to perform better at school.",
      src: "/images/boy.jpg",
    },
    {
      title: "Learn Through Coding",
      message:
        "Learning to code helps improve a child’s logical thinking and problem-solving skills by 70%, also enabling them to perform better at school.",
      src: "/images/girl-two.jpg",
    },
  ];
  return (
    <Grid
      ref={aboutRef}
      container
      direction="column"
      alignItems="center"
      wrap="nowrap"
      sx={{
        backgroundColor: theme.palette.grey[800],
        padding: "30px 0 50px 0",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
        }}
      >
        WHO ARE{" "}
        <Typography
          variant="h4"
          component="span"
          sx={{
            textDecoration: "underline",
            textDecorationColor: theme.palette.secondary.main,
            textDecorationThickness: "3px",
            textUnderlinePosition: "under",
          }}
        >
          WE?
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          gridGap: "2%",
          placeItems: "center",
          maxWidth: isMobileTablet ? "100%" : "72rem",
          width: isMobileTablet ? "100%" : "70%",
        }}
      >
        {isMobileTablet ? (
          <>
            {aboutUs &&
              aboutUs.length > 0 &&
              aboutUs.map(({ title, message, src }) => (
                <React.Fragment key={nanoid()}>
                  <Grid
                    sx={{ marginBottom: theme.spacing(3) }}
                    container
                    direction="column"
                    alignItems="center"
                  >
                    <Box>
                      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                      <img
                        src={src}
                        alt="image of a girl holding her hair"
                        width={301}
                        height={180}
                        style={{ borderRadius: 10, objectFit: "fill" }}
                      />
                    </Box>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      wrap="nowrap"
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, marginBottom: theme.spacing(3) }}
                      >
                        {title}
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                gridTemplateRows: "1fr",
                gridGap: "2%",
                placeItems: "center",
                marginBottom: theme.spacing(3),
              }}
            >
              <Box sx={{ width: "100%" }}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src="/images/girl.jpg"
                  alt="image of a girl holding her hair"
                  width={400}
                  height={180}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
              </Box>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                wrap="nowrap"
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: theme.spacing(3) }}
                >
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: theme.palette.secondary.main,
                      textDecorationThickness: "3px",
                      textUnderlinePosition: "under",
                      fontWeight: 600,
                    }}
                    variant="h5"
                    component="span"
                  >
                    Develop
                  </Typography>{" "}
                  Key Skills
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "start" }}>
                  Learning to code helps improve a child’s logical thinking and
                  problem-solving skills by 70%, also enabling them to perform
                  better at school.
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                gridTemplateRows: "1fr",
                gridGap: "2%",
                placeItems: "center",
                marginBottom: theme.spacing(3),
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                wrap="nowrap"
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: theme.spacing(3) }}
                >
                  Prepare For The{" "}
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: theme.palette.secondary.main,
                      textDecorationThickness: "3px",
                      textUnderlinePosition: "under",
                      fontWeight: 600,
                    }}
                    component="span"
                    variant="h5"
                  >
                    Future
                  </Typography>
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "start" }}>
                  Learning to code helps improve a child’s logical thinking and
                  problem-solving skills by 70%, also enabling them to perform
                  better at school.
                </Typography>
              </Grid>
              <Box sx={{ width: "100%" }}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src="/images/boy.jpg"
                  alt="boy holding arms over his head"
                  width={400}
                  height={180}
                  style={{
                    borderRadius: 10,
                    objectFit: "cover",
                    float: "right",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                gridTemplateRows: "1fr",
                gridGap: "2%",
                placeItems: "center",
                marginBottom: theme.spacing(3),
              }}
            >
              <Box sx={{ width: "100%" }}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src="/images/girl-two.jpg"
                  alt="image of a girl smiling"
                  width={400}
                  height={180}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
              </Box>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                wrap="nowrap"
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: theme.spacing(3) }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: theme.palette.secondary.main,
                      textDecorationThickness: "3px",
                      textUnderlinePosition: "under",
                      fontWeight: 600,
                    }}
                  >
                    Learn
                  </Typography>{" "}
                  Through Coding
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "start" }}>
                  Learning to code helps improve a child’s logical thinking and
                  problem-solving skills by 70%, also enabling them to perform
                  better at school.
                </Typography>
              </Grid>
            </Box>
          </>
        )}
      </Box>
      <Box sx={{ paddingTop: theme.spacing(6) }}>
        <MuiButton size="large" variant="contained" text="SCHEDULE A DEMO" />
      </Box>
    </Grid>
  );
};

export default AboutUsSection;

AboutUsSection.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
};
