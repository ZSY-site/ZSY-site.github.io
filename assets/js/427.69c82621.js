(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{2050:function(s,t,a){s.exports=a.p+"assets/img/16.2f422457.png"},3594:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"面试题汇总"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试题汇总"}},[s._v("#")]),s._v(" 面试题汇总")]),s._v(" "),n("h3",{attrs:{id:"三数之和"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三数之和"}},[s._v("#")]),s._v(" 三数之和")]),s._v(" "),n("p",[n("img",{attrs:{src:a(2050),alt:""}})]),s._v(" "),n("ul",[n("li",[n("p",[s._v("思路：")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("先对数组从小到大进行排序")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("遍历数组，定义左指针，右指针和数组第一项。前两个是索引，第三个才是真正的数字。")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[s._v("如果数组的第一项大于0，那么直接返回空数组（数组的第一项都大于0了，那么后面的项肯定都大于0，那么就不可能三数之和为0了。）")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[s._v("然后需要去重!!! ：if (iNum == nums[i - 1]) continue")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"5"}},[n("li",[s._v("再来一个while循环，根据前面定义的索引，拿到三个数字。定义一个变量，记录这三个数字之和。")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"6"}},[n("li",[s._v("如果三数之和小于0，则左指针往后移动一位。如果三树之和大于0，则右指针往前移动一位。否则就是三数之和为0，就扔到数组中去。然后还得搞两个while进行去重，然后再左指针后移，右指针前移。")])])])])]),s._v(" "),n("li",[n("p",[s._v("注意！")]),s._v(" "),n("ul",[n("li",[s._v("三元组是不能重复的")]),s._v(" "),n("li",[s._v("但是一个三元组内的元素可以是重复的")])])])]),s._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.bilibili.com/video/BV1GW4y127qo/?spm_id_from=333.788&vd_source=7146746363d9e7490b0326e8f02bf64a",target:"_blank",rel:"noopener noreferrer"}},[s._v("题解"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("threeSum")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将数组排序")]),s._v("\n    nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" len"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" iNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组排过序，如果第一个数大于0直接返回res")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("iNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去重")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("iNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意这里，而不是 nums[i] === nums[i + 1]")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能取等号，如果取等号，那么用的就是同一个数字了")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" lNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" threeSum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" iNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" lNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" rNum\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 三数之和小于0，则左指针向右移动")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("threeSum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" \n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("threeSum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下面两个while的去重逻辑应该写在下边")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去重")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去重,比如碰到这样的：0 -1 -1 -1 -1 1 1 1 1")]),s._v("\n                    l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去重,比如碰到这样的：0 -1 -1 -1 -1 1 1 1 1")]),s._v("\n                    r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n                r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);