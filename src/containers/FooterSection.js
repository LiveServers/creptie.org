import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const FooterSection = ({
  contactRef,
  isMobileTablet,
  aboutRef,
  curriculumRef,
  coursesRef,
  teamRef,
}) => {
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
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          About Us
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
          onClick={() =>
            curriculumRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Curriculum
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
          onClick={() =>
            coursesRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Our Products & Courses
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
          onClick={() => teamRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Our Team
        </Typography>
        <Link href="/gallery" prefetch={false}>
          <a>
            <Typography
              sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
              variant="subtitle2"
            >
              Gallery
            </Typography>
          </a>
        </Link>
        <Typography
          sx={{ cursor: "pointer", color: theme.palette.grey[0] }}
          variant="subtitle2"
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
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
          <Link
            href="https://api.whatsapp.com/send?phone=254740248823"
            passHref
          >
            <a target="_blank">
              <WhatsAppIcon
                sx={{ color: "#fff", marginRight: "5px" }}
                fontSize="small"
              />
            </a>
          </Link>
          <Link href="#" passHref>
            <a target="_blank">
              <FacebookIcon
                sx={{ color: "#fff", marginRight: "5px" }}
                fontSize="small"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/creptieschool/" passHref>
            <a target="_blank">
              <LinkedInIcon
                sx={{ color: "#fff", marginRight: "5px" }}
                fontSize="small"
              />
            </a>
          </Link>
          <Link
            href="https://instagram.com/creptie_school?igshid=YmMyMTA2M2Y="
            passHref
          >
            <a target="_blank">
              <InstagramIcon sx={{ color: "#fff" }} fontSize="small" />
            </a>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterSection;

FooterSection.propTypes = {
  contactRef: PropTypes.object.isRequired,
  isMobileTablet: PropTypes.bool.isRequired,
  aboutRef: PropTypes.object.isRequired,
  curriculumRef: PropTypes.object.isRequired,
  coursesRef: PropTypes.object.isRequired,
  teamRef: PropTypes.object.isRequired,
};
