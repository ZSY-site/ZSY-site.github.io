(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1142:function(t,s,a){t.exports=a.p+"assets/img/4.93cf4b20.png"},1143:function(t,s,a){t.exports=a.p+"assets/img/5.44c4c3f0.png"},1144:function(t,s,a){t.exports=a.p+"assets/img/6.307a47b9.png"},1145:function(t,s,a){t.exports=a.p+"assets/img/7.5bc5d5b7.png"},1146:function(t,s,a){t.exports=a.p+"assets/img/8.9ef58210.png"},1147:function(t,s,a){t.exports=a.p+"assets/img/9.917068e0.png"},1148:function(t,s,a){t.exports=a.p+"assets/img/10.60579a01.png"},1149:function(t,s,a){t.exports=a.p+"assets/img/11.689520df.png"},1150:function(t,s,a){t.exports=a.p+"assets/img/12.144ceb83.png"},1151:function(t,s,a){t.exports=a.p+"assets/img/13.48e01d5c.png"},1152:function(t,s,a){t.exports=a.p+"assets/img/14.25417765.png"},1153:function(t,s,a){t.exports=a.p+"assets/img/15.4c873f06.png"},1154:function(t,s,a){t.exports=a.p+"assets/img/16.9e0ac9a7.png"},1155:function(t,s,a){t.exports=a.p+"assets/img/17.7d3cd8d5.png"},1156:function(t,s,a){t.exports=a.p+"assets/img/18.280fa3b2.png"},1157:function(t,s,a){t.exports=a.p+"assets/img/19.a4ec1e75.png"},1158:function(t,s,a){t.exports=a.p+"assets/img/20.7b6b2da0.png"},1159:function(t,s,a){t.exports=a.p+"assets/img/21.5ab0c796.png"},1160:function(t,s,a){t.exports=a.p+"assets/img/22.3a28b7f4.png"},1161:function(t,s,a){t.exports=a.p+"assets/img/23.036ae18c.png"},2720:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"yaml-文件概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml-文件概述"}},[t._v("#")]),t._v(" YAML 文件概述")]),t._v(" "),n("p",[t._v("k8s 集群中对资源管理和资源对象编排部署都可以通过声明样式（YAML）文件来解决，也\n就是可以把需要对资源对象操作编辑到 YAML 格式文件中，我们把这种文件叫做资源清单文\n件，通过 kubectl 命令直接使用资源清单文件就可以实现对大量的资源对象进行编排部署\n了。")]),t._v(" "),n("h2",{attrs:{id:"yaml-文件书写格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml-文件书写格式"}},[t._v("#")]),t._v(" YAML 文件书写格式")]),t._v(" "),n("p",[t._v("（1）YAML 介绍\nYAML ：仍是一种标记语言。为了强调这种语言以数据做为中心，而不是以标记语言为重点。\nYAML 是一个可读性高，用来表达数据序列的格式。")]),t._v(" "),n("p",[t._v("（2）YAML 基本语法")]),t._v(" "),n("ul",[n("li",[t._v("使用空格做为缩进")]),t._v(" "),n("li",[t._v("缩进的空格数目不重要，只要相同层级的元素左侧对齐即可")]),t._v(" "),n("li",[t._v("低版本缩进时不允许使用 Tab 键，只允许使用空格")]),t._v(" "),n("li",[t._v("使用#标识注释，从这个字符一直到行尾，都会被解释器忽略")])]),t._v(" "),n("p",[t._v("（3）YAML 支持的数据结构")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("对象\n键值对的集合，又称为映射(mapping) / 哈希（hashes） / 字典（dictionary）\n"),n("img",{attrs:{src:a(1142),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("数组：\n一组按次序排列的值，又称为序列（sequence） / 列表 （list）\n"),n("img",{attrs:{src:a(1143),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("纯量（scalars）：\n单个的、不可再分的值\n"),n("img",{attrs:{src:a(1144),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1145),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1146),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1147),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1148),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1149),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1150),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1151),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1152),alt:""}})])])]),t._v(" "),n("h2",{attrs:{id:"资源清单描述方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资源清单描述方法"}},[t._v("#")]),t._v(" 资源清单描述方法")]),t._v(" "),n("p",[t._v("（1）在 k8s 中，一般使用 YAML 格式的文件来创建符合我们预期期望的 pod,这样的 YAML\n文件称为资源清单。\n（2）常用字段")]),t._v(" "),n("ul",[n("li",[t._v("必须存在的属性\n"),n("img",{attrs:{src:a(1153),alt:""}})]),t._v(" "),n("li",[t._v("spec 主要对象\n"),n("img",{attrs:{src:a(1154),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1155),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1156),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1157),alt:""}})]),t._v(" "),n("li",[t._v("额外的参数\n"),n("img",{attrs:{src:a(1158),alt:""}})])]),t._v(" "),n("p",[t._v("（3）举例说明\n"),n("img",{attrs:{src:a(1159),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1160),alt:""}}),t._v(" "),n("img",{attrs:{src:a(1161),alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);