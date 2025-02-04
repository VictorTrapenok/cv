---
slug: karpenter-for-gitlabrunner
title: Reducing CI/CD infrastructure costs
authors: [viktor]
tags: [Karpenter, GitLab, Kubernetes]
---

![Reducing CI/CD infrastructure costs](logo.webp)

I want to share how we at Nanoheal reduced our infrastructure costs by using GitLab runners in Kubernetes with Karpenter on spot instances.

At Nanoheal, we have a high level of developer activity, and CI/CD pipelines runs a critical role in our DevOps practices for continuous delivery.

# The Challenge

Previously, we ran three powerful EC2 virtual machines in our AWS account, dedicated to hosting GitLab runners. However, since our team worked within the same time zone, these machines sat idle almost 16 hours per day, as most work was done during business hours. During the remaining 8 hours, the servers were often overloaded due to peak demand.

# The Solution

I migrated GitLab runners to Kubernetes. We already had a Kubernetes cluster running in AWS, so I configured Karpenter to handle autoscaling within the cluster.

Karpenter uses taints and node affinity rules to determine on which nodes specific pods should run.

The configuration is set up so that Karpenter creates a node when a GitLab runner starts a pipeline. Then pipeline runs on a spot instance, specifically dedicated for CI/CD tasks. Our pipelines consume a significant amount of resources and can negatively impact other services if they share the same node in the cluster.

Once the pipeline completes, the node remains empty, thanks to the properly configured taints, which prevent other pods from being scheduled on it. After 30 minutes of inactivity, Karpenter automatically removes the node.

# The Result

By migrating CI/CD pipelines to our Kubernetes cluster, we eliminated the need for three always-on virtual machines. Instead, we now run 1–2 spot nodes in the cluster, running ~60 hours per week, drastically cutting down our infrastructure costs.

You can get [configuration files in my github](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner)

- Helm chart for gitlab runner: [gitlab-runner](https://gitlab.com/gitlab-org/charts/gitlab-runner)
- karpenter autoscaller: [karpenter](https://karpenter.sh)
- karpenter configuration [karpenter-coniguration.yaml](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner/blob/main/karpenter-coniguration.yaml)

# Any help?

Please ping me in [linkedin](https://www.linkedin.com/in/victor-trapenok/) if you need any help. I am open to work.
