import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import backgroundImage from "/imgs/chelsea-fern-r_-M00daj2Y-unsplash.jpg";
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
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    overflow: "hidden",
    position: "fixed",
    width: "100vw",
  },
  buttonContainer: {
    display: "inline-block",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "40px 80px",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
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
}));

export function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.buttonContainer}>
          <Button.Group>
            <Button
              as="a"
              href="https://github.com/AlexJelani"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
            >
              <FaGithub className={classes.icon} />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/jelani-alexander"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
            >
              <FaLinkedinIn className={classes.icon} />
            </Button>
          </Button.Group>
        </div>
      </div>
    </>
  );
}





