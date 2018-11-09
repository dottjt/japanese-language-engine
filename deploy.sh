#!/bin/sh

mkdir -p $TRAVIS_BUILD_DIR/tmp/build
docker cp watashi-client:/usr/src/app/client/build/. $TRAVIS_BUILD_DIR/tmp/build

ls tmp 
ls tmp/build

# build static files
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/tmp/build/. root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production/production-site

# docker-compose.yml file
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/watashi-nginx/docker-compose.yml root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production

# nginx.conf file
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/watashi-nginx/nginx.conf root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production

ssh root@178.128.54.4 <<EOF
  
  echo "cd /docker/letsencrypt-docker-nginx/src/production/" 
  cd /docker/letsencrypt-docker-nginx/src/production/ 

  echo "docker-compose up -d"
  docker-compose-up -d 
  
  echo "exit"
  exit

EOF

echo 'all done!'
