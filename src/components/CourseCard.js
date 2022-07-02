import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Link from "next/link";
import MuiButton from "./Button";

const CourseCard = ({
  headerText,
  messageBody,
  buttonText = "SCHEDULE A DEMO",
  color,
  background,
}) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        maxWidth: 250,
        width: 250,
        minHeight: 304,
        height: 304,
        backgroundColor: theme.palette.grey[800],
        margin: theme.spacing(4),
      }}
      container
      direction="column"
      alignItems="center"
      wrap="nowrap"
      justifyContent="space-between"
    >
      <Box
        sx={{
          backgroundColor: background,
          padding: "30px 0 30px 0",
          width: 250,
        }}
      >
        <Typography
          sx={{ textAlign: "center", color, alignSelf: "center" }}
          variant="h6"
        >
          {headerText}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: theme.palette.grey[800],
            padding: "30px 20px",
          }}
          variant="body1"
        >
          {messageBody}
        </Typography>
      </Box>
      <Link href="https://api.whatsapp.com/send?phone=254740248823" passHref>
        <a style={{ width: "100%" }} target="_blank">
          <Box sx={{ width: "100%" }}>
            <MuiButton
              size="medium"
              variant="contained"
              text={buttonText}
              sx={{
                color,
                backgroundColor: background,
                width: "100%",
              }}
            />
          </Box>
        </a>
      </Link>
    </Grid>
  );
};

export default CourseCard;

CourseCard.propTypes = {
  headerText: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
