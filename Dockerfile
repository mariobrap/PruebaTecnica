FROM node:20-alpine as builder
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i --production-only
COPY . /usr/src/app/
RUN npm run build

FROM node:20-alpine as appcontainer

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/src/main.js"]