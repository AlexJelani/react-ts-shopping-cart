import { List, Stack } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Button } from "semantic-ui-react";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    
    <List component={Stack} direction="row" gap={0} >
      <img src={item?.imgUrl} style={{ width: "125px", height: "75px", padding:"25px", objectFit:"cover" }}  />
      <button className="ui button" role="button">Btn with Semantic-UI</button>

    </List>
  );
}
