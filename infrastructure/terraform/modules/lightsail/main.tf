
/*
* ECR repository to store our Docker images
*/
# resource "aws_ecr_repository" "ecr_repository" {
#   name = "${var.environment}-${var.application_name}-ecr"
# }

resource "aws_lightsail_instance" "watashi_server" {
  name              = "watashi server"
  availability_zone = "us-east-2a"
  blueprint_id      = "nodejs_10_9_0"   // nodejs_7_10_0
  bundle_id         = "nano_1_0"
  key_pair_name     = "watashi_server_lightsail_key_pair"
}

/*
 * ECS task definitions
 */

/* Cloudwatch Log Group */
# resource "aws_cloudwatch_log_group" "app_logs" {
#   name = "/${var.environment}/${var.application_name}-logs"
#   retention_in_days = "90"

#   tags {
#     Environment = "${var.environment}"
#     Application = "${var.application_name}"
#   }
# }

/* Webapp ECS Task definition */
# data "aws_ecr_repository" "repository" {
#   name = "${var.repository_name}"
# }

# data "template_file" "app_template" {
#   template = "${file("${path.module}/tasks/default_definition.json")}"

#   vars {
#     name          = "${var.environment}-${var.application_name}"
#     image         = "httpd:2.4"
#     log_group     = "${aws_cloudwatch_log_group.app_logs.name}"
#     region        = "${var.region}"
#   }
# }

# // Lookup role defined on infra base stack
# data "aws_iam_role" "ecs_execution_role" {
#   name = "${var.environment}_ecs_task_execution_role"
# }

# resource "aws_ecs_task_definition" "app" {
#   family                   = "${var.environment}_${var.application_name}"
#   container_definitions    = "${data.template_file.app_template.rendered}"
#   requires_compatibilities = ["FARGATE"]
#   network_mode             = "awsvpc"
#   cpu                      = "256"
#   memory                   = "512"
#   execution_role_arn       = "${data.aws_iam_role.ecs_execution_role.arn}"
#   task_role_arn            = "${data.aws_iam_role.ecs_execution_role.arn}"

#   lifecycle {
#     create_before_destroy = true
#     ignore_changes        = ["task_definition"]
#   }
# }


# /*====
# ECS service
# ======*/

# /* Simply specify the family to find the latest ACTIVE revision in that family */
# data "aws_ecs_task_definition" "app" {
#   task_definition = "${aws_ecs_task_definition.app.family}"
#   depends_on = ["aws_ecs_task_definition.app"]
# }

# // Lookup the cluster for this environment (it was defined in infra base stack)
# data "aws_ecs_cluster" "cluster" {
#   cluster_name = "${var.aws_ecs_cluster_name}"
# }

# /* Security Group for ECS */
# resource "aws_security_group" "ecs_service" {
#   vpc_id      = "${var.vpc_id}"
#   name        = "${var.environment}-${var.application_name}-ecs-service-sg"
#   description = "Allow egress from container"

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 8
#     to_port     = 0
#     protocol    = "icmp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags {
#     Name        = "${var.environment}-${var.application_name}-ecs-service-sg"
#     Environment = "${var.environment}"
#   }
# }

# resource "aws_ecs_service" "app" {
#   name            = "${var.environment}-${var.application_name}"
#   task_definition = "${aws_ecs_task_definition.app.family}:${max("${aws_ecs_task_definition.app.revision}", "${data.aws_ecs_task_definition.app.revision}")}"
#   desired_count   = 2
#   launch_type     = "FARGATE"
#   cluster =       "${data.aws_ecs_cluster.cluster.id}"

#   network_configuration {
#     security_groups = ["${var.security_groups_ids}", "${aws_security_group.ecs_service.id}"]
#     subnets         = ["${var.subnets_ids}"]
#   }

#   load_balancer {
#     target_group_arn = "${aws_alb_target_group.alb_target_group.arn}"
#     container_name   = "${var.environment}-${var.application_name}"
#     container_port   = "3000"
#   }

#   lifecycle {
#     ignore_changes  = ["task_definition","desired_count"]
#   }

#   depends_on = ["aws_alb_target_group.alb_target_group"]
# }

# data "aws_iam_role" "ecs_autoscale_role" {
#   name = "${var.environment}_ecs_autoscale_role"
# }

# resource "aws_appautoscaling_target" "target" {
#   service_namespace  = "ecs"
#   resource_id        = "service/${var.aws_ecs_cluster_name}/${aws_ecs_service.app.name}"
#   scalable_dimension = "ecs:service:DesiredCount"
#   role_arn           = "${data.aws_iam_role.ecs_autoscale_role.arn}"
#   min_capacity       = 2
#   max_capacity       = 4
# }

# resource "aws_appautoscaling_policy" "up" {
#   name                    = "${var.environment}_${var.application_name}_scale_up"
#   service_namespace       = "ecs"
#   resource_id             = "service/${var.aws_ecs_cluster_name}/${aws_ecs_service.app.name}"
#   scalable_dimension      = "ecs:service:DesiredCount"

#   step_scaling_policy_configuration {
#     adjustment_type         = "ChangeInCapacity"
#     cooldown                = 60
#     metric_aggregation_type = "Maximum"

#     step_adjustment {
#       metric_interval_lower_bound = 0
#       scaling_adjustment = 1
#     }
#   }

#   depends_on = ["aws_appautoscaling_target.target"]
# }

# resource "aws_appautoscaling_policy" "down" {
#   name                    = "${var.environment}_${var.application_name}_scale_down"
#   service_namespace       = "ecs"
#   resource_id             = "service/${var.aws_ecs_cluster_name}/${aws_ecs_service.app.name}"
#   scalable_dimension      = "ecs:service:DesiredCount"

#   step_scaling_policy_configuration {
#     adjustment_type         = "ChangeInCapacity"
#     cooldown                = 60
#     metric_aggregation_type = "Maximum"

#     step_adjustment {
#       metric_interval_lower_bound = 0
#       scaling_adjustment = -1
#     }
#   }

#   depends_on = ["aws_appautoscaling_target.target"]
# }

# /* metric used for auto scale */
# resource "aws_cloudwatch_metric_alarm" "service_cpu_high" {
#   alarm_name          = "${var.environment}_${var.application_name}_cpu_utilization_high"
#   comparison_operator = "GreaterThanOrEqualToThreshold"
#   evaluation_periods  = "2"
#   metric_name         = "CPUUtilization"
#   namespace           = "AWS/ECS"
#   period              = "60"
#   statistic           = "Maximum"
#   threshold           = "85"

#   dimensions {
#     ClusterName = "${var.aws_ecs_cluster_name}"
#     ServiceName = "${aws_ecs_service.app.name}"
#   }

#   alarm_actions = ["${aws_appautoscaling_policy.up.arn}"]
#   ok_actions    = ["${aws_appautoscaling_policy.down.arn}"]
# }



