import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Card variant="outlined" sx={{ width: "55%" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CardMedia
        component="img"
        image={item?.imgUrl}
        style={{ width: "125px", height: "100%", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" component="div">
          {item?.name}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  </Card>
  );
}
