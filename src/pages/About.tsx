import { Link } from "react-router-dom";
// import "../style/home.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import backgroundImage from "/imgs/chelsea-fern-r_-M00daj2Y-unsplash.jpg";

import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

//    backgroundImage: `url(${backgroundImage})`,

const useStyles = makeStyles(
  (theme: {
    mixins: { toolbar: { minHeight: any } };
    palette: { primary: { main: any; contrastText: any; dark: any } };
    shape: { borderRadius: any };
    shadows: any[];
  }) => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",
      overflow: 'hidden', // prevent scrolling

    },
    button: {
      backgroundColor: "black", //updated color
      color: theme.palette.primary.contrastText,
      padding: "40px 80px", /* increased padding */
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[5],
      // fontSize: "24px", /* increased font size */
      "&:hover": {
        backgroundColor: "yellow",
        color: "black", //new property to change text color on hover

      },
    },
    icon: {
      fontSize: "40px",
      marginRight: "10px",
      color: "white",
      "&:hover": {
        color: "black",
      },
    },
  })
);


export function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button}>
          <a
            href="https://github.com/AlexJelani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={classes.icon} /*style={{ fontSize: "40px", marginRight: "10px", color: "white" }}*/ />
          </a>
          </Button>
          <Button variant="contained" className={classes.button}>
          <a
            href="https://linkedin.com/in/jelani-alexander"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className={classes.icon}/*style={{ fontSize: "40px", marginRight: "10px", color: "white" }}*//>
          </a>
        </Button>
      </div>
    </>
  );
}
