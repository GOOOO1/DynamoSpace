---
title: 定位
---



# 定位

`position`属性指定了元素的定位类型

| 值       | 描述     |
| -------- | -------- |
| telative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |

其中，绝对定位和固定定位会脱离文档流，可以产生多层覆盖

设置定位后，可以使用四个方向值进行调整位置：`left、top、right、bottom`


## 相对定位

```html
<div class="box"></div>
```

```css
.box{
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;
    left: 100px;   /*设置距离网页最左边100px*/
}
```



## 绝对定位

```html
<div class="box1"></div>
<div class="box2"></div>
```

```css
.box1 {
    width: 200px;
    height: 200px;
    background-color: red;
    position: absolute;  /*会出现在下面的box2上面，产生压盖。但如果是relative就不会，而是会按顺序上下摆放*/
    left: 50px;
}
.box2 {
    width: 300px;
    height: 300px;
    background-color: green;
}
```



## 固定定位

在页面的某个位置显示，且固定，不随鼠标上下滚动页面而移动

```html
<div class="box"></div>
```

```css
.box {
    width: 200px;
    height: 200px;
    background-color: yellow;
    position: fixed;
    right: 100px;
    bottom: 100px;
}
```



> **提示**
>
> 设置定位之后，相对定位和绝对定位是相对于具有定位的父级元素进行位置调整，如果父级元素不存在定位，则继续向上逐级寻找，直到顶层文档

例（常用）：

```html
<div class="container">       <!--父级元素-->
    <div class="box"></div>   <!--子级元素-->
</div>
```

```css
.container{
    width: 200px;
    height: 200px;
    background-color: yellow;
    position: relative;
    /*若有定位，则当margin-left改变时，box也随着移动；若没有，则box相对于上面有定位的改变位置或者以整个网页为基础*/
    margin-left: 100px;
}
.box{
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: absolute;
    left: 50px;
    top: 50px;
}
```



## z-index

设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面

```html
<div class="box1"></div>
<div class="box2"></div>
```

```css
.box1 {
    width: 200px;
    height: 200px;
    background-color: red;
    position: absolute;
    left: 100px;
    z-index: 5; /*比box2的大，压盖在box2上面*/
}
.box2 {
    width: 200px;
    height: 200px;
    background-color: green;
    position: absolute;
    z-index: 3;
}
```





