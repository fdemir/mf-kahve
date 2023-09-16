FROM node:20.5.0-slim AS base
# TODO: use corepack
RUN npm install -g pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
COPY . /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

FROM base AS common
COPY --from=prod-deps /app/packages/common/node_modules/ /app/packages/common/node_modules
COPY --from=build /app/packages/ui/dist /app/packages/ui/dist

FROM nginx:stable-alpine AS app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/composer/dist /usr/share/nginx/html

COPY --from=build /app/apps/search/dist /usr/share/nginx/html/mf/search
COPY --from=build /app/apps/cart/dist /usr/share/nginx/html/mf/cart

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
