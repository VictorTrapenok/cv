"use strict";(self.webpackChunkviktor_t=self.webpackChunkviktor_t||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"12-Years-in-Open-Source","metadata":{"permalink":"/blog/12-Years-in-Open-Source","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-16-cppcomet/index.md","source":"@site/blog/2024-10-16-cppcomet/index.md","title":"12 Years in Open-Source","description":"logo","date":"2024-10-16T00:00:00.000Z","tags":[{"inline":true,"label":"Open-Source","permalink":"/blog/tags/open-source"},{"inline":true,"label":"Startup","permalink":"/blog/tags/startup"}],"readingTime":1.875,"hasTruncateMarker":false,"authors":[{"name":"Viktor Trapenok","title":"Principal Engineer @ Nanoheal","url":"https://www.linkedin.com/in/victor-trapenok/","page":{"permalink":"/blog/authors/viktor"},"socials":{"github":"https://github.com/VictorTrapenok","linkedin":"https://www.linkedin.com/in/victor-trapenok/"},"imageURL":"https://viktor-t.com/img/me.jpeg","key":"viktor"}],"frontMatter":{"slug":"12-Years-in-Open-Source","title":"12 Years in Open-Source","authors":["viktor"],"tags":["Open-Source","Startup"]},"unlisted":false,"nextItem":{"title":"Reducing CI/CD infrastructure costs","permalink":"/blog/karpenter-for-gitlabrunner"}},"content":"![logo](logo.webp)\\n\\n# How Much Did I Earn from My Open-Source Project Over 12 Years?\\n\\n_(To summarize: approximately $8,000)_\\n\\nAt the beginning of 2012, I started working on [my first open-source project](https://github.com/CppComet/comet-server). It was a comet server written in C++.\\n\\nThe idea was simple: create a comet server with an API and a SaaS subscription service. The closest analogy is pusher.com.\\n\\nI completed the project and even added more features than I originally planned. In synthetic tests, my server handled up to **64,000 simultaneous connections**. I invested a significant amount of my time\u200a\u2014\u200aaround **2,000 hours of work**, by my estimate.\\n\\nThe project attracted more than **20,000 registrations**, and about **1,000 websites** actively used my API. However, most of them stayed on the free tier. At its peak, the total number of concurrent WebSocket connections reached **8,000**.\\n\\nMy largest client was the Russian federal TV channel **OTR**, and I even signed a contract with them for technical support.\\n\\nBut financially, the project was almost a complete failure. I wasn\u2019t able to effectively market my solution. Over nearly **12 years**, the total revenue from subscriptions amounted to about **$8,000** from various users\u200a\u2014\u200abarely enough to cover hosting costs.\\n\\n## The Reasons:\\n\\n- I did not have experience in marketing (I\u2019ve since learned a lot, but it took time).\\n- The process from start to paid subscription was too long.\\n\\n## But What Else Did I Gain?\\n\\n- I used this project as a topic for my **diploma thesis** at the institute.\\n- I received **dozens of freelance jobs** for developing chats and video chats.\\n- Over the years, I talked about this project in **every job interview**, as much as I talked about my other work experience.\\n- I\u2019m pretty sure this project helped me get a job at **cube.dev**, where I learned a lot.\\n\\n## The Indirect Benefits\\n\\nIt\u2019s hard to quantify the indirect benefits. But without this project in my portfolio, how much harder would it have been to find work? How much less would I have been paid in my positions?\\n\\n## In Conclusion:\\n\\nFor anyone starting their own project, here\u2019s my advice:\\n\\n**Start!** It\u2019s an amazing experience. But if, like me, you hope to earn from it, **think about marketing and monetization from the start.**"},{"id":"karpenter-for-gitlabrunner","metadata":{"permalink":"/blog/karpenter-for-gitlabrunner","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-15-karpenter-for-gitlabrunner/index.md","source":"@site/blog/2024-10-15-karpenter-for-gitlabrunner/index.md","title":"Reducing CI/CD infrastructure costs","description":"logo","date":"2024-10-15T00:00:00.000Z","tags":[{"inline":true,"label":"Karpenter","permalink":"/blog/tags/karpenter"},{"inline":true,"label":"GitLab","permalink":"/blog/tags/git-lab"},{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":1.605,"hasTruncateMarker":false,"authors":[{"name":"Viktor Trapenok","title":"Principal Engineer @ Nanoheal","url":"https://www.linkedin.com/in/victor-trapenok/","page":{"permalink":"/blog/authors/viktor"},"socials":{"github":"https://github.com/VictorTrapenok","linkedin":"https://www.linkedin.com/in/victor-trapenok/"},"imageURL":"https://viktor-t.com/img/me.jpeg","key":"viktor"}],"frontMatter":{"slug":"karpenter-for-gitlabrunner","title":"Reducing CI/CD infrastructure costs","authors":["viktor"],"tags":["Karpenter","GitLab","Kubernetes"]},"unlisted":false,"prevItem":{"title":"12 Years in Open-Source","permalink":"/blog/12-Years-in-Open-Source"}},"content":"![logo](logo.webp)\\n\\nI want to share how we at Nanoheal reduced our infrastructure costs by using GitLab runners in Kubernetes with Karpenter on spot instances.\\n\\nAt Nanoheal, we have a high level of developer activity, and CI/CD pipelines runs a critical role in our DevOps practices for continuous delivery.\\n\\n# The Challenge\\n\\nPreviously, we ran three powerful EC2 virtual machines in our AWS account, dedicated to hosting GitLab runners. However, since our team worked within the same time zone, these machines sat idle almost 16 hours per day, as most work was done during business hours. During the remaining 8 hours, the servers were often overloaded due to peak demand.\\n\\n# The Solution\\n\\nI migrated GitLab runners to Kubernetes. We already had a Kubernetes cluster running in AWS, so I configured Karpenter to handle autoscaling within the cluster.\\n\\nKarpenter uses taints and node affinity rules to determine on which nodes specific pods should run.\\n\\nThe configuration is set up so that Karpenter creates a node when a GitLab runner starts a pipeline. Then pipeline runs on a spot instance, specifically dedicated for CI/CD tasks. Our pipelines consume a significant amount of resources and can negatively impact other services if they share the same node in the cluster.\\n\\nOnce the pipeline completes, the node remains empty, thanks to the properly configured taints, which prevent other pods from being scheduled on it. After 30 minutes of inactivity, Karpenter automatically removes the node.\\n\\n# The Result\\n\\nBy migrating CI/CD pipelines to our Kubernetes cluster, we eliminated the need for three always-on virtual machines. Instead, we now run 1\u20132 spot nodes in the cluster, running ~60 hours per week, drastically cutting down our infrastructure costs.\\n\\nYou can get [configuration files in my github](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner)\\n\\n- Helm chart for gitlab runner: [gitlab-runner](https://gitlab.com/gitlab-org/charts/gitlab-runner)\\n- karpenter autoscaller: [karpenter](https://karpenter.sh)\\n- karpenter configuration [karpenter-coniguration.yaml](https://github.com/VictorTrapenok/karpenter-for-gitlabrunner/blob/main/karpenter-coniguration.yaml)\\n\\n# Any help?\\n\\nPlease ping me in [linkedin](https://www.linkedin.com/in/victor-trapenok/) if you need any help. I am open to work."}]}}')}}]);