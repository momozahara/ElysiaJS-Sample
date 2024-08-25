import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";

import env from "@env";

import api from "./routes/api";

const app = new Elysia()
  .use(() => {
    const app = new Elysia();
    if (env.NODE_ENV === "development") {
      console.log('NODE_ENV === "development" enabled swagger');
      app.use(swagger());
    }
    return app;
  })
  .use(cors())
  .use(api)
  .listen(env.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type Application = typeof app;
