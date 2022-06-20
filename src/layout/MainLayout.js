import React from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const MainLayout = ({ children, isMobileTablet, heroRef }) => {
  const theme = useTheme();
  // const [show, setShow] = React.useState(false);
  // const [offset, setOffset] = React.useState(0);
  // React.useEffect(() => {
  //   console.log("Y1", document.documentElement.scrollTop);
  //   const onScroll = () => {
  //     if (window.pageYOffset > 1) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll, true);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  // console.log(offset);
  return (
    <>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{
          width: "100%",
          overflowX: "hidden",
          backgroundColor: theme.palette.grey[0],
          height: "100vh",
        }}
      >
        {/* {show && ( */}
        <IconButton
          sx={{
            position: "fixed",
            bottom: "10px",
            right: isMobileTablet ? "10px" : "30px",
            zIndex: 1000,
            backgroundColor: theme.palette.primary.main,
          }}
          onClick={() => {
            heroRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </IconButton>
        {children}
      </Grid>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobileTablet: PropTypes.bool.isRequired,
  heroRef: PropTypes.object.isRequired,
};
