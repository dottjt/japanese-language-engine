#!/bin/sh

# send static html to the server
# CONTAINER_ID="$(docker ps -aqf "name=watashi-nginx")"
# docker cp "${CONTAINER_ID}":/usr/src/app/client/build /tmp
# rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/tmp root@178.128.54.4:/usr/share/nginx/html


ssh root@178.128.54.4 <<EOF
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  docker pull dottjt/watashi-client
  docker stop watashi-client
  docker rm watashi-client

  docker run -d dottjt/watashi-client --name=watashi-client
  docker cp "$(docker ps -aqf "name=watashi-client")":/usr/src/app/client/build /docker/letsencrypt-docker-nginx/src/production

  exit
EOF

echo 'all done!'