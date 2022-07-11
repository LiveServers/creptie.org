import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";

const ProgrammingToolsSection = () => {
  const theme = useTheme();
  const toolsArray = [
    {
      img: "/images/tools/CSS-HTML.svg",
      alt: "CSS HTML Icon",
    },
    {
      img: "/images/tools/js.svg",
      alt: "Javascript Icon",
    },
    {
      img: "/images/tools/microbit.svg",
      alt: "Microbit Icon",
    },
    {
      img: "/images/tools/python.svg",
      alt: "Python Icon",
    },
    {
      img: "/images/tools/wonder.svg",
      alt: "Wonder Icon",
    },
    {
      img: "/images/tools/Minecraft_logo.png",
      alt: "Minecraft Icon",
    },
  ];
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
        <Typography
          sx={{ marginTop: theme.spacing(2), textAlign: "center" }}
          variant="h4"
        >
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
          {toolsArray &&
            Array.isArray(toolsArray) &&
            toolsArray.length > 0 &&
            toolsArray.map((item) => (
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

export default ProgrammingToolsSection;
