import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";
import ImageOverride from "../components/Image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GalleryContainer = ({ isMobileTablet }) => {
  const [open, setOpen] = React.useState(false);
  const [ext, setExt] = React.useState("");
  const theme = useTheme();
  const imagesArray = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
  ];
  const handleOpen = (tag) => {
    setOpen(true);
    setExt(tag);
  };
  const handleClose = () => {
    setOpen(false);
    setExt("");
  };
  // eslint-disable-next-line consistent-return
  const handleNext = () => {
    if (imagesArray.indexOf(ext) === imagesArray.length - 1) {
      return false;
    }
    setExt(imagesArray[imagesArray.indexOf(ext) + 1]);
  };
  // eslint-disable-next-line consistent-return
  const handlePrev = () => {
    if (imagesArray.indexOf(ext) === 0) {
      return false;
    }
    setExt(imagesArray[imagesArray.indexOf(ext) - 1]);
  };
  return (
    <>
      <Grid
        sx={{ marginTop: theme.spacing(10) }}
        container
        alignItems="center"
        direction="column"
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            placeItems: "middle",
            width: "70%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              margin: "30px 0 30px 0",
              color: theme.palette.grey[900],
              textAlign: "center",
            }}
          >
            OUR GALLERY
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
          >
            {imagesArray.length > 0 &&
              imagesArray.map((item) => (
                <Box
                  sx={{ margin: "10px" }}
                  key={nanoid()}
                  onClick={() => handleOpen(item)}
                >
                  <ImageOverride
                    alt="images for gallery"
                    height={300}
                    width={300}
                    src={`/images/gallery/${item}`}
                  />
                </Box>
              ))}
          </Grid>
        </Box>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          sx={{
            padding: "0",
            width: isMobileTablet ? 300 : 500,
            height: isMobileTablet ? 400 : 500,
            overflow: "hidden",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            wrap="nowrap"
            sx={{ position: "absolute", zIndex: 1002 }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{ color: theme.palette.grey[900], fontWeight: 900 }}
              />
            </IconButton>
          </Grid>
          <Grid
            container
            sx={{ height: "100%", position: "absolute", zIndex: 1001 }}
            diection="column"
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              wrap="nowrap"
            >
              <IconButton onClick={handlePrev}>
                <ArrowBackIosIcon
                  sx={{ color: theme.palette.grey[900], fontWeight: 900 }}
                />
              </IconButton>
              <IconButton onClick={handleNext}>
                <ArrowForwardIosIcon
                  sx={{ color: theme.palette.grey[900], fontWeight: 900 }}
                />
              </IconButton>
            </Grid>
          </Grid>
          <ImageOverride
            alt="images for gallery"
            height={500}
            width={isMobileTablet ? 300 : 500}
            src={`/images/gallery/${ext}`}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryContainer;
