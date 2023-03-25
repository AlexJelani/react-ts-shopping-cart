import { Link } from "react-router-dom";
import backgroundImage from "/imgs/anomaly-WWesmHEgXDs-unsplash.jpg";
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
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "16px 32px",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[5],
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
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
