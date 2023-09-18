import { MarketGridItem } from "@/src/components/marketGrid/marketGridItem";
import { fetchSearch } from "@/src/fetchers/search";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

export const MarketGrid: FC = () => {
  const { data } = useQuery({
    queryFn: fetchSearch,
  });

  if (!data) {
    return <>pupupu</>;
  }

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <MarketGridItem key={item.id} {...item} />
      ))}
    </Grid>
  );
};
