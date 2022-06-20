import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
// import { useRouter } from "next/router";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { nanoid } from "nanoid";
import IconButton from "@mui/material/IconButton";
import MuiButton from "../components/Button";

export default function AppHeader({
  isMobileTablet,
  window: win,
  contactRef,
  aboutRef,
  curriculumRef,
  coursesRef,
  teamRef,
}) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItems = [
    {
      item: "About Us",
    },
    {
      item: "Our Curriculum",
    },
    {
      item: "Our Products & Courses",
    },
    {
      item: "Our Team",
    },
    {
      item: "Gallery",
    },
    {
      item: "Contact Us",
    },
  ];
  function handleMobileScroll(val) {
    return {
      "Contact Us": contactRef.current.scrollIntoView({
        behavior: "smooth",
      }),
      "About Us": aboutRef.current.scrollIntoView({
        behavior: "smooth",
      }),
      "Our Curriculum": curriculumRef.current.scrollIntoView({
        behavior: "smooth",
      }),
      "Our Products & Courses": coursesRef.current.scrollIntoView({
        behavior: "smooth",
      }),
      "Our Team": teamRef.current.scrollIntoView({
        behavior: "smooth",
      }),
    }[val];
  }
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, color: theme.palette.primary.main, my: 2 }}
      >
        CREPTIE.ORG
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ item }) => (
          <ListItem
            onClick={() => {
              handleDrawerToggle();
              handleMobileScroll(item);
            }}
            key={nanoid()}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <MuiButton variant="contained" text="SCHEDULE A DEMO" height={36} />
      </Box>
    </Box>
  );
  const container = win !== undefined ? () => win().document.body : undefined;
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.grey[0],
      }}
    >
      <AppBar
        sx={{
          backgroundColor: theme.palette.grey[0],
          height: 80,
          justifyContent: "center",
          boxShadow: "none",
        }}
        position="fixed"
      >
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            wrap="nowrap"
            direction="row"
          >
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: theme.palette.primary.main }}
              >
                CREPTIE.ORG
              </Typography>
            </Box>
            {!isMobileTablet && (
              <>
                <Box>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    wrap="nowrap"
                  >
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() =>
                        aboutRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      About Us
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() =>
                        curriculumRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Our Curriculum
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() =>
                        coursesRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Our Products & Courses
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() =>
                        teamRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Our Team
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                    >
                      Gallery
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() => {
                        contactRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Grid>
                </Box>
                <Box>
                  <MuiButton
                    variant="contained"
                    text="SCHEDULE A DEMO"
                    height={36}
                  />
                </Box>
              </>
            )}
            {isMobileTablet && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: theme.palette.grey[900] }} />
              </IconButton>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

AppHeader.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
  contactRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
  curriculumRef: PropTypes.object.isRequired,
  coursesRef: PropTypes.object.isRequired,
  teamRef: PropTypes.object.isRequired,
};