import { rest } from "msw";
import { Book } from "./types";
import { API, API_REST } from "@/src/fetchers/types";

type Fetchers = {
  [K in keyof API]: {
    getMock: () => API[K]["response"];
    method: API[K]["method"];
  };
};

const fetchers: Fetchers = {
  [API_REST.GET_SEARCH]: {
    getMock: () => {
      return [{ price: 123, title: "qwe" }];
    },
    method: "GET",
  },
};

export const handlers = Object.entries(fetchers).map(([restStr, opts]) => {
  return rest.get(restStr, (_req, res, ctx) => {
    return res(ctx.json(opts.getMock()));
  });
});

// export const handlers = [
//   rest.get("/search", (_req, res, ctx) => {
//     return res(
//       ctx.json<Book>({
//         title: "Lord of the Rings",
//         imageUrl: "/book-cover.jpg",
//         description:
//           "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
//       })
//     );
//   }),
// ];
