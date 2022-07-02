import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Link from "next/link";
import MuiButton from "../components/Button";

const CurriculumSection = ({ curriculumRef }) => {
  const theme = useTheme();
  return (
    <Grid
      ref={curriculumRef}
      sx={{
        backgroundColor: theme.palette.primary.light,
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
          sx={{
            marginTop: theme.spacing(4),
            color: theme.palette.grey[0],
            textAlign: "center",
          }}
          variant="h4"
        >
          A CURRATED CURRICULUM FOR EACH STUDENT
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: theme.spacing(4),
            color: theme.palette.grey[50],
          }}
          variant="body1"
        >
          In our educational courses, we rely on an innovative customized
          curriculum divided into several segments according to the age of the
          students. Our students work in small groups, where the children are at
          similar age, because we are driven by the motive to provide an
          individual approach to all of them.
        </Typography>
        <Link href="https://api.whatsapp.com/send?phone=254740248823" passHref>
          <a target="_blank">
            <Box sx={{ marginTop: theme.spacing(4) }}>
              <MuiButton
                size="large"
                variant="contained"
                text="ENROLL NOW"
                sx={{
                  color: theme.palette.grey[900],
                  backgroundColor: theme.palette.grey[0],
                }}
              />
            </Box>
          </a>
        </Link>
      </Box>
    </Grid>
  );
};

export default CurriculumSection;

CurriculumSection.propTypes = {
  curriculumRef: PropTypes.object.isRequired,
};
