import { MarketGridItem } from "@/src/components/MarketGrid/MarketGridItem";
import { fetchSearch } from "@/src/fetchers/search";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, memo } from "react";

interface MarketGridProps {
  search: string;
}

const MarketGrid: FC<MarketGridProps> = ({ search }) => {
  const { data, isLoading } = useQuery([search], {
    queryFn: () => fetchSearch(search),
  });

  if (isLoading) {
    return <>loading...</>;
  }

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

export default memo(MarketGrid);
