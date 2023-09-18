export enum API_REST {
  GET_SEARCH = "/api/v1/search",
}

export type ApiMethod = "POST" | "GET";

export type API = {
  [API_REST.GET_SEARCH]: {
    method: "GET";
    response: GetSearchResponse;
    body: undefined;
    query: undefined;
    params: undefined;
  };
};

export type GetSearchResponse = GetSearchResponseItem[];

export enum MARKET {
  DNS = "dns",
}

export interface GetSearchResponseItem {
  id: string;
  title: string;
  price: number;
  market: MARKET;
  imgSrc: string;
  averageRating: number;
  totalRating: number;
}

type Validate<T> = Pick<
  T,
  {
    [Prop in keyof T]: T[Prop] extends undefined ? never : Prop;
  }[keyof T]
>;

export type Fetcher<K extends keyof API> = keyof Validate<
  Pick<API[K], "body" | "query" | "params">
> extends never
  ? () => Promise<API[K]["response"]>
  : (
      params: Validate<Pick<API[K], "body" | "query" | "params">>
    ) => Promise<API[K]["response"]>;

type T = Fetcher<API_REST.GET_SEARCH>;
