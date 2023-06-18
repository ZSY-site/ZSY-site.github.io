(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1108:function(s,a,n){s.exports=n.p+"assets/img/45.bfa66164.png"},1109:function(s,a,n){s.exports=n.p+"assets/img/46.1057127e.png"},1110:function(s,a,n){s.exports=n.p+"assets/img/47.4b218804.png"},1111:function(s,a,n){s.exports=n.p+"assets/img/48.0ce9f934.png"},1112:function(s,a,n){s.exports=n.p+"assets/img/49.b6346747.png"},1113:function(s,a,n){s.exports=n.p+"assets/img/50.1ee47782.png"},1114:function(s,a,n){s.exports=n.p+"assets/img/51.663434d4.png"},1115:function(s,a,n){s.exports=n.p+"assets/img/52.4b408a5d.png"},2710:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"configmap-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configmap-概述"}},[s._v("#")]),s._v(" ConfigMap 概述")]),s._v(" "),e("p",[s._v("ConfigMap 功能在 Kubernetes1.2 版本中引入，许多应用程序会从配置文件、命令行参数\n或环境变量中读取配 置信息。ConfigMap AP 丨给我们提供了向容器中注入配置信息的机\n制，ConfigMap 可以被用来保存单个属性，也 可以用来保存整个配置文件或者 JSON 二进\n制大对象")]),s._v(" "),e("h2",{attrs:{id:"configmap-的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configmap-的创建"}},[s._v("#")]),s._v(" ConfigMap 的创建")]),s._v(" "),e("p",[s._v("（1）使用目录创建")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs/user-guide/configmap/kubectl/\ngame.properties\nui.properties\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docs/user-guide/configmap/kubectl/game.properties\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enemies")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aliens\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lives")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enemies.cheat")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enemies.cheat.level")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("noGoodRotten\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("secret.code.passphrase")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UUDDLRLRBABAS\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("secret.code.allowed")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("secret.code.lives")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docs/user-guide/configmap/kubectl/ui.properties\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("color.good")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("purple\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("color.bad")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yellow\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("allow.textmode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("how.nice.to.look")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fairlyNice\n$ kubectl create configmap game-config --from-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("docs/userguide/configmap/kubectl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("-from-file 指定在目录下的所有文件都会被用在 ConfigMap 里面创建一个键值对，键的名\n字就是文件名，值就 是文件的内容")]),s._v(" "),e("p",[s._v("（2）使用文件创建\n只要指定为一个文件就可以从单个文件中创建 ConfigMap")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl create configmap game-config-2\n--from-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("docs/user- guide/configmap/kubectl/game.properties\n$ kubectl get configmaps game-config-2 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("-from-file 这个参数可以使用多次，你可以使用两次分別指定上个实例中的那两个配置文\n件，效果就跟指定整个 目录是一样的")]),s._v(" "),e("p",[s._v("（3）使用字面值创建\n使用文字值创建，利用-from-literal 参数传递配置信息，该参数可以使用多次，格式如\n下")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl create configmap special-config --from-literal"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("special.how"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("very --\nfrom-literal"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("special.type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("charm\n$ kubectl get configmaps special-config "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"pod-中使用-configmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod-中使用-configmap"}},[s._v("#")]),s._v(" Pod 中使用 ConfigMap")]),s._v(" "),e("p",[s._v("（1）使用 ConfigMap 来替代环境变量")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: special-config\nnamespace: default\ndata:\nspecial.how: very\nspecial.type: charm\napiVersion: v1\nkind: ConfigMap\nmetadata:\nname: env-config\nnamespace: default\ndata:\nlog_level: INFO\napiVersion: v1\nkind: Pod\nmetadata:\nname: dapi-test-pod\nspec:\ncontainers:\n- name: test-container\nimage: hub.atguigu.com/library/myapp:v1\ncommand: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nenv:\n-name: SPECIAL_LEVEL_KEY\nvalueFrom:\nconfigMapKeyRef:\nname: special-config\nkey: special.how\n-name: SPECIAL_TYPE_KEY\nvalueFrom:\nconfigMapKeyRef:\nname: special-config\nkey: special.type\nenvFrom:\n-configMapRef:\nname: env-config\nrestartPolicy: Never\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br")])]),e("p",[s._v("（2）使用 ConfigMap 设置命令行参数\n"),e("img",{attrs:{src:n(1108),alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:n(1109),alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:n(1110),alt:""}})]),s._v(" "),e("p",[s._v("（3）通过数据卷插件使用 ConfigMap\n"),e("img",{attrs:{src:n(1111),alt:""}})]),s._v(" "),e("p",[s._v("在数据卷里面使用这个 ConfigMap,有不同的选项。最基本的就是将文件填入数据卷，在这\n个文件中，键就是文 件名，键值就是文件内容\n"),e("img",{attrs:{src:n(1112),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"configmap-的热更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configmap-的热更新"}},[s._v("#")]),s._v(" ConfigMap 的热更新")]),s._v(" "),e("p",[e("img",{attrs:{src:n(1113),alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:n(1114),alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:n(1115),alt:""}})]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl get pods -l run=my-nginx -o=name|cut -d \"/\" -f2'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("\n/etc/config/log_level\nINFO\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("修改 ConfigMap")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl edit configmap log-config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改 log_level 的值为 DEBUG 等待大概 10 秒钟时间，再次查看环境变量的值")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl get pods -l run=my-nginx -o=name|cut -d \"/\" -f2'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("\n/tmp/log_level DEBUG\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"configmap-更新后滚动更新-pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configmap-更新后滚动更新-pod"}},[s._v("#")]),s._v(" ConfigMap 更新后滚动更新 Pod")]),s._v(" "),e("p",[s._v("更新 ConfigMap 目前并不会触发相关 Pod 的滚动更新，可以通过修改 pod annotations 的\n方式强制触发滚动更新")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ kubectl patch deployment my-nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--patch")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"spec": {"template": {"metadata":\n{"annotations": {"version/config": "20190411" }}}}}\'')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这个例子里我们在.spec.template.metadata.annotations 中添加 version/config ,每次\n通过修改 version/config 来触发滚动更新\n更新 ConfigMap 后：\n•使用该 ConfigMap 挂载的 Env 不会同步更新\n•使用该 ConfigMap 挂载的 Volume 中的数据需要一段时间（实测大概 10 秒）才能同步更新")])])}),[],!1,null,null,null);a.default=t.exports}}]);