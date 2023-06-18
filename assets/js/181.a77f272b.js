(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1451:function(s,a,t){s.exports=t.p+"assets/img/1.12a50795.png"},1452:function(s,a,t){s.exports=t.p+"assets/img/2.13dd80e8.png"},1453:function(s,a,t){s.exports=t.p+"assets/img/3.fd21396a.png"},3289:function(s,a,t){"use strict";t.r(a);var n=t(2),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ul",[n("li",[s._v("Monorepo 是管理项目代码的一个方式，指在一个项目仓库(repo)中管理多个模块/包(package)")]),s._v(" "),n("li",[s._v("monorepo 最主要的好处是统一的工作流和代码共享")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lerna"),n("OutboundLink")],1),s._v("是一个管理多个 npm 模块的工具,优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),n("OutboundLink")],1)])]),s._v(" "),n("p",[n("img",{attrs:{src:t(1451),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i lerna "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("lerna init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1452),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"private"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lerna"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.22.1"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"lerna-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lerna-json"}},[s._v("#")]),s._v(" lerna.json")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packages"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"yarn-workspace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn-workspace"}},[s._v("#")]),s._v(" yarn workspace")]),s._v(" "),n("ul",[n("li",[s._v("yarn workspace 允许我们使用 monorepo 的形式来管理项目")]),s._v(" "),n("li",[s._v("在安装 node_modules 的时候它不会安装到每个子项目的 node_modules 里面，而是直接安装到根目录下面，这样每个子项目都可以读取到根目录的 node_modules")]),s._v(" "),n("li",[s._v("整个项目只有根目录下面会有一份 yarn.lock 文件。子项目也会被 link 到 node_modules 里面，这样就允许我们就可以直接用 import 导入对应的项目")]),s._v(" "),n("li",[s._v("yarn.lock 文件是自动生成的,也完全 Yarn 来处理.yarn.lock 锁定你安装的每个依赖项的版本，这可以确保你不会意外获得不良依赖")])]),s._v(" "),n("h3",{attrs:{id:"开启-workspace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启-workspace"}},[s._v("#")]),s._v(" 开启 workspace")]),s._v(" "),n("ul",[n("li",[s._v("package.json")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"private"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 私有的,用来管理整个项目,不会被发布到npm")]),s._v("\n+  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"workspaces"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n+    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/*"')]),s._v("\n+  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lerna"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.22.1"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"创建子项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建子项目"}},[s._v("#")]),s._v(" 创建子项目")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("lerna create create-react-app3\nlerna create react-scripts3\nlerna create cra-template3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1453),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"添加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[s._v("#")]),s._v(" 添加依赖")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarnpkg"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/lerna/lerna#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("lerna"),n("OutboundLink")],1),s._v("\n设置加速镜像")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config get registry\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npm.taobao.org/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npmjs.org/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[s._v("作用")]),s._v(" "),n("th",[s._v("命令")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("查看工作空间信息")]),s._v(" "),n("td",[s._v("yarn workspaces info")])]),s._v(" "),n("tr",[n("td",[s._v("给根空间添加依赖")]),s._v(" "),n("td",[s._v("yarn add chalk cross-spawn fs-extra --ignore-workspace-root-check")])]),s._v(" "),n("tr",[n("td",[s._v("给某个项目添加依赖")]),s._v(" "),n("td",[s._v("yarn workspace create-react-app3 add commander")])]),s._v(" "),n("tr",[n("td",[s._v("删除所有的 node_modules")]),s._v(" "),n("td",[s._v("lerna clean 等于 yarn workspaces run clean")])]),s._v(" "),n("tr",[n("td",[s._v("安装和 link")]),s._v(" "),n("td",[s._v("yarn install 等于 lerna bootstrap --npm-client yarn --use-workspaces")])]),s._v(" "),n("tr",[n("td",[s._v("重新获取所有的 node_modules")]),s._v(" "),n("td",[s._v("yarn install --force")])]),s._v(" "),n("tr",[n("td",[s._v("查看缓存目录")]),s._v(" "),n("td",[s._v("yarn cache dir")])]),s._v(" "),n("tr",[n("td",[s._v("清除本地缓存")]),s._v(" "),n("td",[s._v("yarn cache clean")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);