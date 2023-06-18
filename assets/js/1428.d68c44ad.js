(window.webpackJsonp=window.webpackJsonp||[]).push([[1428],{3445:function(v,_,l){"use strict";l.r(_);var t=l(2),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"面试题汇总"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#面试题汇总"}},[v._v("#")]),v._v(" 面试题汇总")]),v._v(" "),l("h3",{attrs:{id:"说说常见的设计模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#说说常见的设计模式"}},[v._v("#")]),v._v(" 说说常见的设计模式")]),v._v(" "),l("ul",[l("li",[v._v("是什么？我认为，设计模式就是在软件设计、开发过程中，针对特定问题、场景的更优解决方案。\n"),l("ul",[l("li",[l("ol",[l("li",[v._v("策略模式：")])]),v._v(" "),l("ul",[l("li",[v._v("定义：要实现某个功能，有很多种方案可以选择。那么我们就可以定义一个策略对象，把各个策略封装在这个对象内部，并且它们之间可以互相转换。(比如有件商品，对于不同类型的用户价格是不同，那么就可以根据不同的用户定义不同的算法封装到策略对象中。)")]),v._v(" "),l("li",[v._v("应用场景：\n"),l("ul",[l("li",[l("ol",[l("li",[v._v("jquery 中的 animate 方法，传入不同的参数，动画效果也是不同的，说明内部也是有定义了不同的策略")])])])])])])]),v._v(" "),l("li",[l("ol",{attrs:{start:"2"}},[l("li",[v._v("观察者模式：")])]),v._v(" "),l("ul",[l("li",[v._v("定义：一个被观察者会对应多个观察者，当被观察者的状态发生改变时，所以依赖于它的观察者都能得到通知并自动更新。(比如一个明星喜欢的颜色发生改变，那么明星就去调用自己的通知方法，去告知他的粉丝们。同时这个告知方法内部会调用粉丝们自己的更新方法。")]),v._v(" "),l("li",[v._v("应用场景：\n"),l("ul",[l("li",[l("ol",[l("li",[v._v("Promise.then 方法的内部实现")])])]),v._v(" "),l("li",[l("ol",{attrs:{start:"2"}},[l("li",[v._v("EventEmitter 的内部实现原理")])])])])])])]),v._v(" "),l("li",[l("ol",{attrs:{start:"3"}},[l("li",[v._v("还有一种与观察者类似的就是 【发布订阅模式】")])])]),v._v(" "),l("li",[v._v("定义：订阅者把自己想订阅的事件注册到调度中心。当该事件触发时候，发布者发布该事件到调度中心,由调度中心统一调度订阅者注册到调度中心的处理代码。比如。。。")]),v._v(" "),l("li",[l("ol",{attrs:{start:"4"}},[l("li",[v._v("适配器模式：")])]),v._v(" "),l("ul",[l("li",[v._v("定义：就是把原本不匹配的接口，通过适配器，转为匹配的接口。比如说地插提供的是 220v 的电压，但是我需要让它提供 12v 的电压，那么现在就可以通过一个适配转为 12v 的电压。")]),v._v(" "),l("li",[v._v("应用场景：\n"),l("ul",[l("li",[l("ol",[l("li",[v._v("后端返回的数据不是 json 格式，那么就可以封装一个方法，把它转为 json 格式")])])]),v._v(" "),l("li",[l("ol",{attrs:{start:"2"}},[l("li",[v._v("promisify，能够把普通的回调 转为返回 promise 的回调。")])])])])])])])])])]),v._v(" "),l("h3",{attrs:{id:"观察者模式与发布订阅模式的异同"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式与发布订阅模式的异同"}},[v._v("#")]),v._v(" 观察者模式与发布订阅模式的异同")]),v._v(" "),l("ul",[l("li",[v._v("相同点：\n"),l("ul",[l("li",[v._v("虽然两种模式都存在订阅者和发布者（观察者可认为是订阅者、被观察者可认为是发布者）")])])]),v._v(" "),l("li",[v._v("不同点：\n"),l("ul",[l("li",[v._v("观察者模式是由被观察者调度的，而发布/订阅模式是统一由调度中心调的。所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会。")])])])]),v._v(" "),l("h2",{attrs:{id:"创建型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建型"}},[v._v("#")]),v._v(" 创建型")]),v._v(" "),l("ul",[l("li",[v._v("工厂模式(工厂方法模式、抽象工厂模式、简单工厂模式)")]),v._v(" "),l("li",[v._v("建造者模式")]),v._v(" "),l("li",[v._v("单例模式")]),v._v(" "),l("li",[v._v("原型模式")])]),v._v(" "),l("h2",{attrs:{id:"结构型模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#结构型模式"}},[v._v("#")]),v._v(" 结构型模式")]),v._v(" "),l("ul",[l("li",[v._v("适配器模式")]),v._v(" "),l("li",[v._v("装饰器模式")]),v._v(" "),l("li",[v._v("代理模式")]),v._v(" "),l("li",[v._v("外观模式")]),v._v(" "),l("li",[v._v("巧接模式")]),v._v(" "),l("li",[v._v("组合模式")]),v._v(" "),l("li",[v._v("享元模式")])]),v._v(" "),l("h2",{attrs:{id:"行为型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#行为型"}},[v._v("#")]),v._v(" 行为型")]),v._v(" "),l("ul",[l("li",[v._v("策略模式")]),v._v(" "),l("li",[v._v("模版方法模式")]),v._v(" "),l("li",[v._v("观察者模式")]),v._v(" "),l("li",[v._v("迭代器模式")]),v._v(" "),l("li",[v._v("职责链模式")]),v._v(" "),l("li",[v._v("命令模式")]),v._v(" "),l("li",[v._v("备忘录模式")]),v._v(" "),l("li",[v._v("状态模式")]),v._v(" "),l("li",[v._v("访问者模式")]),v._v(" "),l("li",[v._v("中介者模式")]),v._v(" "),l("li",[v._v("解释器模式")])]),v._v(" "),l("h2",{attrs:{id:"总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),l("ul",[l("li",[v._v("行为型：状态模式、责任链模式、中介者模式、模板方法模式、访问者模式、解释器模式、备忘录模式、观察者模式、策略模式、命令模式、迭代器模式（形状折中模仿，戒备观测鸣笛）")]),v._v(" "),l("li",[v._v("结构型：享元模式、外观模式、组合模式、适配器模式、代理模式、装饰者模式、桥接模式（姐想外租，世代装桥）")]),v._v(" "),l("li",[v._v("创建型：工厂模式、原型模式、单例模式、建造者模式、抽象工厂模式（创公园，但见愁）")])])])}),[],!1,null,null,null);_.default=i.exports}}]);