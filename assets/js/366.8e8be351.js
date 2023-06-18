(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1333:function(s,t,a){s.exports=a.p+"assets/img/12.211e76dc.png"},3047:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前话"}},[s._v("#")]),s._v(" 前话")]),s._v(" "),e("p",[s._v("分组查询就是按某列的值进行分组，相同的值分成一组，然后可以对此组内进行求平均、求和等计算")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1333),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 列名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("查询表达式\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表名"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("条件"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分组字段"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v(" 分组后的过滤条件\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" 列名 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" 偏移量"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("条数\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("SELECT列表中只能包含：")]),s._v(" "),e("ul",[e("li",[s._v("被分组的列")]),s._v(" "),e("li",[s._v("为每个分组返回一个值的表达式，如聚合函数")])]),s._v(" "),e("h2",{attrs:{id:"练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),e("ul",[e("li",[s._v("统计每位同学的平均成绩-单列分组")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" student_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grade"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" score "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" student_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("统计每门课程的最高分，并按分数从高到低排列")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" course_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grade"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 平均分 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" score "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" course_id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grade"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("统计各省的男女同学人数-多列分组")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" province"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" province"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gender\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"分组筛选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分组筛选"}},[s._v("#")]),s._v(" 分组筛选")]),s._v(" "),e("h3",{attrs:{id:"语法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表名"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" {col_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("expr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("position}\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v("  {col_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("expr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("position}\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" {col_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("expr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("position} "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("row_count\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[e("ol",[e("li",[s._v("WHERE用于过滤掉不符合条件的记录")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[s._v("HAVING 用于过滤分组后的记录")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[s._v("GROUP BY用于对筛选后的结果进行分组")])])])]),s._v(" "),e("h3",{attrs:{id:"练习-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#练习-2"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),e("ul",[e("li",[s._v("统计学生人数超过1人的省份")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" province"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" province "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("不及格次数大于1次的学生")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" student_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 不及格次数 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" score "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" grade "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" student_id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);