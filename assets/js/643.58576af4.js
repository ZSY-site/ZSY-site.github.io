(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{2390:function(e,t,r){"use strict";r.r(t);var a=r(2),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Title")]),e._v(" "),r("p",[e._v("课前须知：")]),e._v(" "),r("ul",[r("li",[e._v("为了更好的学习体验，请购课后加卡颂微信（kasong555），发送"),r("a",{attrs:{href:"https://wechatapppro-1252524126.file.myqcloud.com/appjiz2zqrn2142/image/b_u_622f2474a891b_tuQ1ZmhR/lbfu8mqw0ssm.jpeg",target:"_blank",rel:"noopener noreferrer"}},[e._v("课程订单号"),r("OutboundLink")],1),e._v("，拉你进专属学习群")]),e._v(" "),r("li",[e._v("参与"),r("a",{attrs:{href:"https://wj.qq.com/s2/11444184/b3e4/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2 个月通关 React 挑战"),r("OutboundLink")],1),e._v("，返现金")]),e._v(" "),r("li",[e._v("为了提高 PC 端观看体验，请安装"),r("a",{attrs:{href:"https://github.com/BetaSu/kasong-school",target:"_blank",rel:"noopener noreferrer"}},[e._v("卡颂课堂 chrome 插件"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/BetaSu/big-react/commit/a043abecb7546eea5f678cf5f796e08c82ad2223",target:"_blank",rel:"noopener noreferrer"}},[e._v("本节课代码地址"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"第十一课-实现事件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第十一课-实现事件系统"}},[e._v("#")]),e._v(" 第十一课 实现事件系统")]),e._v(" "),r("p",[e._v("事件系统本质上植根于浏览器事件模型，所以他隶属于"),r("code",[e._v("ReactDOM")]),e._v("，在实现时要做到对"),r("code",[e._v("Reconciler")]),e._v(" 0 侵入。")]),e._v(" "),r("p",[e._v("实现事件系统需要考虑：")]),e._v(" "),r("ul",[r("li",[e._v("模拟实现浏览器事件捕获、冒泡流程")]),e._v(" "),r("li",[e._v("实现合成事件对象")]),e._v(" "),r("li",[e._v("方便后续扩展")])]),e._v(" "),r("h2",{attrs:{id:"实现-reactdom-与-reconciler-对接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现-reactdom-与-reconciler-对接"}},[e._v("#")]),e._v(" 实现 ReactDOM 与 Reconciler 对接")]),e._v(" "),r("p",[e._v("将事件回调保存在 DOM 中，通过以下两个时机对接：")]),e._v(" "),r("ul",[r("li",[e._v("创建 DOM 时")]),e._v(" "),r("li",[e._v("更新属性时")])]),e._v(" "),r("h2",{attrs:{id:"模拟实现浏览器事件流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现浏览器事件流程"}},[e._v("#")]),e._v(" 模拟实现浏览器事件流程")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://wechatapppro-1252524126.file.myqcloud.com/appjiz2zqrn2142/image/b_u_622f2474a891b_tuQ1ZmhR/lbupas2e0q22.png",alt:"下载.png",title:"下载.png"}})]),e._v(" "),r("p",[e._v("需要注意的点：")]),e._v(" "),r("ul",[r("li",[e._v("基于事件对象实现合成事件，以满足自定义需求（比如阻止事件传递）")]),e._v(" "),r("li",[e._v("方便后续扩展优先级机制")])])])}),[],!1,null,null,null);t.default=_.exports}}]);