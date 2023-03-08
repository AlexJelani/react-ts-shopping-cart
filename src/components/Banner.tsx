import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../styles/banner/index";

export default function Banner() {
  const theme = useTheme();

  return (
    <>
      <BannerContainer>
        <BannerContent>
          <Typography variant="h6">
            Huge content okay
          </Typography>
          <BannerTitle variant="h2">New Bags</BannerTitle>
          <BannerDescription variant="subtitle1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iste repudiandae accusantium minima natus repellat deleniti
             accusamus quibusdam doloribus deserunt laudantium.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </>
  );
}
