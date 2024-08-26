import Elysia, { Static } from "elysia";

import dayjs from "dayjs";

import env from "@env";
import { api } from "@storage";
import { NinjaTypeQuote } from "@types";

const app = new Elysia({
  prefix: "/api",
}).get(
  "/love",
  async () => {
    let item = await api.love.get();
    if (
      item !== null &&
      dayjs().diff(dayjs(item.createAt), "minute", true) > env.CACHE_TTL
    ) {
      item = null;
    }
    if (item === null) {
      item = {
        data: await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=love",
          {
            headers: {
              "X-Api-Key": env.NINJAS_API_KEY,
            },
          },
        )
          .then((response) => {
            return response.json();
          })
          .then((data: Static<typeof NinjaTypeQuote>[]) => {
            return data;
          }),
        createAt: dayjs().toDate(),
      };
      api.love.set(item);
    }

    return {
      quote: item.data[0].quote,
      author: item.data[0].author,
      category: item.data[0].category,
    };
  },
  {
    response: NinjaTypeQuote,
  },
);

export default app;
