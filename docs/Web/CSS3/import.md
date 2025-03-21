---
title: CSS的引入方式
---


# CSS的引入方式



## **内联样式（行内样式）**

要使用内联样式，你需要在相关的标签内使用样式（style）属性（写在需要改变样式的`.html`文件里的对应标签的属性内）。style属性可以包含任何CSS属性。

> **注意**：缺乏整体性和规范性，不利于维护，维护成本高

```html
<p style="background: orange; frot-size: 24px;">单个文字标签改变样式，不能实现多个标签改变成相同样式</p>
```


## **内部样式**

当<u>单个整个`.html`文档</u>需要特殊样式时，就应该使用内部样式表。可以使用`<style>`标签在文档头部定义内部样式表。

> **注意**：用此方法则单个页面内的CSS代码具有统一性和规范性，便于维护，但是在多个页面之间容易混乱

```html
<head>
    <style>
        h1 {
            background: yellow;
        }
    </style>
</head>
```



## **外部样式（推荐）**

当样式需要应用于<u>很多页面</u>时，外部样式表将是理想的选择。在使用外部样式表的情况下，可以通过改变一个文件来改变整个站点的外观。每个页面使用`<link>`标签链接到样式表。`<link>`标签在（文档的）头部。

例如 改变段落的样式：

```css
/*在.css文件中*/
p {
    color: blue;
    frot-size: 12px;
}
```

```html
<!--在要改变样式的.html文件中-->
<head>
    <link rel="stylesheet" type="text/css" href=".css文件的路径">
    <!--type可以不写-->
</head>
```
