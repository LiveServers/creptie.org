import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const TeamCard = ({ src, alt, name, role, index, isMobileTablet }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 300,
        marginRight: index !== 2 && !isMobileTablet && theme.spacing(4),
        height: 280,
      }}
    >
      <CardMedia component="img" height="194" image={src} alt={alt} />
      <CardContent sx={{ backgroundColor: theme.palette.primary.main }}>
        <Typography
          sx={{ textAlign: "center" }}
          variant="body1"
          color={theme.palette.grey[0]}
        >
          {name}
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          variant="body1"
          color={theme.palette.primary.btn}
        >
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isMobileTablet: PropTypes.bool.isRequired,
};
