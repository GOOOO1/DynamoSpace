(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{367:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"映射map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射map"}},[t._v("#")]),t._v(" 映射map")]),t._v(" "),s("p",[s("code",[t._v("#include <map>")])]),t._v(" "),s("p",[t._v("提供对数时间的有序键值对结构。底层原理是"),s("strong",[t._v("红黑树")]),t._v("。")]),t._v(" "),s("p",[t._v("映射：")]),t._v("\n0\\to3\\\\\n1\\to2\\\\\n2\\to2\\\\\n3\\to1\\\\\n4\\to5\\\\\n...\n\n"),s("table",[s("thead",[s("tr",[s("th",[t._v("性质")]),t._v(" "),s("th",[t._v("解释")]),t._v(" "),s("th",[t._v("map")]),t._v(" "),s("th",[t._v("multimap")]),t._v(" "),s("th",[t._v("unordered_map")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("互异性")]),t._v(" "),s("td",[t._v("一个键仅可在映射中出现一次")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("no（任意次）")]),t._v(" "),s("td",[t._v("yes")])]),t._v(" "),s("tr",[s("td",[t._v("无序性")]),t._v(" "),s("td",[t._v("键是没有顺序的")]),t._v(" "),s("td",[t._v("no（从小到大）")]),t._v(" "),s("td",[t._v("no（从小到大）")]),t._v(" "),s("td",[t._v("yes")])])])]),t._v(" "),s("p",[s("u",[t._v("map可以实现任意类型到任意类型的映射")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从int到int的映射与数组相似")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下标就相当于键")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从string到int的映射可用map")]),t._v("\nmap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可改")]),t._v("\ncout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ghi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出0，因为初值为0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"_1-常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用方法"}},[t._v("#")]),t._v(" 1. 常用方法")]),t._v(" "),s("h3",{attrs:{id:"构造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造"}},[t._v("#")]),t._v(" 构造")]),t._v(" "),s("p",[s("code",[t._v("map<键类型, 值类型, 比较器> map")])]),t._v(" "),s("ul",[s("li",[t._v("键类型：要存储键的数据类型")]),t._v(" "),s("li",[t._v("值类型：要存储值的数据类型")]),t._v(" "),s("li",[t._v("比较器：键比较大小使用的比较器，默认为"),s("code",[t._v("less<类型>")]),t._v("，可自定义")])]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mp1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//int->int的映射，键从小到大")]),t._v("\nmap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" greater"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" mp2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//int->int的映射，键从大到小")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("对于需要自定义比较器的情况，涉及一些初学时容易看迷糊的语法(重载小括号运算符/lambda 表达式)，在此就不展开讲了。")])]),t._v(" "),s("h3",{attrs:{id:"遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[t._v("#")]),t._v(" 遍历")]),t._v(" "),s("p",[t._v("可使用迭代器进行遍历：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("iterator it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("first "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("second "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("基于范围的循环（C++ 11）：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" pr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" pr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("结构化绑定+基于范围的循环（C++ 17）：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("用法")]),t._v(" "),s("th",[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("增/改/查元素")]),t._v(" "),s("td",[t._v("中括号")]),t._v(" "),s("td",[s("code",[t._v("mp[1] = 2;")])])]),t._v(" "),s("tr",[s("td",[t._v("查元素（返回迭代器）")]),t._v(" "),s("td",[s("code",[t._v(".find(元素)")])]),t._v(" "),s("td",[s("code",[t._v("auto it = mp.find(1);")])])]),t._v(" "),s("tr",[s("td",[t._v("删除元素")]),t._v(" "),s("td",[s("code",[t._v(".erase(元素)")])]),t._v(" "),s("td",[s("code",[t._v("mp.erase(2);")])])]),t._v(" "),s("tr",[s("td",[t._v("判断元素是否存在")]),t._v(" "),s("td",[s("code",[t._v(".count(元素)")])]),t._v(" "),s("td",[s("code",[t._v("mp.count(3);")])])]),t._v(" "),s("tr",[s("td",[t._v("查看大小/清空/判空")]),t._v(" "),s("td",[t._v("略")]),t._v(" "),s("td",[t._v("略")])])])]),t._v(" "),s("p",[t._v("增删改查时间复杂度为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",[t._v("(")]),s("mi",[t._v("log")]),s("mi",[t._v("n")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(\\log n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mop"},[t._v("lo"),s("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-适用情形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-适用情形"}},[t._v("#")]),t._v(" 2. 适用情形")]),t._v(" "),s("p",[t._v("需要维护映射的场景可以使用：输入字符串，统计每种字符串的出现次数。（"),s("code",[t._v("map<string, int> mp")]),t._v("）")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" pr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" pr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ab 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cd 2")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("h2",{attrs:{id:"_3-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-注意事项"}},[t._v("#")]),t._v(" 3. 注意事项")]),t._v(" "),s("h3",{attrs:{id:"中括号访问时默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中括号访问时默认值"}},[t._v("#")]),t._v(" 中括号访问时默认值")]),t._v(" "),s("p",[t._v("如果使用中括号访问map时对应的键不存在，那么会新增这个键，并且值为默认值，因此中括号会影响键的存在性。")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//即使什么都没做，但mp['a']=0已经插入了")]),t._v("\ncout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\ncout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"不可用迭代器计算下标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可用迭代器计算下标"}},[t._v("#")]),t._v(" 不可用迭代器计算下标")]),t._v(" "),s("p",[t._v("map的迭代器不能像vector一样相减得到下标。"),s("strong",[t._v("下面是错误用法")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);