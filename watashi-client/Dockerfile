FROM node:10.12.0-alpine as build-deps

ENV NODE_ENV=production
ENV NODE_PATH=/usr/src/app/client/node_modules
ENV PATH=/usr/src/app/client/node_modules/.bin:$PATH

WORKDIR /usr/src/app/client
COPY package.json yarn.lock /tmp/client/
RUN cd /tmp/client && yarn
RUN cp -a /tmp/client/node_modules /usr/src/app/client

COPY . .

RUN yarn build

FROM nginx:1.13.9-alpine
COPY --from=build-deps /usr/src/app/client/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker image build -t dottjt:watashi-client-nginx .
# docker run -it -p 80:80 --rm dottjt:watashi-client-nginx

