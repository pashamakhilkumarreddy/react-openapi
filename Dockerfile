ARG NODE_VERSION=20.14.0

FROM node:${NODE_VERSION} as build

USER node

WORKDIR /usr/src/app

COPY --chown=node:node ["package.json", "."]

RUN npm i

COPY --chown=node:node . .

RUN NODE_ENV=production npm run build

FROM nginx:stable-alpine as production

ENV NODE_ENV production

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]