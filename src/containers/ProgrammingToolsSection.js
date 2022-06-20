import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const ProgrammingToolsSection = () => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        padding: "30px 0 50px 0",
        backgroundColor: theme.palette.grey[800],
      }}
      container
      alignItems="center"
      wrap="nowrap"
      direction="column"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          gridGap: "2%",
          placeItems: "center",
          width: "70%",
        }}
      >
        <Typography sx={{ marginTop: theme.spacing(2), textAlign: "center" }} variant="h4">
          A LIST OF PROGRAMMING TOOLS USED
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: theme.spacing(4),
          }}
          variant="body1"
        >
          All the programming tools and environments we use in our courses are
          specifically designed to educate the students between 6 and 18 years
          old in the field of coding and developing their logical and analytical
          thinking!
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: theme.spacing(4) }}
        >
          <Box sx={{ padding: theme.spacing(3) }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/images/CSS-HTML.svg"
              alt="image of html and css languages"
              width={200}
              height={55}
            />
          </Box>
          <Box sx={{ padding: theme.spacing(3) }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/images/js.svg"
              alt="image of javascript languages"
              width={200}
              height={55}
            />
          </Box>
          <Box sx={{ padding: theme.spacing(3) }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/images/microbit.svg"
              alt="image of microbit languages"
              width={200}
              height={55}
            />
          </Box>
          <Box sx={{ padding: theme.spacing(3) }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/images/python.svg"
              alt="image of python languages"
              width={200}
              height={55}
            />
          </Box>
          <Box sx={{ padding: theme.spacing(3) }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="/images/wonder.svg"
              alt="image of wonder workshop languages"
              width={200}
              height={55}
            />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProgrammingToolsSection;
