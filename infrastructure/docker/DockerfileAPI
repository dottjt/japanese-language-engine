FROM node:10.12.0-alpine as build-deps

ENV NODE_ENV=production
ENV NODE_PATH=/usr/src/app/api/node_modules
ENV PATH=/usr/src/app/api/node_modules/.bin:$PATH

WORKDIR /usr/src/app/api
COPY package.json yarn.lock /tmp/api/
RUN cd /tmp/api && yarn
RUN cp -a /tmp/api/node_modules /usr/src/app/api

COPY . .

EXPOSE 4000
CMD ["yarn", "start"]

# docker image build -t dottjt:watashi-client-nginx .    // probably need an f function. 
# docker run -it -p 80:80 --rm dottjt:watashi-client-nginx
