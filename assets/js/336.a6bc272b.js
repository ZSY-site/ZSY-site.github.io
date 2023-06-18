(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1130:function(s,n,e){s.exports=e.p+"assets/img/57.fffad507.png"},2717:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"探针类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#探针类型"}},[s._v("#")]),s._v(" 探针类型")]),s._v(" "),a("p",[s._v("K8s 中存在两种类型的探针：liveness probe 和 readiness probe。")]),s._v(" "),a("h2",{attrs:{id:"liveness-probe-存活探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liveness-probe-存活探针"}},[s._v("#")]),s._v(" liveness probe（存活探针）")]),s._v(" "),a("p",[s._v("用于判断容器是否存活，即 Pod 是否为 running 状态，如果 LivenessProbe 探针探测到容\n器不健康，则 kubelet 将 kill 掉容器，并根据容器的重启策略是否重启。如果一个容器不\n包含 LivenessProbe 探针，则 Kubelet 认为容器的 LivenessProbe 探针的返回值永远成功。\n有时应用程序可能因为某些原因（后端服务故障等）导致暂时无法对外提供服务，但应用\n软件没有终止，导致 K8S 无法隔离有故障的 pod，调用者可能会访问到有故障的 pod，导致\n业务不稳定。K8S 提供 livenessProbe 来检测应用程序是否正常运行，并且对相应状况进\n行相应的补救措施。")]),s._v(" "),a("h2",{attrs:{id:"readiness-probe-就绪探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readiness-probe-就绪探针"}},[s._v("#")]),s._v(" readiness probe（就绪探针）")]),s._v(" "),a("p",[s._v("用于判断容器是否启动完成，即容器的 Ready 是否为 True，可以接收请求，如果\nReadinessProbe 探测失败，则容器的 Ready 将为 False，控制器将此 Pod 的 Endpoint 从对\n应的 service 的 Endpoint 列表中移除，从此不再将任何请求调度此 Pod 上，直到下次探测\n成功。通过使用 Readiness 探针，Kubernetes 能够等待应用程序完全启动，然后才允许服\n务将流量发送到新副本。\n比如使用 tomcat 的应用程序来说，并不是简单地说 tomcat 启动成功就可以对外提供服务\n的，还需要等待 spring 容器初始化，数据库连接没连上等等。对于 spring boot 应用，默\n认的 actuator 带有/health 接口，可以用来进行启动成功的判断。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1130),alt:""}})]),s._v(" "),a("h2",{attrs:{id:"每类探针都支持三种探测方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每类探针都支持三种探测方法"}},[s._v("#")]),s._v(" 每类探针都支持三种探测方法：")]),s._v(" "),a("p",[s._v("（1）exec：通过执行命令来检查服务是否正常，针对复杂检测或无 HTTP 接口的服务，命\n令返回值为 0 则表示容器健康。\n（2）httpGet：通过发送 http 请求检查服务是否正常，返回 200-399 状态码则表明容器健\n康。\n（3）tcpSocket：通过容器的 IP 和 Port 执行 TCP 检查，如果能够建立 TCP 连接，则表明\n容器健康。")]),s._v(" "),a("h2",{attrs:{id:"探针探测的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#探针探测的结果"}},[s._v("#")]),s._v(" 探针探测的结果")]),s._v(" "),a("p",[s._v("（1）Success：Container 通过了检查。\n（2）Failure：Container 未通过检查。\n（3）Unknown：未能执行检查，因此不采取任何措施。")]),s._v(" "),a("h2",{attrs:{id:"pod-重启策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-重启策略"}},[s._v("#")]),s._v(" Pod 重启策略：")]),s._v(" "),a("p",[s._v("（1）Always: 总是重启\n（2）OnFailure: 如果失败就重启\n（3）Never: 永远不重启")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\nname: goproxy\nlabels:\napp: goproxy\nspec:\ncontainers:\n- name: goproxy\nimage: k8s.gcr.io/goproxy:0.1\nports:\n- containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\nreadinessProbe:\ntcpSocket:\nport: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\ninitialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nperiodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nlivenessProbe:\ntcpSocket:\nport: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\ninitialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\nperiodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("探针(Probe)有许多可选字段，可以用来更加精确的控制 Liveness 和 Readiness 两种探针\n的行为。这些参数包括：\ninitialDelaySeconds：容器启动后第一次执行探测是需要等待多少秒。\nperiodSeconds：执行探测的频率。默认是 10 秒，最小 1 秒。\ntimeoutSeconds：探测超时时间。默认 1 秒，最小 1 秒。\nsuccessThreshold：探测失败后，最少连续探测成功多少次才被认定为成功。默认是 1。\n对于 liveness 必须是 1。最小值是 1。\nfailureThreshold：探测成功后，最少连续探测失败多少次才被认定为失败。默认是 3。\n最小值是 1。")])])}),[],!1,null,null,null);n.default=t.exports}}]);