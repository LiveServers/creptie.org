import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import CourseCard from "../components/CourseCard";

const CoursesSection = ({ coursesRef }) => {
  const theme = useTheme();
  return (
    <Grid
      ref={coursesRef}
      sx={{ padding: "30px 20px 50px 20px" }}
      container
      alignItems="center"
      wrap="nowrap"
      direction="column"
    >
      <Typography
        sx={{ marginTop: theme.spacing(2), textAlign: "center" }}
        variant="h4"
      >
        CHOOSE A COURSE AMONGST OUR LIST
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: theme.spacing(3) }}
      >
        <CourseCard
          messageBody="Use HTML, CSS and JavaScript to create web pages and share them with the world"
          headerText="WEB DEVELOPMENT"
          buttonText="SCHEDULE A DEMO"
          color={theme.palette.grey[0]}
          background={theme.palette.primary.light}
        />
        <CourseCard
          messageBody="Use robots and physical computing kits with different activities to learn STEM concepts in a hands-on environment."
          headerText="IOT & ROBOTICS"
          buttonText="SCHEDULE A DEMO"
          color={theme.palette.grey[0]}
          background={theme.palette.primary.lighter}
        />
        <CourseCard
          messageBody="Create simple animations and games with interconnected objects and characters"
          headerText="GAME DEVELOPMENT"
          buttonText="SCHEDULE A DEMO"
          color={theme.palette.grey[0]}
          background={theme.palette.primary.dark}
        />
      </Grid>
    </Grid>
  );
};
export default CoursesSection;

CoursesSection.propTypes = {
  coursesRef: PropTypes.object.isRequired,
};
