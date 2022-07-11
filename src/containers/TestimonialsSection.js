import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Carousel from "../components/Carousel";

const TestimonialsSection = () => {
  const theme = useTheme();
  const [count, setCount] = React.useState(0);
  const testimonials = [
    "In our educational courses, we rely on an innovative customized curriculum divided into several segments according to the age of the students. Our students work in small groups, where the children are at similar age, because we are driven by the motive to provide an individual approach to all of them.",
    "We rely on an innovative customized curriculum divided into several segments according to the age of the students. Our students work in small groups, where the children are at similar age, because we are driven by the motive to provide an individual approach to all of them.",
    "Curriculum divided into several segments according to the age of the students. Our students work in small groups, where the children are at similar age, because we are driven by the motive to provide an individual approach to all of them.",
  ];
  const names = ["Don, Parent", "Steve, Creptie Student", "Mary, Parent"];

  const handleNext = React.useCallback(() => {
    if (count !== 2 || count < 2) {
      setCount((prev) => prev + 1);
    }
  }, [count]);

  const handlePrev = React.useCallback(() => {
    if (count !== 0 || count > 0) {
      setCount((prev) => prev - 1);
    }
  }, [count]);

  return (
    <Grid
      sx={{
        padding: "30px 0 50px 0",
      }}
      container
      direction="column"
      alignItems="center"
      wrap="nowrap"
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
          WHAT PEOPLE SAY ABOUT
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
        <Box sx={{ marginTop: theme.spacing(2) }}>
          <Carousel
            handleNext={handleNext}
            handlePrev={handlePrev}
            testimonials={testimonials}
            count={count}
            names={names}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default React.memo(TestimonialsSection);
