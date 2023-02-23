import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { blue } from "@mui/material/colors";



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
  const quantity = 1;
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
        {quantity === 0 ? (
          //Buttons too small
          <Button size="large" color="primary" >
            + Add to Cart
          </Button>
        ) : (
          <>
            <Button size="small" color="success" >
            <Typography variant="h5" gutterBottom>
              -
              </Typography>
            </Button>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ margin: '0 10px' }}
            >
              {quantity} in <ShoppingCartRoundedIcon/>
            </Typography>
            <Button size="small" color="primary" >
              <Typography variant="h5" gutterBottom>
              +
              </Typography>
            </Button>
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
