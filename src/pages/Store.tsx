import { Container, Grid } from "@mui/material";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      {" "}
      <Container>
        <Grid container spacing={1} paddingTop="1rem">
          {storeItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
