(window.webpackJsonp=window.webpackJsonp||[]).push([[896],{2722:function(e,n,a){"use strict";a.r(n);var s=a(2),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"replication-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-controller"}},[e._v("#")]),e._v(" Replication Controller")]),e._v(" "),a("p",[e._v("Replication Controller(RC)是 Kubernetes 系统中核心概念之一，当我们定义了一个 RC\n并提交到 Kubernetes 集群中以后，Master 节点上的 Controller Manager 组件就得到通知，\n定期检查系统中存活的 Pod,并确保目标 Pod 实例的数量刚好等于 RC 的预期值，如果有过\n多或过少的 Pod 运行，系统就会停掉或创建一些 Pod.此外我们也可以通过修改 RC 的副本\n数量，来实现 Pod 的动态缩放功能。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kubectl scale rc nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--replicas")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("由于 Replication Controller 与 Kubernetes 代码中的模块 Replication Controller 同名，\n所以在 Kubernetes v1.2 时， 它就升级成了另外一个新的概念 Replica Sets,官方解释为\n下一代的 RC，它与 RC 区别是:Replica Sets 支援基于集合的 Label selector,而 RC 只支\n持基于等式的 Label Selector。我们很少单独使用 Replica Set,它主要被 Deployment 这\n个更高层面的资源对象所使用，从而形成一整套 Pod 创建、删除、更新的编排机制。最好\n不要越过 RC 直接创建 Pod， 因为 Replication Controller 会通过 RC 管理 Pod 副本，实\n现自动创建、补足、替换、删除 Pod 副本，这样就能提高应用的容灾能力，减少由于节点\n崩溃等意外状况造成的损失。即使应用程序只有一个 Pod 副本，也强烈建议使用 RC 来 定\n义 Pod")]),e._v(" "),a("h2",{attrs:{id:"replica-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replica-set"}},[e._v("#")]),e._v(" Replica Set")]),e._v(" "),a("p",[e._v("ReplicaSet 跟 ReplicationController 没有本质的不同，只是名字不一样，并且\nReplicaSet 支持集合式的 selector（ReplicationController 仅支持等式）。\nKubernetes 官方强烈建议避免直接使用 ReplicaSet，而应该通过 Deployment 来创建 RS 和\nPod。由于 ReplicaSet 是 ReplicationController 的代替物，因此用法基本相同，唯一的\n区别在于 ReplicaSet 支持集合式的 selector。")]),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("p",[e._v("Deployment 是 Kubenetes v1.2 引入的新概念，引入的目的是为了更好的解决 Pod 的编排\n问题，Deployment 内部使用了 Replica Set 来实现。Deployment 的定义与 Replica Set 的\n定义很类似，除了 API 声明与 Kind 类型有所区别：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: extensions/v1beta1 kind: Deployment\nmetadata:\nname: frontend spec:\nreplicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" selector:\nmatchLabels:\ntier: frontend matchExpressions:\n- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("key: tier, operator: In, values: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" template:\nmetadata:\nlabels:\napp: app-demo tier: frontend\nspec:\ncontainers:\n- name: tomcat-demo image: tomcat ports:\n- containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("h2",{attrs:{id:"horizontal-pod-autoscaler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-pod-autoscaler"}},[e._v("#")]),e._v(" Horizontal Pod Autoscaler")]),e._v(" "),a("p",[e._v("Horizontal Pod Autoscal(Pod 横向扩容 简称 HPA)与 RC、Deployment 一样，也属于一种\nKubernetes 资源对象。通过追踪分析 RC 控制的所有目标 Pod 的负载变化情况，来确定是\n否需要针对性地调整目标 Pod 的副本数，这是 HPA 的 实现原理。")]),e._v(" "),a("p",[e._v("Kubernetes 对 Pod 扩容与缩容提供了手动和自动两种模式，手动模式通过 kubectl scale\n命令对一个 Deployment/RC 进行 Pod 副本数量的设置。自动模式则需要用户根据某个性能\n指标或者自定义业务指标，并指定 Pod 副本数量的范围，系统将自动在这个范围内根据性\n能指标的变化进行调整。")]),e._v(" "),a("p",[e._v("（1）手动扩容和缩容")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kubectl scale deployment frontend "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--replicas")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("（2）自动扩容和缩容\nHPA 控制器基本 Master 的 kube-controller-manager 服务启动参数 --horizontal-podautoscaler-sync-period 定义的时长(默认值为 30s),周期性地监测 Pod 的 CPU 使用率，\n并在满足条件时对 RC 或 Deployment 中的 Pod 副 本数量进行调整，以符合用户定义的平均\nPod CPU 使用率。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: extensions/v1beta1 kind: Deployment\nmetadata:\nname: nginx-deployment spec:\nreplicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" template:\nmetadata: name: nginx labels:\napp: nginx spec:\ncontainers:\n- name: nginx image: nginx\nresources:\nrequests:\ncpu: 50m ports:\n- containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n--------------------------\napiVersion: v1 kind: Service metadata:\nname: nginx-svc spec:\nports:\n- port: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(" selector:\napp: nginx\n-----------------------------------\napiVersion: autoscaling/v1 kind: HorizontalPodAutoscaler metadata:\nname: nginx-hpa spec:\nscaleTargetRef:\napiVersion: app/v1beta1 kind: Deployment\nname: nginx-deployment minReplicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nmaxReplicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\ntargetCPUUtilizationPercentage: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);