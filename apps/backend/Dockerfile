FROM oven/bun:canary AS base
WORKDIR /app

FROM base AS dep
COPY package.json .
RUN bun install --production

FROM base
COPY --from=dep /app/node_modules node_modules
COPY src src
COPY tsconfig.json .

CMD [ "bun", "--smol", "src/index.ts" ]
