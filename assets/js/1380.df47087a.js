(window.webpackJsonp=window.webpackJsonp||[]).push([[1380],{3359:function(e,a,t){"use strict";t.r(a);var s=t(2),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebPageTest"),t("OutboundLink")],1),e._v("是一款非常专业的 Web 页面性能分析工具，它可以对检测分析的环境配置进行高度自定义化，内容包括测试节点的物理位置、设备型号、浏览器版本、网络条件和检测次数等，除此之外，它还提供了目标网站应用于竞品之间的性能比较，以及查看网络路由情况等多种维度下的测试工具。")]),e._v(" "),t("p",[e._v("可直接打开 WEBPAGETEST 的主页面，在配置好目标网站应用的网址和检测参数后便可启动测试，等待检测运行结束就能查看详细的测试报告。")]),e._v(" "),t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[e._v("#")]),e._v(" 基本使用")]),e._v(" "),t("p",[e._v("参考官方文档的"),t("a",{attrs:{href:"https://docs.webpagetest.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("起步教程"),t("OutboundLink")],1),e._v("即可。")]),e._v(" "),t("h2",{attrs:{id:"本地部署-webpagetest-工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地部署-webpagetest-工具"}},[e._v("#")]),e._v(" 本地部署 WebPageTest 工具")]),e._v(" "),t("ul",[t("li",[e._v("1、安装 Docker")]),e._v(" "),t("li",[e._v("2、拉取镜像")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull webpagetest/server\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull webpagetest/agent\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[e._v("3、运行实例")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4000")]),e._v(":80 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--rm")]),e._v(" webpagetest/server\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(":80 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--network")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"host"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-e")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SERVER_URL=http://localhost:4000/work/"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-e")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"LOCATION=Test"')]),e._v("  webpagetest/agent\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);