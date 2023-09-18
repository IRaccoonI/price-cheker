import { client } from "@/src/fetchers";
import { API_REST, Fetcher } from "@/src/fetchers/types";

const basePromise = new Promise((r) => setTimeout(r, 2000));

export const fetchSearch: Fetcher<API_REST.GET_SEARCH> = async () => {
  await basePromise;
  return client.get(API_REST.GET_SEARCH).then((r) => r.data);
};
