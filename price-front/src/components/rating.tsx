import { FC } from "react";
import {
  Box,
  Rating as OriginalRating,
  SxProps,
  Typography,
} from "@mui/material";

export const Rating: FC<{
  totalRating: number;
  averageRating: number;
  sx?: SxProps;
}> = ({ averageRating, totalRating, sx }) => {
  return (
    <Box display="flex" alignItems="center" sx={sx}>
      <Typography mr={0.5} fontSize={14} lineHeight={1}>
        {totalRating}
      </Typography>
      <OriginalRating
        value={averageRating}
        precision={0.1}
        size="small"
        readOnly
      />
    </Box>
  );
};
