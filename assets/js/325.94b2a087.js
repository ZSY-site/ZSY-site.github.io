(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{2608:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"html-拖放-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-拖放-api"}},[t._v("#")]),t._v(" HTML 拖放 API")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 拖放（Drag and Drop）"),r("OutboundLink")],1),t._v("接口使应用程序能够在浏览器中使用拖放功能。例如，用户可使用鼠标选择可拖拽（draggable）元素，将元素拖拽到可放置（droppable）元素，并释放鼠标按钮以放置这些元素。拖拽操作期间，会有一个可拖拽元素的半透明快照跟随着鼠标指针")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("事件")]),t._v(" "),r("th",[t._v("触发时刻")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("dragstart")]),t._v(" "),r("td",[t._v("当用户开始拖拽一个元素时触发")])]),t._v(" "),r("tr",[r("td",[t._v("dragover")]),t._v(" "),r("td",[t._v("当元素被拖到一个可释放目标上时触发(每 100 毫秒触发一次)")])]),t._v(" "),r("tr",[r("td",[t._v("dragend")]),t._v(" "),r("td",[t._v("当拖拽操作结束时触发")])])])]),t._v(" "),r("h2",{attrs:{id:"触摸事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#触摸事件"}},[t._v("#")]),t._v(" 触摸事件")]),t._v(" "),r("ul",[r("li",[t._v("HTML 拖放 API 不支持触摸事件，所以它不适用于平板电脑和移动设备")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Touch_events",target:"_blank",rel:"noopener noreferrer"}},[t._v("触摸事件(Touch_events)"),r("OutboundLink")],1),t._v("可为特定程序提供多点触控交互的支持")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("事件")]),t._v(" "),r("th",[t._v("触发时刻")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("touchstart")]),t._v(" "),r("td",[t._v("触摸开始")])]),t._v(" "),r("tr",[r("td",[t._v("touchmove")]),t._v(" "),r("td",[t._v("接触点移动")])]),t._v(" "),r("tr",[r("td",[t._v("touchend")]),t._v(" "),r("td",[t._v("触摸结束")])])])]),t._v(" "),r("h2",{attrs:{id:"getboundingclientrect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getboundingclientrect"}},[t._v("#")]),t._v(" getBoundingClientRect")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener noreferrer"}},[t._v("getBoundingClientRect"),r("OutboundLink")],1),t._v(" 方法返回元素的大小及其相对于视口的位置")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(862),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"clientx-y"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clientx-y"}},[t._v("#")]),t._v(" clientX/Y")]),t._v(" "),r("ul",[r("li",[t._v("event.clientX 鼠标相对于浏览器左上角 x 轴的坐标； 不随滚动条滚动而改变")]),t._v(" "),r("li",[t._v("event.clientY 鼠标相对于浏览器左上角 y 轴的坐标； 不随滚动条滚动而改变")])]),t._v(" "),r("h2",{attrs:{id:"react-hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[t._v("#")]),t._v(" React Hooks")]),t._v(" "),r("ul",[r("li",[t._v("useState 通过在函数组件里调用它来给组件添加一些内部 state,React 会在重复渲染时保留这个 state")]),t._v(" "),r("li",[t._v("useCallback 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新")]),t._v(" "),r("li",[t._v("useMemo 把创建函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值")]),t._v(" "),r("li",[t._v("useLayoutEffect 给函数组件增加了操作副作用的能力")])]),t._v(" "),r("h2",{attrs:{id:"高阶组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[t._v("#")]),t._v(" 高阶组件")]),t._v(" "),r("ul",[r("li",[t._v("高阶组件就是一个函数，传给它一个老组件，它返回一个新的组件")]),t._v(" "),r("li",[t._v("高阶组件的作用其实就是为了组件之间的代码复用")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NewComponent "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("higherOrderComponent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OldComponent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])])}),[],!1,null,null,null);e.default=s.exports},862:function(t,e,a){t.exports=a.p+"assets/img/1.936fae3c.png"}}]);