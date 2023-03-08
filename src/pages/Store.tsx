
import {  Grid } from "@mui/material";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <Grid container spacing={2} paddingTop="1rem">
        {storeItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <StoreItem{...item}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

