import { rest } from "msw";
import { Book } from "./types";

export const handlers = [
  rest.get("/search", (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: "Lord of the Rings",
        imageUrl: "/book-cover.jpg",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),
];
