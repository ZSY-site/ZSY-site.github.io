(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1605:function(t,a,s){t.exports=s.p+"assets/img/106.53421e27.png"},1606:function(t,a,s){t.exports=s.p+"assets/img/107.37cc1b02.png"},1607:function(t,a,s){t.exports=s.p+"assets/img/108.2285ae4d.png"},1608:function(t,a,s){t.exports=s.p+"assets/img/109.4946cf4a.png"},3365:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ul",[n("li",[t._v("HTTP Archive 上的数据显示，网站传输的数据中，60%的资源都是由各种图像文件组成的，当然这个数据是将各种类型网站平均之后的结果，要是单独看电商类面向消费者端页面的数据，这个比例可能会更大。如此之大的资源占比，也同样意味着存在很大的优化空间。")])]),t._v(" "),n("h2",{attrs:{id:"图像是否必须"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图像是否必须"}},[t._v("#")]),t._v(" 图像是否必须")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("图像资源优化的根本思想，可以归结为两个字：压缩。无论是选取何种图像的文件格式，还是针对同一种格式压缩至更小的尺寸，其本质都是用更小的资源开销来完成图像的传输和展示。")])]),t._v(" "),n("li",[n("p",[t._v("在深入探讨之前，我们首先思考一下要达到期望的信息传递效果，是否真的需要图像？这不仅是因为图像资源与网页上的其他资源（HTML/CSS/JavaScript等）相比有更大的字节开销，出于对节省资源的考虑，对用户注意力的珍惜也很重要，如果一个页面打开后有很多图像，那么用户其实很难快速梳理出有效的信息，即便获取到了也会让用户觉得很累。")])]),t._v(" "),n("li",[n("p",[t._v("一个低感官体验的网站，它的价值转化率不会很高。当然这个问题的答案不是通过自己简单想想就能得到的，我们可能需要在日常的开发中与产品经理及体验设计师不断沟通，不断思考，来趋近更优的方案。")])]),t._v(" "),n("li",[n("p",[t._v("当确定了图像的展示效果必须存在时，在前端实现上也并非一定就要用图像文件，还存在一些场景可以使用更高效的方式来实现所需的效果。")]),t._v(" "),n("ul",[n("li",[t._v("网站中一个图像在不同的页面或不同的交互状态下，需要呈现出不同的效果（边角的裁切、阴影或渐变），其实没有必要为不同场景准备不同效果的多份图像文件，只需用 CSS 将一张图像处理为所需的不同效果即可。相对于一个图像文件的大小来讲，修改其所增加的 CSS 代码量可以忽略不计。")]),t._v(" "),n("li",[t._v("如果一个图像上面需要显示文字，建议使用网页字体的形式通过前端代码进行添加，而不是使用带文字的图像，其原因一方面是包含了更多信息的图像文件一般会更大，另一方面是图像中的文本信息带来的用户体验一般较差（不可选择、搜索及缩放），并且在高分辨率设备上的显示效果也会打折扣。")])])]),t._v(" "),n("li",[n("p",[t._v("这里列举的两个例子，为了说明当我们在选择使用某种资源之前，如果期望达到更优的性能效果，则需要先去思考这种选择是否必需。")])])]),t._v(" "),n("h2",{attrs:{id:"矢量图和位图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#矢量图和位图"}},[t._v("#")]),t._v(" 矢量图和位图")]),t._v(" "),n("ul",[n("li",[t._v("当确定了图像是实现展示效果的最佳方式时，接下来就是选择合适的图像格式。图像文件可以分为两类：矢量图和位图。每种类型都有其各自的优缺点和适用场景。")])]),t._v(" "),n("h3",{attrs:{id:"矢量图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#矢量图"}},[t._v("#")]),t._v(" 矢量图")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("矢量图中的图形元素被定义为一个对象，包括颜色、大小、形状及屏幕位置等属性。它适合如文本、品牌 logo、控件图标及二维码等构图形状较简单的几何图形。矢量图的优点是能够在任何缩放比例下呈现出细节同样清晰的展示效果。其缺点是对细节的展示效果不够丰富，对足够复杂的图像来说，比如要达到照片的效果，若通过 SVG 进行矢量图绘制，则所得文件会大得离谱，但即便如此也很难达到照片的真实效果。")])]),t._v(" "),n("li",[n("p",[t._v("SVG 也是一种基于 XML 的图像格式，其全称是 Scalable Vector Graphics（可缩放的矢量图形），目前几乎所有浏览器都支持 SVG。我们可以在 "),n("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iconfont"),n("OutboundLink")],1),t._v(" 上找到许多矢量图，或者上传自己绘制的矢量图，在上面构建自己的矢量图标库并引入项目进行使用，如下图所示。")])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(1605),alt:""}})]),t._v(" "),n("p",[t._v("标识照片的矢量图标的 SVG 标签格式，如下所示。")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 待补充 --\x3e")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("SVG 标签所包括的部分就是该矢量图的全部内容，除了必要的绘制信息，可能还包括一些元数据，比如 XML 命名空间、图层及注释信息。但这些信息对浏览器绘制一个 SVG 来说并不是必要的，所以在使用前可通过工具去除这些元数据来达到压缩的目的。")])]),t._v(" "),n("h3",{attrs:{id:"位图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#位图"}},[t._v("#")]),t._v(" 位图")]),t._v(" "),n("ul",[n("li",[t._v("位图是通过对一个矩阵中的栅格进行编码来表示图像的，每个栅格只能编码表示一个特定的颜色，如果组成图像的栅格像素点越多且每个像素点所能表示的颜色范围越广，则位图图像整体的显示效果就会越逼真。虽然位图没有像矢量图那种不受分辨率影响的优秀特性，但对于复杂的照片却能提供较为真实的细节体验，如图中一幅海边的位图对于云朵及波浪的细节表现，如果用矢量图来实现是不可想象的。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(1606),alt:""}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("当把图像不断放大后，就会看到许多栅格像素色块，如图所示。每个像素存储的是图像局部的 RGBA 信息，即红绿蓝三色通道及透明度。通常浏览器会为每个颜色通道分配一个字节的存储空间，即 2的8次方=256 个色阶值。\n"),n("img",{attrs:{src:s(1607),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("一个像素点4个通道就是4字节，一张图像整体的大小与其包含的像素数成正比，图像包含的像素越多，所能展示的细节就越丰富，同时图像就越大。")])]),t._v(" "),n("li",[n("p",[t._v("如表所示，当图像尺寸为100像素×100像素时，文件大小为39KB。随着图像尺寸在长和宽两个维度上同时增大，所产生像素数量的增加就不是简单的线性关系了，而是平方的抛物线增加，也就是说文件大小会迅速增加，在网络带宽一定的前提下，下载完一张图像会更慢。")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("图像尺寸")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("像素数量")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("文件大小")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("100像素 * 100像素")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("10000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("39KB")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("200像素 * 200像素")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("40000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("156KB")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("500像素 * 500像素")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("250000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("977KB")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("800像素 * 800像素")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("640000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("2.5MB")])])])]),t._v(" "),n("ul",[n("li",[t._v("出于对性能的考虑，在使用图像时必须考虑对图像进行压缩，采用什么样的图像格式，使用什么样的压缩算法及压缩到何种程度，这将是本章接下来详细讨论的内容，但在此之前先说明关于分辨率的两个容易混淆的概念。")])]),t._v(" "),n("h2",{attrs:{id:"分辨率"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分辨率"}},[t._v("#")]),t._v(" 分辨率")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("在前端开发过程中书写 CSS 时，经常会为图像设置显示所需的长宽像素值，但在不同的设备屏幕上，有时候相同的图像及相同的设置，其渲染出来的图像会让人明显察觉出清晰度有差别。产生这个现象的原因涉及两种不同的分辨率：屏幕分辨率和图像分辨率。")])]),t._v(" "),n("li",[n("p",[t._v("图像分辨率表示的就是该图像文件所包含的真实像素值信息，比如一个 200像素×200像素 的分辨率的图像文件，它就定义了长宽各200个像素点的信息。设备分辨率则是显示器屏幕所能显示的最大像素值，比如一台13英寸的 MacBook Pro 笔记本电脑的显示器分辨率为2560像素×1600像素。这两种分辨率都用到了像素，那么它们有什么区别呢？")])]),t._v(" "),n("li",[n("p",[t._v("例如，10像素×10像素的图像分辨率，既可以使用10像素×10像素的设备分辨率来显示，又可以使用20像素×20像素或40像素×40像素的设备分辨率来显示，效果如图所示。\n"),n("img",{attrs:{src:s(1608),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("从图中可以看到更高的设备分辨率有助于显示更绚丽多彩的图像，这其实很适合矢量图的发挥，因为它不会因放大而失真。而对位图来说，只有图像文件包含更多的像素信息时，才能更充分地利用屏幕分辨率。为了能在不同的分辨率下使项目中所包含的图像都能得到恰当的展示效果，可以利用 "),n("code",[t._v("picture")]),t._v(" 标签和 "),n("code",[t._v("srcset")]),t._v(" 属性提供图像的多个变体。")])]),t._v(" "),n("li",[n("p",[t._v("用于插入图像的 img 标签，有一个 "),n("code",[t._v("srcset")]),t._v(" 属性可以用来针对不同设备，提供不同分辨率的图像文件：")])])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo@2x.jpg 2x,photo@3x.jpg 3x,photo@4x.jpg 4x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("ul",[n("li",[n("p",[t._v("除了 IE 和其他较低版本的浏览器不支持，目前主流的大部分浏览器都已支持 "),n("code",[t._v("img")]),t._v(" 标签的 "),n("code",[t._v("srcset")]),t._v(" 属性。在 "),n("code",[t._v("srcset")]),t._v(" 属性中设置多种分辨率的图像文件及使用条件，浏览器在请求之前便会先对此进行解析，只选择最合适的图像文件进行下载，如果浏览器不支持，请务必在 "),n("code",[t._v("src")]),t._v(" 属性中包含必要的默认图片。")])]),t._v(" "),n("li",[n("p",[t._v("使用picture标签则会在多图像文件选择时，获得更多的控制维度，比如屏幕方向、设备大小、屏幕分辨率等。")])])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("picture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 800px)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.jpg, photo-2x.jpg 2x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 800px)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo-s.jpg, photo-s-2x.jpg 2x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("picture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("ul",[n("li",[t._v("由于 "),n("code",[t._v("picture")]),t._v(" 标签也是加入标准不久的元素标签，所以在使用过程中，同样应当考虑兼容性问题。")])]),t._v(" "),n("h2",{attrs:{id:"有损压缩和无损压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有损压缩和无损压缩"}},[t._v("#")]),t._v(" 有损压缩和无损压缩")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("压缩是降低源文件大小的有效方式，对 JavaScript 代码或网页的一些脚本文件而言，压缩掉的内容是一些多余的空格及不影响执行的注释，其目的是在不损坏正常执行的情况下，尽量缩小源文件的大小。对图像文件而言，由于人眼对不同颜色的敏感度存在差异，所以便可通过减少对某种颜色的编码位数来减小文件大小，甚至还可以损失部分源文件信息，以达到近似的效果，使得压缩后的文件尺寸更小。")])]),t._v(" "),n("li",[n("p",[t._v("对于图像压缩，应该采用有损压缩还是无损压缩？如果都采用又该如何搭配设置呢？当结合了具体的业务需求再考虑后，关于压缩的技术选型就可以简单分成两步进行。")]),t._v(" "),n("ul",[n("li",[t._v("（1）首先确定业务所要展示图像的颜色阶数、图像显示的分辨率及清晰程度，当锚定了这几个参数的基准后，如果获取的图像源文件的相应参数指标过高，便可适当进行有损压缩，通过降低源文件图像质量的方法来降低图像文件大小。如果业务所要求的图像质量较高，便可跳过有损压缩，直接进入第二步无损压缩。所以是否要进行有损压缩，其实是在理解了业务需求后的一个可选选项，而非必要的。")]),t._v(" "),n("li",[t._v("（2）当确定了展示图像的质量后，便可利用无损压缩技术尽可能降低图像大小。和第（1）步要通过业务决策来判断是否需要所不同的是，无损压缩是应当完成的工作环节。那么最好能通过一套完善的工程方案，自动化执行来避免烦琐的人工重复工作。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);