terraform init - inside this folder
terraform apply - 

terraform plan -var 'environment=dev'
terraform plan -var 'environment=prod'


what is the difference between region and availability zones? 


prod and dev aws profiles have been created. 




# provider "aws" {
  #   access_key = "${var.access_key}"
  #   secret_key = "${var.secret_key}"
  #   region     = "${var.region}" 
  # }

  $HOME/.aws/credentials


  # FMClartiy Terraform: Application Base Stack

These Terraform scripts create container resources for an application. It assumes the infrastructure base stack already 
exists (we have another repo for that).

The app base stack are ECS Fargate services, Application Load Balancers, Route53 DNS entries and security groups 

All services are created in a VPC for a particular environment (e.g. prod). The environment name is prefixed 
to each resource name. 

## Getting Started

Before you begin make sure you have:
1. Terraform installed
2. AWS CLI installed
3. Have you AWS credentials set up locally (see below)

### AWS Credentials 

Terraform uses your AWS key and secret to create resources on AWS. You must have AWS credentials with rights to perform 
all the necessary actions. Your credentials must be configured in
your local AWS credentials file. The default location is `$HOME/.aws/credentials`

You can use the AWS CLI to configure your credentials. It is expected that the credentials are set in a profile matching `dev` `staging` `demo` or `prod`. E.g.:

```bash
$ aws configure --profile dev
AWS Access Key ID [None]: BLAH........
AWS Secret Access Key [None]: random........
Default region name [None]: ap-southeast-2
Default output format [None]: json
```

The terraform script will pick the the correct credentials based on the AWS credentials profile name.

### First step

When you first check out the project set everything up with:

```bash
$ terraform init
```

## Making infrastructure changes

To see the execution plan, before applying the changes for real, run:
(change the environment to one of dev, staging, demo, prod)
```bash
$ terraform plan -var 'environment=dev'
```


To apply your changes to AWS, run:
(change the environment to one of dev, staging, demo, prod)
```bash
$ terraform apply -var 'environment=dev'
```

### Destroying a stack 

(WARNING - DON'T DO THIS UNLESS YOU ARE SURE)

```bash
terraform destroy -var 'environment=dev'
```