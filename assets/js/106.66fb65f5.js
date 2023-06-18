(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2409:function(t,a,s){"use strict";s.r(a);var r=s(2),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前话"}},[t._v("#")]),t._v(" 前话")]),t._v(" "),r("ul",[r("li",[t._v("目前企业中比 较常 见的 消息 队列产 品主 要有 Kafka、ActiveMQ 、RabbitMQ 、RocketMQ 等。")]),t._v(" "),r("li",[t._v("在大数据场景主要采用 Kafka 作为消息队列。在 JavaEE 开发中主要采用 ActiveMQ、RabbitMQ、RocketMQ。")])]),t._v(" "),r("h2",{attrs:{id:"传统消息队列的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统消息队列的应用场景"}},[t._v("#")]),t._v(" 传统消息队列的应用场景")]),t._v(" "),r("ul",[r("li",[t._v("传统的消息队列的主要应用场景包括：缓存/消峰、解耦和异步通信。")])]),t._v(" "),r("h3",{attrs:{id:"消息队列的应用场景-缓冲-消峰"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的应用场景-缓冲-消峰"}},[t._v("#")]),t._v(" 消息队列的应用场景——缓冲/消峰")]),t._v(" "),r("ul",[r("li",[t._v("缓冲/消峰：有助于控制和优化数据流经过系统的速度，解决生产消息和消费消息的处理速度不一致的情况。")]),t._v(" "),r("li",[r("img",{attrs:{src:s(794),alt:""}})])]),t._v(" "),r("h3",{attrs:{id:"消息队列的应用场景-解耦"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的应用场景-解耦"}},[t._v("#")]),t._v(" 消息队列的应用场景——解耦")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("解耦：允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束")])]),t._v(" "),r("li",[r("ol",[r("li",[t._v("对下图进行分析，比如平台的数据源有 mysql 的、mongodb 的、Flume 等")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[t._v("然后需要将数据源发送到相应的多个大数据平台，那么就得连接多次")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"3"}},[r("li",[t._v("使用 MQ 消息队列，就可以直接把多个数据源直接发送给 MQ 消息队列，随后把不同的再给相应的发数据平台")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"4"}},[r("li",[t._v("就类似多个数据源是各种商品，而 MQ 消息队列是大商场，大数据目的地是用户。现在用户就无需去商品工厂买东西，而是直接去超市买。")])])]),t._v(" "),r("li",[r("p",[r("img",{attrs:{src:s(795),alt:""}})])])]),t._v(" "),r("h3",{attrs:{id:"消息队列的应用场景-异步通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的应用场景-异步通信"}},[t._v("#")]),t._v(" 消息队列的应用场景——异步通信")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("异步通信：允许用户把一个消息放入队列，但并不立即处理它，然后在需要的时候再去处理它们。")])]),t._v(" "),r("li",[r("ol",[r("li",[t._v("对下图的【同步处理】进行分析：某用户在某平台进行注册，随后会把用户信息写入数据库，然后调用发送断信的接口，这需要一些时间，而且如果同时还有其他很多用户进行注册，则用户就得等待很长时间，其实发送短信并不是重要的事情，最重要是告诉用户注册成功了。")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[t._v("对下图的【异步处理】进行分析: ...")])])]),t._v(" "),r("li",[r("p",[r("img",{attrs:{src:s(796),alt:""}})])])]),t._v(" "),r("h2",{attrs:{id:"消息队列的两种模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的两种模式"}},[t._v("#")]),t._v(" 消息队列的两种模式")]),t._v(" "),r("ul",[r("li",[t._v("消息队列的两种模式包括：\n"),r("ul",[r("li",[r("ol",[r("li",[t._v("点对点模式")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[t._v("发布/订阅模式")])])])])])]),t._v(" "),r("h3",{attrs:{id:"点对点模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#点对点模式"}},[t._v("#")]),t._v(" 点对点模式")]),t._v(" "),r("ul",[r("li",[t._v("消费者主动拉取数据，消息收到后清除消息")]),t._v(" "),r("li",[r("img",{attrs:{src:s(797),alt:""}})])]),t._v(" "),r("h3",{attrs:{id:"发布-订阅模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅模式"}},[t._v("#")]),t._v(" 发布/订阅模式")]),t._v(" "),r("ul",[r("li",[t._v("可以有多个 topic 主题，如浏览、点赞、收藏、评论等")]),t._v(" "),r("li",[t._v("消费者消费数据之后，不删除数据")]),t._v(" "),r("li",[t._v("每个消费者相互独立，都可以消费到数据")]),t._v(" "),r("li",[r("img",{attrs:{src:s(798),alt:""}})])])])}),[],!1,null,null,null);a.default=i.exports},794:function(t,a,s){t.exports=s.p+"assets/img/2.2938cbbf.png"},795:function(t,a,s){t.exports=s.p+"assets/img/3.1e0cc9d1.png"},796:function(t,a,s){t.exports=s.p+"assets/img/4.d4e4f314.png"},797:function(t,a,s){t.exports=s.p+"assets/img/5.f63cab22.png"},798:function(t,a,s){t.exports=s.p+"assets/img/6.e843eea8.png"}}]);