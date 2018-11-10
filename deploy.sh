#!/bin/sh

mkdir -p $TRAVIS_BUILD_DIR/tmp/build
docker cp watashi-client:/usr/src/app/client/build/. $TRAVIS_BUILD_DIR/tmp/build

# build static files
echo 'echo rsync tmp/build'
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/tmp/build/. root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production/production-site

# docker-compose.yml file
echo 'echo rsync watashi-nginx/docker-compose.yml'
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/watashi-nginx/docker-compose.yml root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production

# nginx.conf file
echo 'echo rsync watashi-nginx/nginx.conf'
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/watashi-nginx/nginx.conf root@178.128.54.4:/docker/letsencrypt-docker-nginx/src/production

ssh root@178.128.54.4 <<EOF
  echo "docker pull dottjt/watashi-api"
  docker pull dottjt/watashi-api

  echo "echo cd /docker/letsencrypt-docker-nginx/src/production/" 
  cd /docker/letsencrypt-docker-nginx/src/production/ 
  
  echo "echo docker-compose down"
  docker-compose down 
  
  echo "echo docker-compose up -d"
  docker-compose up -d 
  
  echo "echo exit"
  exit

EOF

echo 'all done!'
