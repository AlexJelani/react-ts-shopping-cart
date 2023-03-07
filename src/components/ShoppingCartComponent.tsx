import { IconButton, List, Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Wrapper } from "../App.styles";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <Typography variant="h4" m={4}>
            Your shopping cart{" "}
            <ShoppingBagIcon fontSize="large" sx={{ color: "#0d47a1" }} />
          </Typography>
          <IconButton onClick={closeCart} sx={{ color: "#0d47a1" }}>
            <CancelIcon fontSize="large" />
          </IconButton>
        </div>
        {cartItems.length > 0 ? (
          <List component={Stack} sx={{ padding: "25px", gap: "16px" }}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Typography
              variant="h6"
              align="right"
              fontWeight="fontWeightBold"
              fontSize={20}
            >
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Typography>
          </List>
        ) : (
          <Typography variant="h6" align="center">
            Your shopping cart is empty.
          </Typography>
        )}
      </Drawer>
    </Wrapper>
  );
}

