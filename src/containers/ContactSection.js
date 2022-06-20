import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const ContactSection = ({ isMobileTablet, contactRef }) => {
  const theme = useTheme();
  return (
    <Grid
      ref={contactRef}
      sx={{
        backgroundColor: isMobileTablet && theme.palette.grey[800],
        zIndex: "800",
      }}
      container
      direction="column"
      alignItems="center"
    >
      <Grid
        sx={{
          padding: theme.spacing(3),
          backgroundColor: theme.palette.grey[800],
          width: "70%",
        }}
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        wrap={!isMobileTablet ? "nowrap" : "wrap"}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, textAlign: isMobileTablet && "center" }}
        >
          Got any questions? Feel free to reach us anytime
        </Typography>
        <Grid
          sx={{
            marginTop: isMobileTablet && theme.spacing(2),
            width: !isMobileTablet ? "30%" : "100%",
          }}
          container
          direction="column"
          alignItems="center"
        >
          <Typography
            sx={{ textAlign: "center", fontWeight: 600 }}
            variant="subtitle2"
          >
            Email
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: theme.palette.secondary.main,
              fonWeight: 600,
            }}
            variant="subtitle2"
          >
            info@creptie.org
          </Typography>
        </Grid>
        <Grid
          sx={{
            marginTop: isMobileTablet && theme.spacing(2),
            width: !isMobileTablet ? "30%" : "100%",
          }}
          container
          direction="column"
          alignItems="center"
        >
          <Typography
            sx={{ textAlign: "center", fontWeight: 600 }}
            variant="subtitle2"
          >
            WhatsApp
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: theme.palette.secondary.main,
              fonWeight: 600,
            }}
            variant="subtitle2"
          >
            +254740248823
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactSection;

ContactSection.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
  contactRef: PropTypes.object.isRequired,
};
