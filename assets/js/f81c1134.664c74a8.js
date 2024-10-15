"use strict";(self.webpackChunkviktor_t=self.webpackChunkviktor_t||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"karpenter-for-gitlabrunner","metadata":{"permalink":"/blog/karpenter-for-gitlabrunner","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-15-karpenter-for-gitlabrunner/index.md","source":"@site/blog/2024-10-15-karpenter-for-gitlabrunner/index.md","title":"Reducing CI/CD infrastructure costs","description":"I want to share how we at Nanoheal reduced our infrastructure costs by using GitLab runners in Kubernetes with Karpenter on spot instances.","date":"2024-10-15T00:00:00.000Z","tags":[{"inline":true,"label":"Karpenter","permalink":"/blog/tags/karpenter"},{"inline":true,"label":"GitLab","permalink":"/blog/tags/git-lab"},{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":1.6,"hasTruncateMarker":false,"authors":[{"name":"Viktor Trapenok","title":"Principal Engineer @ Nanoheal","url":"https://www.linkedin.com/in/victor-trapenok/","page":{"permalink":"/blog/authors/viktor"},"socials":{"github":"https://github.com/VictorTrapenok","linkedin":"https://www.linkedin.com/in/victor-trapenok/"},"imageURL":"https://viktor-t.com/img/me.jpeg","key":"viktor"}],"frontMatter":{"slug":"karpenter-for-gitlabrunner","title":"Reducing CI/CD infrastructure costs","authors":["viktor"],"tags":["Karpenter","GitLab","Kubernetes"]},"unlisted":false},"content":"I want to share how we at Nanoheal reduced our infrastructure costs by using GitLab runners in Kubernetes with Karpenter on spot instances.\\n\\nAt Nanoheal, we have a high level of developer activity, and CI/CD pipelines runs a critical role in our DevOps practices for continuous delivery.\\n\\n# The Challenge\\n\\nPreviously, we ran three powerful EC2 virtual machines in our AWS account, dedicated to hosting GitLab runners. However, since our team worked within the same time zone, these machines sat idle almost 16 hours per day, as most work was done during business hours. During the remaining 8 hours, the servers were often overloaded due to peak demand.\\n\\n# The Solution\\n\\nI migrated GitLab runners to Kubernetes. We already had a Kubernetes cluster running in AWS, so I configured Karpenter to handle autoscaling within the cluster.\\n\\nKarpenter uses taints and node affinity rules to determine on which nodes specific pods should run.\\n\\nThe configuration is set up so that Karpenter creates a node when a GitLab runner starts a pipeline. Then pipeline runs on a spot instance, specifically dedicated for CI/CD tasks. Our pipelines consume a significant amount of resources and can negatively impact other services if they share the same node in the cluster.\\n\\nOnce the pipeline completes, the node remains empty, thanks to the properly configured taints, which prevent other pods from being scheduled on it. After 30 minutes of inactivity, Karpenter automatically removes the node.\\n\\n# The Result\\n\\nBy migrating CI/CD pipelines to our Kubernetes cluster, we eliminated the need for three always-on virtual machines. Instead, we now run 1\u20132 spot nodes in the cluster, running ~60 hours per week, drastically cutting down our infrastructure costs.\\n\\nYou can get [configuration files in my github](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner)\\n\\n- Helm chart for gitlab runner: [gitlab-runner](https://gitlab.com/gitlab-org/charts/gitlab-runner)\\n- karpenter autoscaller: [karpenter](https://karpenter.sh)\\n- karpenter configuration [karpenter-coniguration.yaml](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner/blob/main/karpenter-coniguration.yaml)\\n\\n# Any help?\\n\\nPlease ping me in [linkedin](https://www.linkedin.com/in/victor-trapenok/) if you need any help. I am open to work."}]}}')}}]);