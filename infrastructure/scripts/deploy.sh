#!/bin/sh

openssl aes-256-cbc -K $encrypted_0aaf8c57bbc0_key -iv $encrypted_0aaf8c57bbc0_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin 
docker pull dottjt/watashi-client
docker run --rm -d -p 80:80 dottjt/watashi-client    
