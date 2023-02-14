import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { Home } from '../pages/Home';
import { Store } from '../pages/Store';
import { About } from '../pages/About';

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Button color="inherit" Home={Link} to="/">
            Home
          </Button>
          <Button color="inherit" Store={Link} to="/store">
            Store
          </Button>
          <Button color="inherit" About={Link} to="/about">
            About
          </Button>
          <Box ml="auto">
            <IconButton color="inherit">
              <StoreIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
