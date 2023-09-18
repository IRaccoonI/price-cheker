import { Layout } from "@/src/components/layout";
import "../src/mocks";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
