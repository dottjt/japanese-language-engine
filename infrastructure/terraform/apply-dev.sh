# Create/update the dev environment in dev AWS account
terraform workspace new default
terraform workspace select default
terraform apply -var environment=dev