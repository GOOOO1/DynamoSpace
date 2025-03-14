---
title: CSS
---


# CSS简介



**CSS概念**：

CSS（Cascading Style Sheets）层叠样式表，又叫级联样式表，简称样式表。

CSS文件后缀名为`.css`，也可以在`.html`文件里写，但建议用前者。

CSS用于HTML文档中元素样式的定义 。



**为什么需要CSS？**

使用CSS的唯一目的就是让网页具有美观一致的页面。



**语法**：

CSS规则由两个主要的部分组成：**[选择器](https://manman-dynamo.space/Web/CSS/selector.html)**，以及**一条或多条声明（样式）**

![CSS主要组成部分](/img/CSS1.png)

选择器通常是需要改变样式的HTML元素

每条声明由一个属性或一个值组成

属性（property）是希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。 例：

```css
<style>
    h1{
        color: blue;
        frot-size: 12px;
    }
</style>
```

