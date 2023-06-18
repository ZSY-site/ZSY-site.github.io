(window.webpackJsonp=window.webpackJsonp||[]).push([[1150],{3041:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("updateObj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   {\n     upsert: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     multi: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   }\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[s._v("query 查询条件,指定要更新符合哪些条件的文档")]),s._v(" "),a("li",[s._v("update 更新后的对象或指定一些更新的操作符\n"),a("ul",[a("li",[s._v("$set直接指定更新后的值")]),s._v(" "),a("li",[s._v("$inc在原基础上累加")])])]),s._v(" "),a("li",[s._v("upsert 可选，这个参数的意思是，如果不存在符合条件的记录时是否插入updateObj. 默认是false,不插入。")]),s._v(" "),a("li",[s._v("multi 可选，mongodb 默认只更新找到的第一条记录，如果这个参数为true,就更新所有符合条件的记录。")])]),s._v(" "),a("h2",{attrs:{id:"upsert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upsert"}},[s._v("#")]),s._v(" upsert")]),s._v(" "),a("p",[s._v("将"),a("code",[s._v("students")]),s._v("集合中数据中"),a("code",[s._v("name")]),s._v("是zfpx2的值修改为zfpx22")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{_id:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zfpx1'")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{_id:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{name:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zfpx2'")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{upsert:"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nMatched"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nUpserted"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nModified"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"multi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi"}},[s._v("#")]),s._v(" multi")]),s._v(" "),a("ul",[a("li",[s._v("如果有多条name是zfpx2的数据只更新一条,如果想全部更新需要指定"),a("code",[s._v("{multi:true}")]),s._v("的参数")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{name:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zfpx2'")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(":{age:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("}}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("{multi:"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nMatched"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nUpserted"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nModified"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);