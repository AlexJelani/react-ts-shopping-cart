import { Link } from "react-router-dom";
import backgroundImage from "/imgs/anomaly-WWesmHEgXDs-unsplash.jpg";
import { Button } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
    backgroundColor: "black",
    color: "white",
    padding: "40px 80px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    fontSize: "24px",
    cursor: "pointer", // added cursor pointer
    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
    },
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/store"}>
      <Button size="huge" className={classes.button}>
          Lets go shopping!
        </Button>
      </Link>
    </div>
  );
}
