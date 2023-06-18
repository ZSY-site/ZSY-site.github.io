(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{2400:function(e,a,t){"use strict";t.r(a);var v=t(2),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Title")]),e._v(" "),t("h1",{attrs:{id:"第十七课-实现并发更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十七课-实现并发更新"}},[e._v("#")]),e._v(" 第十七课：实现并发更新")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/BetaSu/big-react/commit/80cd89c8c3730a08b9aa8e204ca3f15ab1bbcbf7",target:"_blank",rel:"noopener noreferrer"}},[e._v("本节课代码地址"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("要实现并发更新，需要做的改动包括：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Lane")]),e._v("模型增加更多优先级")]),e._v(" "),t("li",[e._v("交互与优先级对应")]),e._v(" "),t("li",[e._v("调度阶段引入"),t("code",[e._v("Scheduler")]),e._v("，新增调度策略逻辑")]),e._v(" "),t("li",[t("code",[e._v("render")]),e._v("阶段可中断")]),e._v(" "),t("li",[e._v("根据"),t("code",[e._v("update")]),e._v("计算"),t("code",[e._v("state")]),e._v("的算法需要修改")])]),e._v(" "),t("h2",{attrs:{id:"扩展交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展交互"}},[e._v("#")]),e._v(" 扩展交互")]),e._v(" "),t("p",[e._v("思考一个问题：优先级从何而来？")]),e._v(" "),t("blockquote",[t("p",[e._v("答案：不同交互对应不同优先级。")])]),e._v(" "),t("p",[e._v("可以根据**「触发更新的上下文环境」**赋予不同优先级。比如：")]),e._v(" "),t("ul",[t("li",[e._v("点击事件需要同步处理")]),e._v(" "),t("li",[e._v("滚动事件优先级再低点")]),e._v(" "),t("li",[e._v("...")])]),e._v(" "),t("p",[e._v("更进一步，还能推广到任何**「可以触发更新的上下文环境」**，比如：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("useEffect create")]),e._v("回调中触发更新的优先级")]),e._v(" "),t("li",[e._v("首屏渲染的优先级")])]),e._v(" "),t("p",[e._v("下个问题：这些优先级的改动如何影响更新？")]),e._v(" "),t("blockquote",[t("p",[e._v("答案：只要优先级能影响 update，就能影响更新。")])]),e._v(" "),t("p",[e._v("当前我们掌握的与优先级相关的信息，包括：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Scheduler")]),e._v("的 5 种优先级")]),e._v(" "),t("li",[t("code",[e._v("React")]),e._v("中的"),t("code",[e._v("Lane")]),e._v("模型")])]),e._v(" "),t("p",[e._v("也就是说，运行流程在"),t("code",[e._v("React")]),e._v("时，使用的是"),t("code",[e._v("Lane")]),e._v("模型，运行流程在"),t("code",[e._v("Scheduler")]),e._v("时，使用的是优先级。所以需要实现两者的转换：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("lanesToSchedulerPriority")])]),e._v(" "),t("li",[t("code",[e._v("schedulerPriorityToLane")])])]),e._v(" "),t("h1",{attrs:{id:"扩展调度阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展调度阶段"}},[e._v("#")]),e._v(" # 扩展调度阶段")]),e._v(" "),t("p",[e._v("主要是在同步更新（微任务调度）的基础上扩展并发更新（"),t("code",[e._v("Scheduler")]),e._v("调度），主要包括：")]),e._v(" "),t("ul",[t("li",[e._v("将 Demo 中的调度策略移到项目中")]),e._v(" "),t("li",[t("code",[e._v("render")]),e._v("阶段变为**「可中断」**")])]),e._v(" "),t("p",[e._v("梳理两种典型场景：")]),e._v(" "),t("ul",[t("li",[e._v("时间切片")]),e._v(" "),t("li",[e._v("高优先级更新打断低优先级更新")])]),e._v(" "),t("h2",{attrs:{id:"扩展-state-计算机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展-state-计算机制"}},[e._v("#")]),e._v(" 扩展 state 计算机制")]),e._v(" "),t("p",[e._v("扩展**「根据 lane 对应 update 计算 state」**的机制，主要包括：")]),e._v(" "),t("ul",[t("li",[e._v("通过"),t("code",[e._v("update")]),e._v("计算"),t("code",[e._v("state")]),e._v("时可以跳过**「优先级不够的 update」**")]),e._v(" "),t("li",[e._v("由于**「高优先级任务打断低优先级任务」"),t("strong",[e._v("，同一个组件中")]),e._v("「根据 update 计算 state」**的流程可能会多次执行，所以需要保存"),t("code",[e._v("update")])])]),e._v(" "),t("h3",{attrs:{id:"跳过-update-需要考虑的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳过-update-需要考虑的问题"}},[e._v("#")]),e._v(" 跳过 update 需要考虑的问题")]),e._v(" "),t("p",[e._v("如何比较**「优先级是否足够」**？")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("lane")]),e._v("数值大小的直接比较不够灵活。")])]),e._v(" "),t("p",[e._v("如何同时兼顾**「update 的连续性」"),t("strong",[e._v("与")]),e._v("「update 的优先级」**？")]),e._v(" "),t("div",{staticClass:"language-auto line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// u0{  action: num => num + 1,  lane: DefaultLane}// u1{  action: 3,  lane: SyncLane}// u2{  action: num => num + 10,  lane: DefaultLane}// state = 0; updateLane = DefaultLane// 只考虑优先级情况下的结果：11// 只考虑连续性情况下的结果：13\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("新增"),t("code",[e._v("baseState")]),e._v("、"),t("code",[e._v("baseQueue")]),e._v("字段：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("baseState")]),e._v("是本次更新参与计算的初始"),t("code",[e._v("state")]),e._v("，"),t("code",[e._v("memoizedState")]),e._v("是上次更新计算的最终"),t("code",[e._v("state")])]),e._v(" "),t("li",[e._v("如果本次更新没有"),t("code",[e._v("update")]),e._v("被跳过，则下次更新开始时"),t("code",[e._v("baseState")]),e._v(" === "),t("code",[e._v("memoizedState")])]),e._v(" "),t("li",[e._v("如果本次更新有"),t("code",[e._v("update")]),e._v("被跳过，则本次更新计算出的"),t("code",[e._v("memoizedState")]),e._v("为**「考虑优先级」"),t("strong",[e._v("情况下计算的结果，"),t("code",[e._v("baseState")]),e._v("为")]),e._v("「最后一个没被跳过的 update 计算后的结果」**，下次更新开始时"),t("code",[e._v("baseState")]),e._v(" !== "),t("code",[e._v("memoizedState")])]),e._v(" "),t("li",[e._v("本次更新**「被跳过的 update 及其后面的所有 update」**都会被保存在"),t("code",[e._v("baseQueue")]),e._v("中参与下次"),t("code",[e._v("state")]),e._v("计算")]),e._v(" "),t("li",[e._v("本次更新**「参与计算但保存在 baseQueue 中的 update」**，优先级会降低到"),t("code",[e._v("NoLane")])])]),e._v(" "),t("p",[t("code",[e._v("// u0 { action: num => num + 1, lane: DefaultLane } // u1 { action: 3, lane: SyncLane } // u2 { action: num => num + 10, lane: DefaultLane } /* * 第一次render * baseState = 0; memoizedState = 0; * baseQueue = null; updateLane = DefaultLane; * 第一次render 第一次计算 * baseState = 1; memoizedState = 1; * baseQueue = null; * 第一次render 第二次计算 * baseState = 1; memoizedState = 1; * baseQueue = u1; * 第一次render 第三次计算 * baseState = 1; memoizedState = 11; * baseQueue = u1 -> u2(NoLane); */ /* * 第二次render * baseState = 1; memoizedState = 11; * baseQueue = u1 -> u2(NoLane); updateLane = SyncLane * 第二次render 第一次计算 * baseState = 3; memoizedState = 3; * 第二次render 第二次计算 * baseState = 13; memoizedState = 13; */")])]),e._v(" "),t("h2",{attrs:{id:"保存-update-的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存-update-的问题"}},[e._v("#")]),e._v(" 保存 update 的问题")]),e._v(" "),t("p",[e._v("考虑将"),t("code",[e._v("update")]),e._v("保存在"),t("code",[e._v("current")]),e._v("中。只要不进入"),t("code",[e._v("commit")]),e._v("阶段，"),t("code",[e._v("current")]),e._v("与"),t("code",[e._v("wip")]),e._v("不会互换，所以保存在"),t("code",[e._v("current")]),e._v("中，即使多次执行"),t("code",[e._v("render")]),e._v("阶段，只要不进入"),t("code",[e._v("commit")]),e._v("阶段，都能从"),t("code",[e._v("current")]),e._v("中恢复数据。")]),e._v(" "),t("h2",{attrs:{id:"课后思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课后思考"}},[e._v("#")]),e._v(" 课后思考")]),e._v(" "),t("p",[e._v("TODO：扩展"),t("code",[e._v("renderLane")]),e._v("的灵活性，将其扩展为"),t("code",[e._v("renderLanes")]),e._v("，更好利用"),t("code",[e._v("Lanes")]),e._v("这一数据机构能够表示多种"),t("code",[e._v("lane")]),e._v("的集合的能力。")])])}),[],!1,null,null,null);a.default=_.exports}}]);