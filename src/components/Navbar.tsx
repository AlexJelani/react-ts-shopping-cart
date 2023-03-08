import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Grid,
  Badge
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <AppBar position="fixed">
      <Toolbar >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button component={Link} to="/" color="inherit">
              <Box
                component="img"
                sx={{
                  height: 60,
                }}
                alt="Your logo."
                src={"/imgs/greatDev.png"}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/store" color="inherit">
              Store
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={openCart}
          >
            <Badge
              badgeContent={cartQuantity > 0 ? cartQuantity : null}
              color="error"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
