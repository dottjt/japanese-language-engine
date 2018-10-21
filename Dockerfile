FROM node:10.12.0-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app/server
COPY package.json yarn.lock /tmp/server/
RUN cd /tmp/server && yarn
RUN cp -a /tmp/server/node_modules /usr/src/app/server

COPY . .

EXPOSE 3030
CMD ["yarn", "start"]
