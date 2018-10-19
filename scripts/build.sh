#!/bin/bash

# view commands being executed
set -x 

# Set env vars with the same name to override any of these
ENVIRONMENT="${DEPLOY_ENV:-dev}"
AWS_ACCOUNT_ID="${AWS_ACCOUNT_ID:-319937940031}"
AWS_REGION="${AWS_REGION:-ap-southeast-2}"
AWS_APP_NAME="${AWS_APP_NAME:-webapp}"

ECR_REPO="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ENVIRONMENT-$AWS_APP_NAME-ecr"

# Ensure we can log into ECR
eval $(aws ecr get-login --no-include-email --profile $ENVIRONMENT --region $AWS_REGION)

echo Building apollo docker image;
docker build --build-arg INSTALL_MONGO=false -t fmclarity/webapp .

echo Uploading image to AWS ECR repo;
IMAGE_ID=`docker images fmclarity/webapp --format "{{.ID}}"`
docker tag $IMAGE_ID $ECR_REPO
docker push $ECR_REPO
