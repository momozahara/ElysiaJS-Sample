FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS dep
COPY package.json .
RUN bun install --production

FROM base
COPY --from=dep /app/node_modules node_modules
COPY src src
COPY tsconfig.json .

CMD [ "bun", "src/index.ts" ]
