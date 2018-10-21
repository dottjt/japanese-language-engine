variable "environment" {
  description = "Our AWS deployment environment. One of: dev or prod"
  default = "dev"
}

variable "application_name" {
  description = "Our application's name"
  default = "watashi"
}

variable "region" {
  description = "Region that the instances will be created"
  default = "us-east-1" // ap-southeast-2
}

variable "availability_zones" {
  default = ["us-east-1a", "us-east-1b", "us-east-1c", "us-east-1e"] // ["ap-southeast-2a", "ap-southeast-2b"]
}

provider "aws" {
  region  = "${var.region}"
  profile = "${var.environment == "prod" ? "prod" : "dev"}" //you must have AWS credentials file configured, that includes a profile with this name (see readme.md)
  allowed_account_ids = ["${var.environment == "prod" ? "654308318140" : "654308318140"}"] // 711757277897 actual, but doesn't seem to work?
}



/* Find required values from our infrastructure base stack */
# data "aws_vpc" "vpc" {
#   tags {
#     Environment = "${var.environment}"
#   }
# }

# data "aws_subnet_ids" "private" {
#   vpc_id = "${data.aws_vpc.vpc.id}"
#   tags {
#     Visability = "${var.environment}-private"
#   }
# }

# data "aws_subnet_ids" "public" {
#   vpc_id = "${data.aws_vpc.vpc.id}"
#   tags {
#     Visability = "${var.environment}-public"
#   }
# }

# data "aws_security_groups" "default" {
#   tags {
#     Name = "${var.environment}-default-sg"
#   }
# }


module "lightsail" { // was ec2
  source              = "./modules/lightsail"
  # region              = "${var.region}"
  # environment         = "${var.environment}"
  # application_name    = "${var.application_name}"
  # vpc_id              = "${data.aws_vpc.vpc.id}"
  # repository_name     = "${var.environment}-fmc-ecr"
  # aws_ecs_cluster_name= "${var.environment}-ecs-cluster"
  # subnets_ids         = ["${data.aws_subnet_ids.private.ids}"]
  # public_subnet_ids   = ["${data.aws_subnet_ids.public.ids}"]
  # security_groups_ids = [
  #   "${data.aws_security_groups.default.ids}"
  # ]
}


# module "redis" {
#   source              = "./modules/redis"
#   environment         = "${var.environment}"
#   vpc_id              = "${data.aws_vpc.vpc.id}"
#   application_name    = "${var.application_name}"
#   availability_zones  = ["${var.availability_zones}"]
#   security_group_ids  = ["${module.ecs.security_group_id}"]
#   subnet_ids          = ["${data.aws_subnet_ids.private.ids}"]
# }




// terraform import aws_lightsail_instance.gitlab_test 'custom gitlab'

