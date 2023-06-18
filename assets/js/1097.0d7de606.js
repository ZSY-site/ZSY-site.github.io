(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{2977:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"下载安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装包"}},[a._v("#")]),a._v(" 下载安装包")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.oracle.com/java/technologies/java-archive-javase10-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("java"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://tomcat.apache.org/download-70.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("tomcat"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/src/java\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("  http://img.zhufengpeixun.cn/jdk1.8.0_211.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("  http://img.zhufengpeixun.cn/apache-tomcat-7.0.94.tar.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像文件"}},[a._v("#")]),a._v(" 镜像文件")]),a._v(" "),t("p",[a._v("Dockerfile")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("FROM centos\nMAINTAINER zhufengjiagou\nADD  jdk1.8.0_211.tar.gz /usr/local\nENV JAVA_HOME /usr/local/jdk1.8.0_211\nADD apache-tomcat-7.0.94.tar.gz /usr/local\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" /usr/local/*.tar.gz\nWORKDIR /usr/local/apache-tomcat-7.0.94\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./bin/catalina.sh"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"run"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h2",{attrs:{id:"打包镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包镜像"}},[a._v("#")]),a._v(" 打包镜像")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" image build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" zftomcat:v1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" Dockerfile "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tomcat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/app/webapps,dst"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/apache-tomcat-7.0.94/webapps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nzftomcat:v1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("yaml"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.npmjs.com/package/mysql",target:"_blank",rel:"noopener noreferrer"}},[a._v("mysql"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);