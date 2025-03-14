---
title: 弹性盒子模型
---


# 弹性盒子模型

弹性盒子是CSS3的一种新的布局模式

CSS3弹性盒是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间

前面的盒子模型是针对一个块元素来说；这个是一个盒子里可以放很多个块，并设置每个块的样式以及整体的摆放样式



## CSS3弹性盒内容

弹性盒子由弹性容器（Flex container）和弹性子元素（Flex item）组成

弹性容器通过设置`display`属性的值为`flax`将其定义为弹性容器

弹性容器内包含了一个或多个弹性子元素

> **提示**：
>
> 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局

```html
<style>
    .flex-container {
        display: flex;
        width: 400px;
        height: 250px;
        background-color: lightgray;
    }
    .flex-item {
        background-color: cornflowerblue;
        width: 100px;
        height: 100px;
        margin: 10px;
    }
</style>

<div class="flex-container">
    <div class="flex-item">flex item 1</div>
    <div class="flex-item">flex item 2</div>
    <div class="flex-item">flex item 3</div>
</div>
```

> **提示**：
>
> 默认弹性盒子模型里内容横向摆放



## 父元素上的属性



- **display属性**

  `display:flex`：开启弹性盒

  `display:flex`：属性设置后子元素<u>默认水平排列</u>

  ```css
  <style>
      .flex-container {
          display: flex;
          width: 400px;
          height: 250px;
          background-color: lightgray;
          display: flex;
      }
  </style>
  ```

  

- **flex-direction属性**

  指定了弹性子元素在父容器中的位置

  ```css
  flex-direction: row | row-reverse | column | column-reverse
  ```

  - row：横向从左到右排列（左对齐），默认的排列方式
  - row-reverse：反转横向排列（右对齐），从后往前排，原本第一项在最后一个
  - column：纵向排列
  - column-reverse：反转纵向排列，从后往前排，原本最后一项排在最上面

   

- **justify-content属性**：

  内容对齐属性，应用在弹性容器上，而不是弹性子元素，把弹性项沿着弹性容器的主轴线（横轴）对齐

  ```css
  justify-content: flex-start | flex-end | center
  ```

  - flex-start：弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放
  - flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放
  - center：弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）

   

- **align-items属性**：

  设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式

  ```css
  align-content: flex-start | flex-end | center
  ```

  - flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界
  - flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界
  - center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度



## 子元素上的属性



- **flex / flex-grow**

  根据弹性盒子元素所设置的扩展因子作为比率来<u>分配剩余空间</u>

  默认为0，即如果存在剩余空间，也不放大

  如果只有一个子元素设置，那么按扩展因子转化百分比对其分配剩余空间。0.1即10%，1即100%，超出按100%

  ```html
  <style>
      .flex-container {
          display: flex;
          width: 500px;
          height: 500px;
          background-color: lightgray;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }
      .flex-item1 {
          background-color: cornflowerblue;
          width: 100px;
          height: 100px;
          flex-grow: 1;  <!--这个优先级高于前面的宽高设置-->
      }
      .flex-item2 {
          background-color: red;
          width: 100px;
          height: 100px;
          flex: 2;
      }
      .flex-item3 {
          background-color: green;
          width: 100px;
          height: 100px;
          flex: 1;
      }
  </style>
  
  <div class="flex-container">
      <div class="flex-item1">flex item 1</div>
      <div class="flex-item2">flex item 2</div>
      <div class="flex-item3">flex item 3</div>
  </div>
  ```



