---
title: CSS盒子模型
---


# CSS盒子模型

所有HTML元素可以看作盒子，在CSS中，“box model” 这一术语是用来设计和布局时使用的

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：

外边距（margin），边框（border）、内边距（padding）、实际内容（content）

![盒子模型](/img/CSS2.png)

- **margin**：清除边框外的区域，外边距是透明的。可分为margin-left、margin-right、margin-top、margin-bottom

  ```css
  标签名{
      margin: 50px; /*上下左右都扩大50px*/
      margin: 20px 50px;  /*上下扩大20px,左右扩大50px*/
      margin-left: 10px;  /*左扩大10px*/
      margin-right: 10px;  /*右扩大10px*/
      margin-top: 10px;  /*上扩大10px*/
      margin-bottom: 10px;  /*下扩大10px*/
  }
  ```

- **border**：围绕在内边距和内容外的边框，类似表格的边框，可设置宽度、样式、颜色

  ```css
  标签名{
      border: 5px solid yelllow;
  }
  ```

- **padding**：清除内容周围的区域，看上去围绕内容向外扩展区域。可分为padding-left、padding-right、padding-top、padding-bottom

  ```css
  标签名{
      padding: 50px; /*上下左右都扩大50px*/
      padding: 20px 50px;  /*上下扩大20px,左右扩大50px*/
      padding-left: 10px;  /*左扩大10px*/
      padding-right: 10px;  /*右扩大10px*/
      padding-top: 10px;  /*上扩大10px*/
      padding-bottom: 10px;  /*下扩大10px*/
  }
  ```

- **content**：盒子的内容，显示文本和图像



如果把盒子模型看作是一个生活中的快递，那么内容部分等同于你买的实物，内边距等同于快递盒子中的泡沫，边框等同于快递盒子，外边距等同于两个快递盒子之间的距离。

例：

```css
div{
    width: 100px;
    height: 100px;  /*设置初始宽高，默认宽度为网页宽度，方便效果展示*/
    margin: 30px;
    border: 5px solid yellow;
    padding: 50px;
    background: green; /*设置背景颜色以便更清晰地看见效果，可复制此段代码进行演示*/
}
```

```html
<div>
    盒子内容，文本或图片
</div>
```

效果图：

![示例效果图](/img/CSS3.png)



