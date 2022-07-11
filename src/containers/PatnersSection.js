import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";

const PatnersSection = () => {
  const theme = useTheme();
  const patnersArray = [
    {
      img: "/images/patners/CS-first-logo.jpg",
      alt: "Cs First Logo",
    },
    {
      img: "/images/patners/hour-of-code-logo.jpg",
      alt: "Hour Of Code Logo",
    },
    {
      img: "/images/patners/makini-school-logo.webp",
      alt: "Makini School Logo",
    },
    {
      img: "/images/patners/MIT-logo.jpg",
      alt: "MIT Logo",
    },
    {
      img: "/images/patners/scratch-logo.jpg",
      alt: "Scratch Logo",
    },
    {
      img: "/images/patners/tynker-byjus-logo.jpg",
      alt: "Tynker Byjus Logo",
    },
  ];
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
              color: theme.palette.primary.bgColor,
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
          {patnersArray &&
            Array.isArray(patnersArray) &&
            patnersArray.length > 0 &&
            patnersArray.map((item) => (
              <React.Fragment key={nanoid()}>
                <Box sx={{ padding: theme.spacing(3) }}>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={item.img} alt={item.alt} width={200} height={60} />
                </Box>
              </React.Fragment>
            ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default PatnersSection;
