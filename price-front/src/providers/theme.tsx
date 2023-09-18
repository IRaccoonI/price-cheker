import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const darkOrangeTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const MyThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={darkOrangeTheme}>{children}</ThemeProvider>;
};
