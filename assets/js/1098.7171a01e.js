(window.webpackJsonp=window.webpackJsonp||[]).push([[1098],{2976:function(t,e,a){"use strict";a.r(e);var l=a(2),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前话"}},[t._v("#")]),t._v(" 前话")]),t._v(" "),a("ul",[a("li",[t._v("Docker 把应用程序及其依赖，打包在 image 文件里面。只有通过这个文件，才能生成 Docker 容器")]),t._v(" "),a("li",[t._v("image 文件可以看作是容器的模板")]),t._v(" "),a("li",[t._v("Docker 根据 image 文件生成容器的实例")]),t._v(" "),a("li",[t._v("同一个 image 文件，可以生成多个同时运行的容器实例")]),t._v(" "),a("li",[t._v("镜像不是一个单一的文件，而是有多层")]),t._v(" "),a("li",[t._v("容器其实就是在镜像的最上面加了一层读写层，在运行容器里做的任何文件改动，都会写到这个读写层里。如果容器删除了，最上面的读写层也就删除了，改动也就丢失了")]),t._v(" "),a("li",[t._v("我们可以通过"),a("code",[t._v("docker history <ID/NAME>")]),t._v(" 查看镜像中各层内容及大小，每层对应着"),a("code",[t._v("Dockerfile")]),t._v("中的一条指令")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("语法")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("案例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ls")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("查看全部镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker image ls")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("search")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("查找镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker search [imageName]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("history")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("查看镜像历史")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker history [imageName]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inspect")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("显示一个或多个镜像详细信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker inspect [imageName]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pull")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("拉取镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker pull [imageName]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("push")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("推送一个镜像到镜像仓库")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker push [imageName]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rmi")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("删除镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker rmi [imageName] docker image rmi 2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prune")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("移除未使用的镜像，没有标记或补任何容器引用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker image prune")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker image prune")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tag")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("标记本地镜像，将其归入某一仓库")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker tag centos:7 zhangrenyang/centos:v1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("export")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("将容器文件系统作为一个tar归档文件导出到STDOUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker export [OPTIONS] CONTAINER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker export -o hello-world.tar b2712f1067a3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("import")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("导入容器快照文件系统tar归档文件并创建镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker import [OPTIONS] file/URL/- [REPOSITORY[:TAG]]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker import hello-world.tar")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("save")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("将指定镜像保存成"),a("code",[t._v("tar")]),t._v("文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker save [OPTIONS] IMAGE [IMAGE...]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker save -o hello-world.tar hello-world:latest")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("load")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("加载tar文件并创建镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker load -i hello-world.tar")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("根据Dockerfile构建镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker build [OPTIONS] PATH / URL / -")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker build -t zf/ubuntu:v1 .")])])])]),t._v(" "),a("ul",[a("li",[t._v("用户既可以使用 "),a("code",[t._v("docker load")]),t._v(" 来导入镜像存储文件到本地镜像库，也可以使用 "),a("code",[t._v("docker import")]),t._v(" 来导入一个容器快照到本地镜像库")]),t._v(" "),a("li",[t._v("这两者的区别在于容器(import)快照文件将丢弃所有的历史记录和元数据信息（即仅保存容器当时的快照状态），而镜像(load)存储文件将保存完整记录，体积也要大")]),t._v(" "),a("li",[t._v("此外，从容器(import)快照文件导入时可以重新指定标签等元数据信息")])]),t._v(" "),a("h2",{attrs:{id:"查看镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[t._v("#")]),t._v(" 查看镜像")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" image "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("REPOSITORY")]),t._v(" "),a("td",[t._v("仓库地址")])]),t._v(" "),a("tr",[a("td",[t._v("TAG")]),t._v(" "),a("td",[t._v("标签")])]),t._v(" "),a("tr",[a("td",[t._v("IMAGE_ID")]),t._v(" "),a("td",[t._v("镜像ID")])]),t._v(" "),a("tr",[a("td",[t._v("CREATED")]),t._v(" "),a("td",[t._v("创建时间")])]),t._v(" "),a("tr",[a("td",[t._v("SIZE")]),t._v(" "),a("td",[t._v("镜像大小")])])])]),t._v(" "),a("h2",{attrs:{id:"查找镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找镜像"}},[t._v("#")]),t._v(" 查找镜像")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search ubuntu\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("NAME")]),t._v(" "),a("td",[t._v("名称")])]),t._v(" "),a("tr",[a("td",[t._v("DESCRIPTION")]),t._v(" "),a("td",[t._v("描述")])]),t._v(" "),a("tr",[a("td",[t._v("STARTS")]),t._v(" "),a("td",[t._v("星星的数量")])]),t._v(" "),a("tr",[a("td",[t._v("OFFICIAL")]),t._v(" "),a("td",[t._v("是否官方源")])])])]),t._v(" "),a("h2",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("  pull docker.io/hello-world\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("docker image pull是抓取 image 文件的命令")]),t._v(" "),a("li",[t._v("docker.io/hello-world是 image 文件在仓库里面的位置，其中"),a("code",[t._v("docker.io")]),t._v("是 image的作者，hello-world是 image 文件的名字")]),t._v(" "),a("li",[t._v("Docker 官方提供的 image 文件，都放在"),a("code",[t._v("docker.io")]),t._v("组里面，所以它的是默认组，可以省略 "),a("code",[t._v("docker image pull hello-world")])])]),t._v(" "),a("h2",{attrs:{id:"删除镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[t._v("#")]),t._v(" 删除镜像")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi  hello-world\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=i.exports}}]);