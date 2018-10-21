FROM node:10.12.0-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
COPY . .

RUN yarn

WORKDIR /usr/src/app/client
COPY client/package.json client/yarn.lock /usr/src/app/client/

RUN yarn

# COPY ./client .
RUN yarn build

WORKDIR /usr/src/app

EXPOSE 3030
CMD ["npm", "start"]
