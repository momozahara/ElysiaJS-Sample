import Elysia, { Static } from "elysia";

import dayjs from "dayjs";

import env from "@env";
import storage from "@storage";
import { NinjaResponseTypeQuote, ResponseTypeQuote } from "@types";

const app = new Elysia({
  prefix: "/api",
}).get(
  "/love",
  async () => {
    type SaveData = {
      data: Static<typeof NinjaResponseTypeQuote>[];
      createAt: Date;
    };
    let item = await storage.getItem<SaveData>("api:love");
    if (
      item !== null &&
      dayjs().diff(dayjs(item.createAt), "minute", true) > 1
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
          .then((data: Static<typeof NinjaResponseTypeQuote>[]) => {
            return data;
          }),
        createAt: dayjs().toDate(),
      };
      storage.setItem("api:love", item);
    }

    return {
      quote: item.data[0].quote,
      author: item.data[0].author,
      category: item.data[0].category,
    };
  },
  {
    response: ResponseTypeQuote,
  },
);

export default app;
