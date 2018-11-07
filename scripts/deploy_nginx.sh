#!/bin/sh

# then setup nginx server
ssh root@178.128.54.4 <<EOF
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  docker pull dottjt/watashi-nginx
  docker stop watashi-nginx
  docker rm watashi-nginx

  docker run -d watashi-nginx \ 
    -p 80:80 -p 443:443 \
    -v /docker/letsencrypt-docker-nginx/src/production/production-site:/usr/share/nginx/html \
    -v /docker/letsencrypt-docker-nginx/src/production/dh-param/dhparam-2048.pem:/etc/ssl/certs/dhparam-2048.pem \
    -v /docker-volumes/etc/letsencrypt/live/watashiengine.com/fullchain.pem:/etc/letsencrypt/live/watashiengine.com/fullchain.pem \
    -v /docker-volumes/etc/letsencrypt/live/watashiengine.com/privkey.pem:/etc/letsencrypt/live/watashiengine.com/privkey.pem \

  exit
EOF

echo 'all done!'

# -v ./production.conf:/etc/nginx/conf.d/default.conf \
