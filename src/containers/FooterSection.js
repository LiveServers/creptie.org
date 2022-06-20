import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterSection = ({ isMobileTablet }) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        padding: theme.spacing(6),
        backgroundColor: theme.palette.primary.main,
        position: !isMobileTablet && "relative",
        marginTop: !isMobileTablet && "-34px",
      }}
      container
      alignItems="flex-start"
      direction="row"
      justifyContent="space-between"
      wrap={isMobileTablet ? "wrap" : "nowrap"}
    >
      <Grid container direction="column" alignItems="center">
        <Typography sx={{ color: theme.palette.grey[0] }} variant="h4">
          CREPTIE.ORG
        </Typography>
        <Typography sx={{ color: theme.palette.grey[0] }} variant="subtitle1">
          Advanced learning for all ages
        </Typography>
        <Typography sx={{ color: theme.palette.grey[0] }} variant="subtitle2">
          2022 Creptie.org. All rights reserved
        </Typography>
      </Grid>
      <Grid
        sx={{ marginTop: isMobileTablet && theme.spacing(3) }}
        container
        direction="column"
        alignItems="center"
      >
        <Typography sx={{ color: theme.palette.grey[0] }} variant="h6">
          INFORMATION
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          About Us
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          Curriculum
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          Our Products & Courses
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          Our Team
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          Gallery
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid
        sx={{ marginTop: isMobileTablet && theme.spacing(3) }}
        container
        direction="column"
        alignItems="center"
      >
        <Typography sx={{ color: theme.palette.grey[0] }} variant="h6">
          CONTACTS
        </Typography>
        <Typography sx={{ color: theme.palette.grey[0] }} variant="subtitle2">
          info@creptie.org
        </Typography>
        <Typography sx={{ color: theme.palette.grey[0] }} variant="subtitle2">
          +254740248823
        </Typography>
      </Grid>
      <Grid
        sx={{ marginTop: isMobileTablet && theme.spacing(3) }}
        container
        direction="column"
        alignItems="center"
      >
        <Typography sx={{ color: theme.palette.grey[0] }} variant="h6">
          SOCIALS
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <WhatsAppIcon
            sx={{ color: "#fff", marginRight: "5px" }}
            fontSize="small"
          />
          <TwitterIcon
            sx={{ color: "#fff", marginRight: "5px" }}
            fontSize="small"
          />
          <FacebookIcon
            sx={{ color: "#fff", marginRight: "5px" }}
            fontSize="small"
          />
          <InstagramIcon sx={{ color: "#fff" }} fontSize="small" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterSection;

FooterSection.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
};
