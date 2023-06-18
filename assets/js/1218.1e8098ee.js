(window.webpackJsonp=window.webpackJsonp||[]).push([[1218],{3132:function(a,e,t){"use strict";t.r(e);var r=t(2),v=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"面试题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试题汇总"}},[a._v("#")]),a._v(" 面试题汇总")]),a._v(" "),t("h3",{attrs:{id:"source-map是啥以及生产环境怎么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map是啥以及生产环境怎么用"}},[a._v("#")]),a._v(" source map是啥以及生产环境怎么用")]),a._v(" "),t("h2",{attrs:{id:"前话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前话"}},[a._v("#")]),a._v(" 前话")]),a._v(" "),t("ul",[t("li",[a._v("sourcemap是为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术")]),a._v(" "),t("li",[a._v("webpack通过配置可以自动给我们source maps文件，map文件是一种对应编译文件和源文件的方法")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/webpack/docs/wiki/build-performance#sourcemaps",target:"_blank",rel:"noopener noreferrer"}},[a._v("whyeval"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mozilla/source-map",target:"_blank",rel:"noopener noreferrer"}},[a._v("source-map"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("javascript_source_map算法"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"source-map的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map的类型"}},[a._v("#")]),a._v(" source map的类型")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("类型")]),a._v(" "),t("th",[a._v("含义")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("source-map")]),a._v(" "),t("td",[a._v("原始代码 最好的sourcemap质量有完整的结果，但是会很慢")])]),a._v(" "),t("tr",[t("td",[a._v("eval-source-map")]),a._v(" "),t("td",[a._v("原始代码 同样道理，但是最高的质量和最低的性能")])]),a._v(" "),t("tr",[t("td",[a._v("cheap-module-eval-source-map")]),a._v(" "),t("td",[a._v("原始代码（只有行内） 同样道理，但是更高的质量和更低的性能")])]),a._v(" "),t("tr",[t("td",[a._v("cheap-eval-source-map")]),a._v(" "),t("td",[a._v("转换代码（行内） 每个模块被eval执行，并且sourcemap作为eval的一个dataurl")])]),a._v(" "),t("tr",[t("td",[a._v("eval")]),a._v(" "),t("td",[a._v("生成代码 每个模块都被eval执行，并且存在@sourceURL,带eval的构建模式能cache SourceMap")])]),a._v(" "),t("tr",[t("td",[a._v("cheap-source-map")]),a._v(" "),t("td",[a._v("转换代码（行内） 生成的sourcemap没有列映射，从loaders生成的sourcemap没有被使用")])]),a._v(" "),t("tr",[t("td",[a._v("cheap-module-source-map")]),a._v(" "),t("td",[a._v("原始代码（只有行内） 与上面一样除了每行特点的从loader中进行映射")])])])]),a._v(" "),t("p",[a._v("看似配置项很多， 其实只是五个关键字eval、source-map、cheap、module和inline的任意组合")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("关键字")]),a._v(" "),t("th",[a._v("含义")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("eval")]),a._v(" "),t("td",[a._v("使用eval包裹模块代码")])]),a._v(" "),t("tr",[t("td",[a._v("source-map")]),a._v(" "),t("td",[a._v("产生.map文件")])]),a._v(" "),t("tr",[t("td",[a._v("cheap")]),a._v(" "),t("td",[a._v("不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap")])]),a._v(" "),t("tr",[t("td",[a._v("module")]),a._v(" "),t("td",[a._v("包含loader的sourcemap（比如jsx to js ，babel的sourcemap）,否则无法定义源文件")])]),a._v(" "),t("tr",[t("td",[a._v("inline")]),a._v(" "),t("td",[a._v("将.map作为DataURI嵌入，不单独生成.map文件")])])])]),a._v(" "),t("ul",[t("li",[a._v("eval eval执行")]),a._v(" "),t("li",[a._v("eval-source-map 生成sourcemap")]),a._v(" "),t("li",[a._v("cheap-module-eval-source-map 不包含列")]),a._v(" "),t("li",[a._v("cheap-eval-source-map 无法看到真正的源码")])]),a._v(" "),t("h2",{attrs:{id:"如何选择source-map的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择source-map的类型"}},[a._v("#")]),a._v(" 如何选择source map的类型")]),a._v(" "),t("ul",[t("li",[a._v("首先在源代码的列信息是没有意义的，只要有行信息就能完整的建立打包前后代码之间的依赖关系。因此，不管是开发还是生产环境都会增加cheap属性来忽略模块打包后的列信息关联")]),a._v(" "),t("li",[a._v("不管是生产环境还是开发环境，我们都需要定位debug到最原始的资源，比如定位错误到jsx，ts的原始代码，而不是经编译后的js代码。所以不可以忽略掉module属性")]),a._v(" "),t("li",[a._v("需要生成.map文件，所以得有source-map属性")]),a._v(" "),t("li",[a._v("总结\n"),t("ul",[t("li",[a._v("开发环境使用：cheap-module-eval-source-map")]),a._v(" "),t("li",[a._v("生产环境使用：cheap-module-source-map")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);