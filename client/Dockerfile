FROM node:9.11.2-alpine as client-deps

ENV NODE_ENV production
ENV NODE_PATH /usr/src/app/client/node_modules
ENV PATH /usr/src/app/client/node_modules/.bin:$PATH

WORKDIR /usr/src/app/client
COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000
CMD ["npm", "start"]

# RUN yarn build

# FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
