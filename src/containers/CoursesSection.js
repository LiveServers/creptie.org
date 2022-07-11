import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import CourseCard from "../components/CourseCard";

const CoursesSection = ({ coursesRef, isMobileTablet }) => {
  const theme = useTheme();
  const coursesArray = [
    {
      course: "Coding",
      description:
        "Use scratch programming & blocks to make your own interactive stories, games, and animations.",
      bgColor: theme.palette.primary.light,
    },
    {
      course: "IoT & Robotics",
      description:
        "Use robots and physical computing kits with different activities to to learn STEM concepts in a hands-on environment. Create projects and program them using C,C++ and python.",
      bgColor: theme.palette.primary.lighter,
    },
    {
      course: "Web development",
      description:
        "Use HTML, CSS and JavaScript to create web pages and share them with the world.",
      bgColor: theme.palette.primary.dark,
    },
    {
      course: "App Lab",
      description:
        "Create an app, make it work with blocks or JavaScript, and share it .",
      bgColor: theme.palette.primary.light,
    },
    {
      course: "Game development",
      description:
        "create simple animations and games with interconnected objects and characters.",
      bgColor: theme.palette.primary.lighter,
    },
    {
      course: "STEM crafts (such as 3D printing and design thinking)",
      description:
        "Use STEM concepts and projects to foster communication, collaboration, critical thinking, creativity and problem solving.",
      bgColor: theme.palette.primary.dark,
    },
  ];
  return (
    <Grid
      ref={coursesRef}
      sx={{ padding: "30px 20px 50px 20px" }}
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
          gridGap: isMobileTablet ? "0" : "2%",
          placeItems: "center",
          width: isMobileTablet ? "100%" : "70%",
        }}
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
          {coursesArray &&
            Array.isArray(coursesArray) &&
            coursesArray.length > 0 &&
            coursesArray.map((item) => (
              <React.Fragment key={nanoid()}>
                <CourseCard
                  messageBody={item.description}
                  headerText={item.course}
                  buttonText="SCHEDULE A DEMO"
                  color={theme.palette.grey[0]}
                  background={item.bgColor}
                />
              </React.Fragment>
            ))}
        </Grid>
      </Box>
    </Grid>
  );
};
export default CoursesSection;

CoursesSection.propTypes = {
  coursesRef: PropTypes.object.isRequired,
  isMobileTablet: PropTypes.bool.isRequired,
};
