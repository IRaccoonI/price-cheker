import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { MyThemeProvider } from "@/src/providers/theme";

import "@/src/mocks";

import "@/src/styles/index.scss";
import "@/src/styles/font.scss";
import { Layout } from "@/src/components/common/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <MyThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyThemeProvider>
    </React.StrictMode>
  );
}
