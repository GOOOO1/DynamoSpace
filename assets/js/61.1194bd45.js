(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{375:function(s,t,a){"use strict";a.r(t);var n=a(25),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"二-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-函数"}},[s._v("#")]),s._v(" 二. 函数")]),s._v(" "),t("p",[s._v("函数原型：由函数首部+分号组成   （如："),t("code",[s._v("int Sum (int x,int y);")]),s._v("）")]),s._v(" "),t("h2",{attrs:{id:"_1-带默认参数的函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-带默认参数的函数"}},[s._v("#")]),s._v(" 1.带默认参数的函数")]),s._v(" "),t("p",[t("strong",[s._v("例")]),s._v("："),t("code",[s._v("int Sum (int a=3,int b=10);")])]),s._v(" "),t("p",[s._v("当进行函数调用时，编译器按"),t("strong",[s._v("从左向右")]),s._v("的顺序将实参与形参"),t("strong",[s._v("结合")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("若没有声明函数原型，参数的默认值可在函数定义的头部进行设置。")]),s._v(" "),t("p",[s._v("如果在函数声明中设置了默认值，则函数定义中"),t("u",[s._v("不能")]),s._v("再为这些参数"),t("u",[s._v("设置不同的默认值")]),s._v("，否则，编译器会报错。")]),s._v(" "),t("p",[s._v("不过建议在声明中进行设置，这样就不用为了看哪些参数有默认值而去看函数的具体实现。")])]),s._v(" "),t("li",[t("p",[s._v("在一个"),t("u",[s._v("指定了默认值的参数的"),t("strong",[s._v("右边")]),s._v("，不能出现没有指定默认值的参数")]),s._v("，即默认值只能"),t("strong",[s._v("从右到左设置")])])]),s._v(" "),t("li",[t("p",[s._v("设置"),t("u",[s._v("默认值时可以用表达式，但表达式中不能用局部变量")]),s._v("，如："),t("code",[s._v("int Sum (int a=3,int b=a);")]),s._v(" "),t("strong",[s._v("错的")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-函数的参数传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数的参数传递"}},[s._v("#")]),s._v(" 2.函数的参数传递")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("值传递")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("指针传递")])]),s._v(" "),t("p",[s._v("如："),t("code",[s._v("void swap (int *x,int *y){...}")])]),s._v(" "),t("p",[s._v("​        "),t("code",[s._v("swap (&a,&b);")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("传引用")]),s._v("，如：")])])]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//x,y相当于a,b别名，其地址与a,b相同，最后能实现交换，swap结束后，x,y,t均被释放")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//调用")]),s._v("\n    cout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//最后a,b的值被互换")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"_3-内联函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-内联函数"}},[s._v("#")]),s._v(" 3.内联函数")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("inline")]),s._v("关键字声明一个函数，也成为"),t("u",[s._v("内嵌函数")])]),s._v(" "),t("blockquote",[t("p",[s._v("引入内联函数的目的是"),t("strong",[s._v("为了消除函数调用时的系统开销，以提高运行速度")])])]),s._v(" "),t("p",[t("strong",[s._v("格式：")]),t("code",[s._v("inline <返回值类型> <函数名> （<形参列表>）")])]),s._v(" "),t("p",[s._v("​           "),t("code",[s._v("{<函数体>}")])]),s._v(" "),t("p",[s._v("如：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("circle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//声明时不加inline，在使用的地方后面定义，则需在使用的地方前面声明")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        cout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"area="')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("circle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此处的circle(i)相当于换成了函数体内容，就不用在主函数内外来回切换")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inline")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("circle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ol",[t("li",[t("u",[s._v("递归函数不能")]),s._v("被定义为内联函数")]),s._v(" "),t("li",[s._v("内联函数一般适合于"),t("u",[s._v("不含有")]),s._v("switch和while等"),t("u",[s._v("复杂的结构")]),s._v("且"),t("u",[s._v("只有1-5条语句的小函数")]),s._v("，否则编译系统将视为普通函数")]),s._v(" "),t("li",[s._v("内联函数"),t("u",[s._v("只能先定义后使用")]),s._v("，否则编译系统将视为普通函数")]),s._v(" "),t("li",[s._v("对内联函数"),t("u",[s._v("不能进行异常接口声明")])]),s._v(" "),t("li",[s._v("inline"),t("u",[s._v("只是建议编译器")]),s._v("将函数嵌入到调用处，如果函数长度、复杂度不符合，编译器不会把它作为内联函数")])]),s._v(" "),t("h2",{attrs:{id:"_4-重载函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-重载函数"}},[s._v("#")]),s._v(" 4.重载函数")]),s._v(" "),t("blockquote",[t("p",[s._v("编译系统将根据"),t("u",[s._v("函数参数的类型和个数")]),s._v("来判断使用哪一个函数")])]),s._v(" "),t("p",[t("strong",[s._v("重载函数需具有：")])]),s._v(" "),t("ul",[t("li",[s._v("相同的函数名")]),s._v(" "),t("li",[s._v("不同的  参数个数  或  数据类型  或  类型对应顺序")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ol",[t("li",[s._v("若两个函数除了返回类型不同外，其他均相同，则是非法的")]),s._v(" "),t("li",[s._v("重载与带缺省值的函数一起使用时，有可能引起二义性")])]),s._v(" "),t("p",[s._v("错误案例：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//该语句对于上面两个函数均可调用，造成了二义性")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);