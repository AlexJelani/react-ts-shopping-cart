import { IconButton, List, Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Wrapper } from "../App.styles";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useMediaQuery } from "@mui/material";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Define the breakpoints for different screen sizes
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  return (
    <Wrapper>
      <Drawer
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : isTablet ? "75%" : "50%", // Set the width based on the screen size
            maxWidth: 500, // Limit the maximum width to 500px
          },
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
          <IconButton onClick={closeCart} sx={{ color: "#0d47a1" }}>
            <CancelIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4" m={4}>
            Your shopping cart{" "}
            <ShoppingBagIcon fontSize="large" sx={{ color: "#0d47a1" }} />
          </Typography>
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
