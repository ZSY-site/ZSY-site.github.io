(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1178:function(s,t,a){s.exports=a.p+"assets/img/10.b785f6a1.png"},1179:function(s,t,a){s.exports=a.p+"assets/img/11.702e966c.png"},1180:function(s,t,a){s.exports=a.p+"assets/img/12.87c2a07e.png"},1181:function(s,t,a){s.exports=a.p+"assets/img/13.e3b0e6e3.png"},2727:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"案例说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#案例说明"}},[s._v("#")]),s._v(" 案例说明")]),s._v(" "),e("blockquote",[e("p",[s._v("如下是 3 张表，分别是员工表、部门表、地址表，以及对应的表的字段。")])]),s._v(" "),e("blockquote",[e("p",[s._v("问题：为什么上面 3 张表不合成一张表，假如这 3 张表都合成一张表的话，那么假如 IT 部门有几百个人，那么就有很多行数据，这就很冗余。")])]),s._v(" "),e("blockquote",[e("p",[s._v("再假如某个员工不属于任何部门，那么就会导致原部门表的字段的值都为空。")])]),s._v(" "),e("blockquote",[e("p",[s._v("还有如果一个表中的字段太多，也难以维护。")])]),s._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:a(1178),alt:""}})])]),s._v(" "),e("ul",[e("li",[s._v("假如从多个表中获取数据：\n"),e("img",{attrs:{src:a(1179),alt:""}})])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询员工的姓名及该员工所在的部门名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 假如直接按照如下的sql语句查找的话，则会查找出很多的数据，甚至远超过实际员工人数，因此明显是有问题的！")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("按照上面错误的 sql 语句，它是拿着每个员工的部门 id，去直接连接部门表的每行数据\n"),e("img",{attrs:{src:a(1180),alt:""}})])]),s._v(" "),e("ul",[e("li",[s._v("我们把上述多表查询中出现的问题称为：笛卡尔积的错误。")])]),s._v(" "),e("h2",{attrs:{id:"笛卡尔积-或交叉连接-的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#笛卡尔积-或交叉连接-的理解"}},[s._v("#")]),s._v(" 笛卡尔积（或交叉连接）的理解")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("笛卡尔乘积是一个数学运算。假设我有两个集合 X 和 Y，那么 X 和 Y 的笛卡尔积就是 X 和 Y 的所有可能组合，也就是第一个对象来自于 X，第二个对象来自于 Y 的所有可能。组合的个数即为两个集合中元素个数的乘积数。")])]),s._v(" "),e("li",[e("p",[s._v("简单的说：(a, b, c) 与 (x, y) 形成一对，那么就有 3 * 2, 共 6 种方式")])]),s._v(" "),e("li",[e("p",[e("img",{attrs:{src:a(1181),alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("SQL92 中，笛卡尔积也称为 "),e("code",[s._v("交叉连接")]),s._v("，英文是 CROSS JOIN 。在 SQL99 中也是使用 CROSS JOIN 表示交叉连接。它的作用就是可以把任意表进行连接，即使这两张表不相关。在 MySQL 中如下情况会出现笛卡尔积：")])])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询员工姓名和所在部门名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("笛卡尔积的错误会在下面条件下产生：")]),s._v(" "),e("ul",[e("li",[e("ol",[e("li",[s._v("省略多个表的连接条件（或关联条件）")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[s._v("连接条件（或关联条件）无效")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[s._v("所有表中的所有行互相连接")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"4"}},[e("li",[s._v("为了避免笛卡尔积， 可以在 WHERE 加入有效的连接条件。")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"5"}},[e("li",[s._v("加入连接条件后，查询语法：")])])])])]),s._v(" "),e("li",[e("p",[s._v("正确写法如下:")])])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 案例：查询员工的姓名及其部门名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 注意：在表中有相同列时，在列名之前加上表名前缀。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" last_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" departments\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("department_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" departments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("department_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);