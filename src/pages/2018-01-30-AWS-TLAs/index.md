---
title: Guide to AWS acronyms
date: "2018-12-30T14:30:00.000Z"
path: "/AWS-TLAs/"
---

Amazon Web Services (AWS) has a lot of awful Three Letter Acronyms (TLAs), with many very similar abbreviations for very different services. This leads to some confusion between customers and support, because most of the time the customer says the acronym for one service but is actually talking about another service. Here's a breakdown of all the big abbreviations I can think of.

![letters](letters.jpg "letters")

## Rules of Thumb (RoT)

If it starts with an E, it probably means Elastic *(see Elastic Cloud Compute, Elastic Load Balancer, etc.)*

If it starts with an S, it probably means Simple *(see Simple Email Service, Simple Storage Service, etc.)*

If it starts with a C, it probably means Cloud *(see CloudWatch, CloudTrail, CloudFormation, etc.)*

## Table of Acronyms (ToA)

| **Acronym** | **Service** | **Notes** |
| --------|---------|-------|
| ACM     | AWS Certificate Manager | Formerly Amazon Certificate Manager, but now it's a TLA within a TLA |
| ALB     | Application Load Balancer | |
| CFN     | CloudFormation | **Not** CloudFront |
| CF      | CloudFront | See above |
| CB      | CodeBuild | |
| CP      | CodePipeline | Although I avoid this acronym most of the time |
| CD      | CodeDeploy | |
| CLB     | Classic Load Balancer | The sort of new name for the regular old ELBs, as opposed to new ALBs. But most people still just call them ELBs |
| EC2     | Elastic Cloud Compute | |
| EFS     | Elastic File System | |
| EB      | Elastic Beanstalk | |
| ECS     | Elastic Container Service | Until recently called EC2 Container Service, the release of Fargate means dropping the EC2 and replacing it with Elastic. ECS is constantly mixed up with EC2 by customers |
| ECR     | Elastic Container Repository | |
| ELB     | Elastic Load Balancer | **Not** Elastic Beanstalk |
| EBS     | Elastic Block Store | **NOT Elastic Beanstalk.** This is by far the worst offender.|
| IAM     | Identity and Access Management | **Not** Amazon Machine Image |
| AMI     | Amazon Machine Image | See above |
| ENI     | Elastic Network Interface | Depending on your native tongue, you might pronounce the letter E the same way English speaking people pronounce the letter A, meaning AMI and ENI sound very similar coming from an Italian person's mouth |
| OW      | OpsWorks | |
| RDS     | Relational Database System | |
| R53     | Route 53 | |
| S3      | Simple Storage Service | |
| SES     | Simple Email Service | |
| SNS     | Simple Notification Service | |
| SQS     | Simple Queue Service | |
| VPC     | Virtual Private Cloud | |
| KMS     | Key Management Service | |

I hope all is clear now, until AWS releases a bunch of new services.

*[Photo](https://unsplash.com/photos/BVyNlchWqzs) by Amador Loureiro on Unsplash*
