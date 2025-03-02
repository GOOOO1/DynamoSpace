---
title: 选择器
---


# 选择器

直接设置标签样式



## 全局选择器

可以与任何元素匹配，改变所有标签样式，优先级最低，一般做样式初始化

```css
*{
    margin: 0;
    padding: 0;
}
```



## 元素选择器

HTML文档中的元素，`p`、`b`、`div`、`a`、`img`、`body`等。

标签选择器，选择的是页面上所有这种类型的标签，所以经常描述同一标签的“共性”，无法描述某一个元素的“个性”。

```css
p {
    fort-size: 15px;
}
```

再例如，想让 “元素选择器” 中的 “元素” 两个字变为红色字体，那么可以用`<span>`标签，把 “元素” 这两个字围起来，然后给`<span>`标签加一个标签选择器。

```css
/*在.css文件中*/
span {
    color: red;
}
```

```html
<!--在.html文件中-->
<body>
    <p><span>元素</span>选择器</p>
</body>
```

> **温馨提示**：
>
> 所有的标签都可以是选择器。比如ul、li、label、dt、dl、input、div等
>
> 无论这个标签藏得多深，一定能够被选择上
>
> 选择上所有，而不是一个



## 类选择器

规定用圆点`.`来定义，针对你想要的所有标签使用

> **优点**：灵活

```css
/*在.css文件中*/
.onceclass {
    width: 800px;
}
```

```html
<!--在.html文件中-->
<body>
    <h2 class="onceclass">啊啊啊</h2>
</body>
```

> **class属性的特点**：
>
> 类选择器<u>可以被多个标签使用</u>
>
> 类名不能以数字开头，且只能以字母、-、数字来命名
>
> 同一标签可以使用多个类选择器，用空格隔开

```html
<h2 class="classone classtwo">啊啊啊</h2>  <!--正确-->

<h2 class="classone" class="classtwo">啊啊啊</h2>  <!--错误-->
```



## id选择器

针对某一个特定的标签来使用，**只能使用一次**，与类选择器不同。`css`中的`id选择器`以`#`来定义

```css
/*在.css中*/
#mytitle {
    border: 3px dashed green;
}
```

```html
<!--在.html中-->
<h2 id="mytitle">啊啊啊</h2>
<h2 id="mytitle">你好</h2>  <!--不能再用-->
```

> **注意**：
>
> id是唯一的
>
> id不能以数字开头



## 合并选择器

语法：`选择器1,选择器2,...{}`

作用：为多种标签提取共同的样式，减少重复代码

```css
/*在.css中*/
.text,.title {
    font-size: 30px;
    color: red;
}
h2,h3 {
    font-size: 50px;
    color: green;
}
```

```html
<!--在.html中-->
<p class="text">我是文本</p>
<h1 class="title">我是标题</h1>
<h2>哈哈哈哈哈</h2>
<h3>嘻嘻嘻嘻嘻</h3>
```



## 选择器优先级

CSS中，权重用数字衡量

元素选择器权重：1

类选择器权重：10

id选择器权重：100

[内联样式](https://manman-dynamo.space/Web/CSS/import.html#内联样式（行内样式）)权重：1000

**优先级从高到低：内联样式>id选择器>类选择器>元素选择器**



