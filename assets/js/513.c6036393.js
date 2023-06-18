(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{2208:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),s("ul",[s("li",[t._v("State 表示 Model 的状态数据，通常表现为一个 javascript 对象（当然它可以是任何值）；")]),t._v(" "),s("li",[t._v("操作的时候每次都要当作不可变数据（immutable data）来对待，保证每次都是全新对象，没有引用关系，这样才能保证 State 的独立性，便于测试和追踪变化。")])]),t._v(" "),s("h2",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),s("ul",[s("li",[t._v("Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。")]),t._v(" "),s("li",[t._v("无论是从 UI 事件、网络回调，还是 WebSocket 等数据源所获得的数据，最终都会通过 dispatch 函数调用一个 action，从而改变对应的数据。")]),t._v(" "),s("li",[t._v("action 必须带有 type 属性指明具体的行为，其它字段可以自定义，")]),t._v(" "),s("li",[t._v("如果要发起一个 action 需要使用 dispatch 函数；")]),t._v(" "),s("li",[t._v("需要注意的是 dispatch 是在组件 connect Models以后，通过 props 传入的。")])]),t._v(" "),s("h2",{attrs:{id:"dispatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch"}},[t._v("#")]),t._v(" dispatch")]),t._v(" "),s("ul",[s("li",[t._v("dispatching function 是一个用于触发 action 的函数")]),t._v(" "),s("li",[t._v("action 是改变 State 的唯一途径，但是它只描述了一个行为，而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的。")]),t._v(" "),s("li",[t._v("在 dva 中，connect Model 的组件通过 props 可以访问到 dispatch，可以调用 Model 中的 Reducer 或者 Effects，常见的形式如：")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user/add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果在 model 外调用，需要添加 namespace")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要传递的信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"reducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducer"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),s("ul",[s("li",[t._v("Reducer（也称为 reducing function）函数接受两个参数：之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果。该函数把一个集合归并成一个单值。")]),t._v(" "),s("li",[t._v("在 dva 中，reducers 聚合积累的结果是当前 model 的 state 对象。")]),t._v(" "),s("li",[t._v("通过 actions 中传入的值，与当前 reducers 中的值进行运算获得新的值（也就是新的 state）。")]),t._v(" "),s("li",[t._v("需要注意的是 Reducer 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。")]),t._v(" "),s("li",[t._v("并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据（独立，纯净），所以热重载和时间旅行这些功能才能够使用。")])]),t._v(" "),s("h2",{attrs:{id:"effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#effect"}},[t._v("#")]),t._v(" Effect")]),t._v(" "),s("ul",[s("li",[t._v("Effect 被称为副作用，在我们的应用中，最常见的就是异步操作。")]),t._v(" "),s("li",[t._v("它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。")]),t._v(" "),s("li",[t._v("dva 为了控制副作用的操作，底层引入了redux-sagas做异步流程控制，由于采用了generator的相关概念，所以将异步转成同步写法，从而将effects转为纯函数。")])]),t._v(" "),s("h2",{attrs:{id:"subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[t._v("#")]),t._v(" Subscription")]),t._v(" "),s("ul",[s("li",[t._v("Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。")]),t._v(" "),s("li",[t._v("Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action")]),t._v(" "),s("li",[t._v("数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。")])]),t._v(" "),s("h2",{attrs:{id:"router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" Router")]),t._v(" "),s("ul",[s("li",[t._v("这里的路由通常指的是前端路由")]),t._v(" "),s("li",[t._v("由于我们的应用现在通常是单页应用，所以需要前端代码来控制路由逻辑")]),t._v(" "),s("li",[t._v("通过浏览器提供的 History API 可以监听浏览器url的变化，从而控制路由相关操作。")])]),t._v(" "),s("h2",{attrs:{id:"route-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-components"}},[t._v("#")]),t._v(" Route Components")]),t._v(" "),s("ul",[s("li",[t._v("在组件设计方法中，我们提到过 Container Components，在 dva 中我们通常将其约束为 Route Components")]),t._v(" "),s("li",[t._v("因为在 dva 中我们通常以页面维度来设计 Container Components。")]),t._v(" "),s("li",[t._v("所以在 dva 中，通常需要 connect Model的组件都是 Route Components，组织在/routes/目录下，而/components/目录下则是纯组件（Presentational Components）。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);