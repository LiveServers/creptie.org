import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const PatnersSection = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      wrap="nowrap"
      sx={{
        padding: "30px 0 50px 0",
      }}
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
        <Typography
          sx={{ marginTop: theme.spacing(2), textAlign: "center" }}
          variant="h4"
        >
          PEOPLE WHO BELIEVE IN{" "}
          <Typography
            sx={{
              color: theme.palette.primary.main,
              marginLeft: theme.spacing(1),
            }}
            variant="h4"
            component="span"
          >
            CREPTIE.ORG
          </Typography>
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
        </Grid>
      </Box>
    </Grid>
  );
};

export default PatnersSection;
