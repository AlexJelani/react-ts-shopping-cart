import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";



type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  description,
}: StoreItemProps) {
  const quantity = 0;
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgUrl} alt={name} />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h5" color="text.primary">
              {formatCurrency(price)}
            </Typography>
          </div>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        {quantity === 0 ? (
          //Buttons too small
          <Button size="large" color="primary">
            + Add to Cart
          </Button>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: ".5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".5rem",
                }}
              >
                <Button size="small" color="error" variant="contained">
                  <Typography variant="h5" gutterBottom>
                    -
                  </Typography>
                </Button>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{ margin: "0 10px", fontSize: 18 }}
                >
                  {quantity} in{" "}
                  <ShoppingCartRoundedIcon sx={{ color: "#1e88e5" }} />
                </Typography>
                <Button size="small" color="success" variant="contained">
                  <Typography variant="h5" gutterBottom>
                    +
                  </Typography>
                </Button>
              </div>
              <Button size="small" color="error" variant="contained">
                <Typography variant="h5" gutterBottom>
                  Remove
                </Typography>
              </Button>
            </div>
          </>
        )}
      </CardActions>
    </Card>
  );
}

{
  /* <Typography variant="body2" color="text.secondary">
{description}
</Typography> */
}
