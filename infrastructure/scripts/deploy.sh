#!/bin/bash

# view commands being executed
set -x 

# Set env vars with the same name to override any of these
ENVIRONMENT="${DEPLOY_ENV:-dev}"
AWS_ACCOUNT_ID="${AWS_ACCOUNT_ID:-319937940031}"
AWS_REGION="${AWS_REGION:-ap-southeast-2}"
AWS_APP_NAME="${AWS_APP_NAME:-webapp}"

# move into scripts folder
DIR="$( cd "$(dirname "$0")" ; pwd -P )"
cd $DIR

# Recursive chmod all *.sh files within the current directory
chmod u+x **/*.sh

# use fresh state each time to create task 
rm terraform.tfstate
rm terraform.tfstate.backup

$DIR/bin/install_jq.sh
$DIR/bin/install_terraform.sh

# Initiate terraform (it will download need modules like AWS)
./terraform init -input=false

# to create a plan and save it to the local file tfplan.
./terraform plan -input=false -out tfplan

# Apply the task-definition.tf file
./terraform apply -input=false tfplan

# The Task Definition has been updated with terraform. This just releases the latest image to that app
ECR_REPO="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ENVIRONMENT-$AWS_APP_NAME-ecr"
./bin/ecs-deploy.sh --cluster "$ENVIRONMENT-ecs-cluster" --service-name "$ENVIRONMENT-$AWS_APP_NAME" --image "$ECR_REPO:latest" --timeout 360 --profile "$ENVIRONMENT" --use-latest-task-def --region "$AWS_REGION" 