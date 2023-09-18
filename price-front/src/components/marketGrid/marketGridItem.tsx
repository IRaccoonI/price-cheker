import { Rating } from "@/src/components/rating";
import { GetSearchResponseItem } from "@/src/fetchers/types";
import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

export const MarketGridItem: FC<GetSearchResponseItem> = (props) => (
  <Grid xs={6} item>
    <Card variant="outlined">
      <Box p={2}>
        <Box display="flex" mb={2}>
          <Image
            alt="img"
            src={props.imgSrc}
            width={128}
            height={128}
            style={{ marginRight: 8 }}
          />
          <Typography variant="h5">{props.title}</Typography>
        </Box>
        <Rating
          averageRating={props.averageRating}
          totalRating={props.totalRating}
        />
        <Typography variant="body1">{props.price} руб.</Typography>
      </Box>
    </Card>
  </Grid>
);
