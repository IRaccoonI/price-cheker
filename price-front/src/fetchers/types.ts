export enum API_REST {
  GET_SEARCH = "/api/search",
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

type GetSearchResponse = GetSearchResponseItem[];

interface GetSearchResponseItem {
  title: string;
  price: number;
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
