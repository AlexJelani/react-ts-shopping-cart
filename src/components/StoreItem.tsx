import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

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
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imgUrl} alt={name} />
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </div>
            <div>
              <Typography variant="h5" color="text.secondary">
                {price}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

{
  /* <Typography variant="body2" color="text.secondary">
{description}
</Typography> */
}
