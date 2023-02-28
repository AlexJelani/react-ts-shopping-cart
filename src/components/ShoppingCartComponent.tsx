import { IconButton, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Wrapper } from "../App.styles";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CancelIcon from "@mui/icons-material/Cancel";
import { flexbox } from "@mui/system";
import { blue } from "@mui/material/colors";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();

  return (
    <Wrapper>
      <Drawer
        PaperProps={{
          sx: { width: "50%" },
        }}
        anchor="right"
        open={isOpen}
        onClose={closeCart}
      >
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <Typography variant="h4" m={4}>
            Your cart
          </Typography>
          <IconButton onClick={closeCart} sx={{color:'#0d47a1'}}>
            <CancelIcon  fontSize="large"/>
          </IconButton>
        </div>
      </Drawer>
    </Wrapper>
  );
}
