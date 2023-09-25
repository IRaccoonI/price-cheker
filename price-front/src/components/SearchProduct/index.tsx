import MarketGrid from "@/src/components/MarketGrid";
import { Box, Card, Grid, Input } from "@mui/material";
import { FC, memo, useState } from "react";

const SearchProduct: FC = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <Card>
      <Input
        type="text"
        fullWidth
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Box mt={3}>
        <MarketGrid search={search} />
      </Box>
    </Card>
  );
};

export default memo(SearchProduct);
