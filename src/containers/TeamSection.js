import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import TeamCard from "../components/TeamCard";

const TeamSection = ({ isMobileTablet, teamRef }) => {
  const theme = useTheme();
  const teamDataOne = [
    {
      name: "Annette Mwende",
      role: "Founder & CEO",
      src: "/images/team/Annette.jpg",
      alt: "image of Annette Mwende,CEO",
    },
    // {
    //   name: "Polycarp Kavoo",
    //   role: "Co-Founder & CTO",
    //   src: "/images/team/Poly.jpg",
    //   alt: "image of Polycarp Kavoo, CTO",
    // },
  ];

  const teamDataTwo = [
    {
      name: "Elsy Ntinyari",
      role: "Trainer",
      src: "/images/team/Elsy.jpg",
      alt: "image of Elsy Ntinyari",
    },
    {
      name: "Melissa Kirwa",
      role: "Trainer",
      src: "/images/team/Melissa.jpg",
      alt: "image of Melissa Kirwa",
    },
    {
      name: "Willy Wairagu",
      role: "Trainer",
      src: "/images/team/Willy passport.jpg",
      alt: "image of Willy Wairagu",
    },
  ];

  return (
    <Grid
      ref={teamRef}
      container
      alignItems="center"
      direction="column"
      wrap="nowrap"
      sx={{
        padding: "30px 0 50px 0",
        backgroundColor: theme.palette.grey[800],
      }}
    >
      <Typography
        sx={{
          marginTop: theme.spacing(2),
          padding: "0 24px 0 24px",
          textAlign: "center",
        }}
        variant="h4"
      >
        MEET THE TEAM BEHIND
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
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{ marginBottom: "16px", marginTop: theme.spacing(3) }}
      >
        {teamDataOne &&
          teamDataOne.length > 0 &&
          teamDataOne.map(({ alt, src, name, role }, index) => (
            <TeamCard
              index={index}
              key={nanoid()}
              alt={alt}
              role={role}
              name={name}
              src={src}
              isMobileTablet={isMobileTablet}
            />
          ))}
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        {teamDataTwo &&
          teamDataTwo.length > 0 &&
          teamDataTwo.map(({ alt, src, name, role }, index) => (
            <TeamCard
              index={index}
              key={nanoid()}
              alt={alt}
              role={role}
              name={name}
              src={src}
              isMobileTablet={isMobileTablet}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default TeamSection;

TeamSection.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
  teamRef: PropTypes.object.isRequired,
};
