(window.webpackJsonp=window.webpackJsonp||[]).push([[1409],{3403:function(t,s,e){"use strict";e.r(s);var l=e(2),a=Object(l.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("css是不会阻塞html的解析的。当碰到样式的时候，并不会卡在那里等待样式解析完毕。")])]),t._v(" "),e("h2",{attrs:{id:"流程如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程如下"}},[t._v("#")]),t._v(" 流程如下")]),t._v(" "),e("ul",[e("li",[t._v("页面从上到下开始解析，会先把html全部解析完成后，在去解析css。")]),t._v(" "),e("li",[t._v("然后开始计算样式，计算样式的位置和大小等信息。")]),t._v(" "),e("li",[t._v("然后去更新layer tree，会进行分层。")]),t._v(" "),e("li",[t._v("分完层后就做绘制。")]),t._v(" "),e("li",[t._v("然后把多个图层附和起来，最终进行渲染。")])]),t._v(" "),e("blockquote",[e("p",[t._v("渲染dom时，要等待样式加载完毕。")])]),t._v(" "),e("h2",{attrs:{id:"若把样式放到底部-可能会导致重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#若把样式放到底部-可能会导致重绘"}},[t._v("#")]),t._v(" 若把样式放到底部，可能会导致重绘")]),t._v(" "),e("ul",[e("li",[t._v("解析到dom的时候，会变解析变渲染，也就是会有dom已经渲染了，不过由于css是放在底部，所以当样式解析完后，会再绘制一次，因此总共进行两次渲染/绘制。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);