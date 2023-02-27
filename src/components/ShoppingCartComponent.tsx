import Drawer from "@mui/material/Drawer";
import { Wrapper } from "../App.styles";
import { useShoppingCart } from "../context/ShoppingCartContext";

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
        <h1>Your Cart</h1>
      </Drawer>
    </Wrapper>
  );
}
