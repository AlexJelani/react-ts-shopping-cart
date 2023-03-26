import { Link } from "react-router-dom";
import backgroundImage from "/imgs/anomaly-WWesmHEgXDs-unsplash.jpg";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

//    backgroundImage: `url(${backgroundImage})`,

const useStyles = makeStyles(
  (theme: {
    breakpoints: any;
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
      overflow: "hidden",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",
      position: "fixed",
      width: "100vw",
    },
    button: {
      overflow: "hidden",
      backgroundColor: "black", //updated color
      color: theme.palette.primary.contrastText,
      padding: "40px 80px" /* increased padding */,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[5],
      fontSize: "24px" /* increased font size */,
      "&:hover": {
        backgroundColor: "yellow",
        color: "black", //new property to change text color on hover
      },
      [theme.breakpoints.down("md")]: {
        padding: "20px 40px" /* reduced padding for medium screens */,
        fontSize: "20px" /* reduced font size for medium screens */,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "10px 20px" /* reduced padding for small screens */,
        fontSize: "16px" /* reduced font size for small screens */,
      },
    },
  })
);

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/store"}>
        <Button variant="contained" className={classes.button}>
          Lets go shopping!
        </Button>{" "}
      </Link>
    </div>
  );
}
