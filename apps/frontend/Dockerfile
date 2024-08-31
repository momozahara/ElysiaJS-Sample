FROM oven/bun:canary AS base
WORKDIR /app

FROM base AS deps
COPY ./apps/frontend/package.json .
RUN bun install --production

FROM base AS build
ARG VITE_BACKEND_BASE_URL
ENV VITE_BACKEND_BASE_URL=$VITE_BACKEND_BASE_URL
COPY . .
COPY --from=deps /app/node_modules ./apps/frontend/node_modules
RUN cd ./apps/frontend && bun run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/apps/frontend/dist .
CMD [ "nginx", "-g", "daemon off;" ]
