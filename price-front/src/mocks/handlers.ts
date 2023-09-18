import { rest } from "msw";
import { Book } from "./types";
import { API, API_REST, MARKET } from "@/src/fetchers/types";

type Fetchers = {
  [K in keyof API]: {
    getMock: () => API[K]["response"];
    method: API[K]["method"];
  };
};

const fetchers: Fetchers = {
  [API_REST.GET_SEARCH]: {
    getMock: () => {
      return [
        {
          imgSrc:
            "https://c.dns-shop.ru/thumb/st4/fit/200/200/060bfb47a5152205916cb00cedd5ca0d/238c2c44b351d721bbfdf30043ecb77768150753991223b46c6e314ccf6d59c9.jpg",
          totalRating: 2000,
          averageRating: 4.2,
          id: "test1",
          price: 10023,
          title: "gfdqwe",
          market: MARKET.DNS,
        },
        {
          imgSrc:
            "https://c.dns-shop.ru/thumb/st4/fit/200/200/060bfb47a5152205916cb00cedd5ca0d/238c2c44b351d721bbfdf30043ecb77768150753991223b46c6e314ccf6d59c9.jpg",
          totalRating: 2000,
          averageRating: 4.8,
          id: "test2",
          price: 12003,
          title: "fsweewq",
          market: MARKET.DNS,
        },
        {
          imgSrc:
            "https://c.dns-shop.ru/thumb/st4/fit/200/200/060bfb47a5152205916cb00cedd5ca0d/238c2c44b351d721bbfdf30043ecb77768150753991223b46c6e314ccf6d59c9.jpg",
          totalRating: 2000,
          averageRating: 4.8,
          id: "test3",
          price: 12300,
          title: "qweasd",
          market: MARKET.DNS,
        },
      ];
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
