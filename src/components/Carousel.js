import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const Carousel = ({ testimonials, handleNext, handlePrev, count, names }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
    >
      <IconButton onClick={() => handlePrev()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box sx={{ margin: "0 24px" }}>
        <Typography sx={{ textAlign: "center" }} variant="body1">
          {testimonials[count]}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontWeight: 700, marginTop: "6px" }}
          variant="body1"
        >
          {names[count]}
        </Typography>
      </Box>
      <IconButton onClick={() => handleNext()}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Grid>
  );
};

export default React.memo(Carousel);

Carousel.propTypes = {
  testimonials: PropTypes.array.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
