(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{1448:function(t,l,s){t.exports=s.p+"assets/img/10.1b1be4ce.png"},1449:function(t,l,s){t.exports=s.p+"assets/img/11.cc9b5d77.png"},3283:function(t,l,s){"use strict";s.r(l);var _=s(2),a=Object(_.a)({},(function(){var t=this,l=t.$createElement,_=t._self._c||l;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("a",{attrs:{href:"https://www.bilibili.com/video/BV1MY4y1D75D/?spm_id_from=333.337.search-card.all.click&vd_source=7146746363d9e7490b0326e8f02bf64a",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考视频"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),_("ul",[_("li",[t._v("思考一下，我们的项目代码在上线之后是不是就不用管了呢？并不是，作为前端开发工程师，我们是直接跟用户打交道的，一个应用的用户留存率跟这个应用的稳定性有很大的关系，因为监控能让我们快速的发现并解决问题，所以一个系统的监控体系越完善这个系统就越稳定。所以不光后端要对接口做监控，前端的监控也显得很重要。")])]),t._v(" "),_("h2",{attrs:{id:"怎么做前端监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么做前端监控"}},[t._v("#")]),t._v(" 怎么做前端监控")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("方式一：接入现成的, 下面是现成的 sdk 项目:")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("sentry https://docs.sentry.io/")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("fundebug https://www.fundebug.com/")])])])])]),t._v(" "),_("li",[_("p",[t._v("方式二: 自己封装")])])]),t._v(" "),_("h2",{attrs:{id:"需要监控什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需要监控什么"}},[t._v("#")]),t._v(" 需要监控什么")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("错误统计")])]),t._v(" "),_("ul",[_("li",[t._v("首先，我们的代码发布到线上总是会发生奇奇怪怪的错误，比如，浏览器兼容问题，后端接口挂掉了等等错误，随便一个错误都会影响用户的使用，所以【对线上进行错误监控】显得尤为重要，能够让我们第一时间去响应报错并解决。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("行为日志埋点")])]),t._v(" "),_("ul",[_("li",[t._v("对于一些常见的电商 app，比如淘宝，都有一套自己的用户行为分析的系统，分析用户浏览时间比较长的页面有哪些，常点击的按钮有哪些等等行为，通过分析用户的这些行为去制定不同的策略引导你购物，这些都可以通过前端埋点去实现对用户行为的监控。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("PV/UV 统计")])]),t._v(" "),_("ul",[_("li",[t._v("我们上线那么多的前端页面，肯定特别想知道我们的用户对哪个页面的访问次数比较多，也想知道每天有多少的用户访问我们的系统，这就需要用到 PV,UV 的统计")]),t._v(" "),_("li",[t._v("比如今天访问了一次 b 站，则 PV 就增加一次")]),t._v(" "),_("li",[t._v("比如我今天访问了 b 站，明天又访问了一次 b 站，则 UV 只会增加一次，因为是同一个用户访问的")])])]),t._v(" "),_("li",[_("p",[t._v("所以我们系统的设计就主要围绕上面着三点进行设计，主要流程如下（即 sdk 的主要流程）：")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("数据采集：数据采集做的就是采集我们系统的监控数据，包括 PV,UV 和用户行为及前端报错的数据。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("日志上报：上报做的就是将第一步采集到的数据发送到服务端。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("日志查询：这一步就是在后台查询我们采集并上报的数据，方便对系统进行分析。")])])]),t._v(" "),_("li",[t._v("我们的 SDK 做的主要是对前两部分的实现。")]),t._v(" "),_("li",[_("img",{attrs:{src:s(1448),alt:""}})])])])]),t._v(" "),_("h2",{attrs:{id:"为什么要做前端监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做前端监控"}},[t._v("#")]),t._v(" 为什么要做前端监控")]),t._v(" "),_("ul",[_("li",[t._v("更快发现问题和解决问题")]),t._v(" "),_("li",[t._v("做产品的决策依据")]),t._v(" "),_("li",[t._v("提升前端工程师的技术深度和广度, 打造简历亮点")]),t._v(" "),_("li",[t._v("为业务扩展提供了更多可能性")])]),t._v(" "),_("h2",{attrs:{id:"功能拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能拆分"}},[t._v("#")]),t._v(" 功能拆分")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("首先会有一些参数注入进来")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("然后就会进行 sdk 初始化")])])]),t._v(" "),_("li",[_("img",{attrs:{src:s(1449),alt:""}})])])])}),[],!1,null,null,null);l.default=a.exports}}]);