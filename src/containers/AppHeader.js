import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import MuiButton from "../components/Button";
import ImageOverride from "../components/Image";

export default function AppHeader({
  isMobileTablet,
  window: win,
  contactRef,
  aboutRef,
  curriculumRef,
  coursesRef,
  teamRef,
  pathname = "",
}) {
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <img
        alt="Creptie Logo"
        height={50}
        width={100}
        src="/images/logo/creptielogo.jpg"
        style={{ objectFit: "fill", objectPosistion: "center center" }}
      />
      <Divider />
      <List>
        <ListItem
          onClick={() => {
            if (pathname === "/gallery") {
              router.push("/");
              return false;
            }
            aboutRef.current.scrollIntoView();
            handleDrawerToggle();
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            if (pathname === "/gallery") {
              router.push("/");
              return false;
            }
            curriculumRef.current.scrollIntoView();
            handleDrawerToggle();
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Our Curriculum" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            if (pathname === "/gallery") {
              router.push("/");
              return false;
            }
            coursesRef.current.scrollIntoView();
            handleDrawerToggle();
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Our Products & Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            if (pathname === "/gallery") {
              router.push("/");
              return false;
            }
            teamRef.current.scrollIntoView();
            handleDrawerToggle();
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Our Team" />
          </ListItemButton>
        </ListItem>
        <Link href="/gallery">
          <a>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
          </a>
        </Link>
        <ListItem
          onClick={() => {
            if (pathname === "/gallery") {
              router.push("/");
              return false;
            }
            contactRef.current.scrollIntoView();
            handleDrawerToggle();
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
      <Link href="https://api.whatsapp.com/send?phone=254740248823" passHref>
        <a target="_blank">
          <Box>
            <MuiButton
              variant="contained"
              text="SCHEDULE A DEMO"
              height={36}
              sx={{ backgroundColor: theme.palette.primary.btn }}
            />
          </Box>
        </a>
      </Link>
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
              <img
                alt="Creptie Logo"
                height={50}
                width={100}
                src="/images/logo/creptielogo.jpg"
                style={{ objectFit: "fill", objectPosistion: "center center" }}
              />
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
                      onClick={() => {
                        if (pathname === "/gallery") {
                          router.push("/");
                          return false;
                        }
                        aboutRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() => {
                        if (pathname === "/gallery") {
                          router.push("/");
                          return false;
                        }
                        curriculumRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Our Curriculum
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() => {
                        if (pathname === "/gallery") {
                          router.push("/");
                          return false;
                        }
                        coursesRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Our Products & Courses
                    </Typography>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() => {
                        if (pathname === "/gallery") {
                          router.push("/");
                          return false;
                        }
                        teamRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Our Team
                    </Typography>
                    <Link href="/gallery" prefetch={false}>
                      <a>
                        <Typography
                          sx={{
                            marginRight: theme.spacing(2),
                            cursor: "pointer",
                          }}
                          variant="body1"
                        >
                          Gallery
                        </Typography>
                      </a>
                    </Link>
                    <Typography
                      sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
                      variant="body1"
                      onClick={() => {
                        if (pathname === "/gallery") {
                          router.push("/");
                          return false;
                        }
                        contactRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Grid>
                </Box>
                <Link
                  href="https://api.whatsapp.com/send?phone=254740248823"
                  passHref
                >
                  <a target="_blank">
                    <Box>
                      <MuiButton
                        variant="contained"
                        text="SCHEDULE A DEMO"
                        height={36}
                        sx={{
                          color: theme.palette.grey[0],
                          backgroundColor: theme.palette.primary.btn,
                        }}
                      />
                    </Box>
                  </a>
                </Link>
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
