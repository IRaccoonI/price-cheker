import { client } from "@/src/fetchers";

const basePromise = new Promise((r) => setTimeout(r, 2000));

export const fetchSearch = async (search: string) => {
  await basePromise;
  return client
    .get("/api/v1/search", { query: { search } })
    .then((r) => r.data);
};
