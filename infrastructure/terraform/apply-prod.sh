# Create/update the dev environment in dev AWS account
terraform workspace new prod
terraform workspace select prod
terraform apply -var environment=prod