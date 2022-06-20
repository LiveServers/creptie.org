import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import MuiButton from "../components/Button";

const HeroSection = ({ isLargeScreen, isMobileTablet, heroRef, aboutRef }) => {
  const theme = useTheme();
  const [area, setArea] = React.useState({ height: 0, width: 0 });
  let dimensions = React.useRef(null);
  React.useEffect(() => {
    const { width } = dimensions.getBoundingClientRect();
    const { height } = dimensions.getBoundingClientRect();
    setArea({ height, width });
  }, [dimensions]);
  return (
    <Grid
      ref={heroRef}
      sx={{
        backgroundColor: theme.palette.primary.light,
        paddingTop:
          !isMobileTablet && !isLargeScreen ? "2%" : isLargeScreen && "4%",
        paddingLeft: isLargeScreen && "5%",
        paddingRight: isLargeScreen && "5%",
      }}
      container
      direction="column"
      alignItems="center"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobileTablet ? "1fr" : "50% 50%",
          gridTemplateRows: "1fr",
          width: isLargeScreen ? "70%" : "100%",
          padding: "40px 24px",
          gridGap: "2%",
          marginTop: theme.spacing(6),
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Grid
          container
          direction="column"
          alignItems={isMobileTablet ? "center" : "flex-start"}
          justifyContent="center"
          wrap="nowrap"
        >
          <Typography
            sx={{
              textAlign: isMobileTablet && "center",
              color: theme.palette.grey[0],
            }}
            variant="h3"
          >
            <Typography
              component="span"
              variant="h3"
              sx={{ color: theme.palette.primary.main }}
            >
              CREPTIE.ORG
            </Typography>{" "}
            IS AN INNOVATIVE SCHOOL OF PROGRAMMING FOR KIDS AND TEENS
          </Typography>
          <Typography
            sx={{
              paddingTop: theme.spacing(4),
              textAlign: isMobileTablet && "center",
              color: theme.palette.grey[0],
            }}
            variant="h5"
          >
            Our centers offer programming training for students from 6 to 18
            years old! At Creptie.org, students develop their algorithmic,
            logical and analytical thinking, while learning the foundations of
            programming!
          </Typography>
          <Box sx={{ paddingTop: theme.spacing(4) }}>
            <MuiButton
              size="large"
              variant="contained"
              text="SCHEDULE A DEMO"
            />
          </Box>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent={isMobileTablet ? "center" : "flex-start"}
            wrap="nowrap"
            sx={{ paddingTop: theme.spacing(3) }}
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Typography
              sx={{
                color: isMobileTablet
                  ? theme.palette.grey[0]
                  : theme.palette.grey[0],
                fontSize: 16,
                padding: "5px 0",
                cursor: "pointer",
                textAlign: "center",
              }}
              variant="body1"
            >
              Find Out More
            </Typography>
            <IconButton size="small">
              <ArrowDownwardIcon sx={{ color: theme.palette.grey[0] }} />
            </IconButton>
          </Grid>
        </Grid>
        <Box ref={(el) => (dimensions = el)}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src="/images/hero-removebg.png"
            alt="Image of children using laptops"
            height={isMobileTablet ? 300 : area.height}
            width={area.width}
            style={{ objectFit: isMobileTablet && "contain" }}
          />
        </Box>
      </div>
    </Grid>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  isLargeScreen: PropTypes.bool.isRequired,
  isMobileTablet: PropTypes.bool.isRequired,
  heroRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
};
