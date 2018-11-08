#!/bin/sh

# send static html to the server
# CONTAINER_ID="$(docker ps -aqf "name=watashi-nginx")"
# docker cp "${CONTAINER_ID}":/usr/src/app/client/build /tmp
# rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/tmp root@178.128.54.4:/usr/share/nginx/html

ssh root@178.128.54.4 <<EOF
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  echo "pull dottjt/watashi-client"
  docker pull dottjt/watashi-client

  echo "stop watashi-client"
  docker stop watashi-client

  echo "rm watashi-client"
  docker rm watashi-client
  
  echo "docker run --name=watashi-client -d dottjt/watashi-client"
  docker run --name=watashi-client -d dottjt/watashi-client

  echo "docker cp watashi-client:/usr/share/nginx/html/. /docker/letsencrypt-docker-nginx/src/production/production-site"
  docker cp watashi-client:/usr/share/nginx/html/. /docker/letsencrypt-docker-nginx/src/production/production-site

  echo "docker cp watashi-client:/usr/share/nginx/html/. /docker/letsencrypt-docker-nginx/src/production/production-site"
  docker cp watashi-client:/usr/share/nginx/prod.conf /docker/letsencrypt-docker-nginx/src/production/production.conf

  echo "docker stop watashi-client"
  docker stop watashi-client

  echo "docker rm watashi-client"
  docker rm watashi-client

  echo "cd /docker/letsencrypt-docker-nginx/src/production/"
  cd /docker/letsencrypt-docker-nginx/src/production/

  echo "docker-compose up -d"
  docker-compose up -d

  echo "exit"
  exit
EOF

# docker run -it -p 80:80 dottjt/watashi-client
# to test container nginx file. 

echo 'all done!'

  # docker run --name=watashi-client \
  #   -p 80:80 -p 443:443 \
  #   -v /docker/letsencrypt-docker-nginx/src/production/dh-param/dhparam-2048.pem:/etc/ssl/certs/dhparam-2048.pem \
  #   -v /docker-volumes/etc/letsencrypt/live/watashiengine.com/fullchain.pem:/etc/letsencrypt/live/watashiengine.com/fullchain.pem \
  #   -v /docker-volumes/etc/letsencrypt/live/watashiengine.com/privkey.pem:/etc/letsencrypt/live/watashiengine.com/privkey.pem \
  #   -v /docker-volumes/data/letsencrypt:/data/letsencrypt \
  #   -d dottjt/watashi-client


# docker run --name=watashi-client -d dottjt/watashi-client
# -v /docker/letsencrypt-docker-nginx/src/production/production-site:/usr/share/nginx/html \
# docker cp watashi-client:/usr/src/app/client/build/. /docker/letsencrypt-docker-nginx/src/production/production-site