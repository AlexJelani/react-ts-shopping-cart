import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "/imgs/anomaly-WWesmHEgXDs-unsplash.jpg";

const styles = {
  home: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "luminosity",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  shopBtn: {
    fontFamily: "Comfortaa, cursive",
    color: "#eaeaea",
    backgroundColor: "black",
    fontSize: "5em",
    padding: "1em",
    cursor: "pointer",
    boxShadow: "10px 10px 10px gray",
  },
};

export function Home() {
  return (
    <Box sx={styles.home}>
      <Container>
        <Link to={"/store"}>
          <Button sx={styles.shopBtn}>Go Shopping</Button>
        </Link>
      </Container>
    </Box>
  );
}
