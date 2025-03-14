---
title: 段落、文本、换行、水平线
---


# 段落、文本、换行、水平线



## 段落

段落是通过`<p>`标签定义的。

虽然直接将文本段落写在`<body></body>`内也可以在页面中呈现，但是推荐用`<p>`，因为前者不方便改变文本段落样式

```html
<p>这是一个文本段落</p>
<p>这是另一个文本段落</p>
```



## 文本

常用文本标签和段落是不同的，段落代表一段文本，而文本标签一般表示文本词汇

文本标签可以嵌套使用，都是双标签

**常用文本标签**：

|    标签    |                 描述                  |
| :--------: | :-----------------------------------: |
|   `<em>`   |      定义着重文字，和斜体差不多       |
|   `<i>`    |                 斜体                  |
|   `<b>`    |                 加粗                  |
| `<strong>` |        加重语气，和粗体差不多         |
|  `<del>`   |                删除线                 |
|  `<span>`  | 元素没有特定含义，为了CSS添加样式方便 |





## 换行

如果希望在不产生一个新的段落的情况下进行换行，可以使用`<br>`或`<br/>`，是一个单标签，元素是一个空的HTML元素。

```html
<p>第一行<br/>第二行</p>
```



## 水平线

`<hr/>`标签在HTML页面中创建水平线，单标签。

```html
<hr color="" width="" size="" align=""/>
```

- color：设置水平线颜色
- width：设置水平线长度
- size：设置水平线宽度
- align：设置水平线的对其方式（默认居中），可取值 left / right



