import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";

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
}: StoreItemProps)
 { 
  const quantity = 0;
  return (
    <Card sx={{ maxWidth: 345, display:"flex", height:"100%", flexDirection: "column"}}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgUrl} alt={name} />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="textPrimary">
              {formatCurrency(price)}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        {quantity === 0 ?<Button size="small" color="primary" >
          + Add to Cart
        </Button>: null}
      </CardActions>
    </Card>
  );
}


{
  /* <Typography variant="body2" color="text.secondary">
{description}
</Typography> */
}
