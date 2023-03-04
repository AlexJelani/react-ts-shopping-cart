import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Card variant="outlined" sx={{ width: "65%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={item?.imgUrl}
            style={{ width: "125px", height: "100%", objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="body2" component="div">
              {item?.name}
              {quantity > 1 && (
                <span
                  className="text-muted"
                  style={{ fontSize: ".75rem", color: "green" }}
                >
                  {" "}
                  x{quantity}
                </span>
              )}
              <div>{formatCurrency(item?.price)}</div>
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ mr: 1 }}>
            {formatCurrency(item?.price * quantity)}
          </Typography>
          <IconButton size="small" color="error" onClick={() => removeFromCart(id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
