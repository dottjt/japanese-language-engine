FROM node:9.11.2-alpine

ENV NODE_ENV=development
WORKDIR /usr/src/app/server

COPY package*.json /usr/src/app/server
RUN npm install -g feathers-cli yarn
RUN npm install

COPY . .

EXPOSE 3030
CMD ["npm", "start"]
