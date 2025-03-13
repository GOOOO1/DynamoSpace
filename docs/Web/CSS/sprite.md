---
title: 雪碧图
---



# 雪碧图

CSS Sprite也叫CSS精灵图、CSS雪碧图，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零件星图都包含到一张大图中去，需要大图中的哪一部分时，就设置位置加载哪个部分

例（一张大图）：

![CSS9](/docs/.vuepress/public/img/CSS9.png)

**优点**：

1. 减少图片的字节
2. 减少网页的http请求，，从而大大的提高页面性能



**原理**：

- 通过background-image引入背景图片
- 通过background-position把背景图片移动到自己需要显示的位置进行显示

例：

```html
<span class="icon1"></span>
<span class="icon2"></span>
```

```css
.icon1 {
    display: block; /*表示显示*/
    background-image: url(1.png);
    background-position: -20px 0;/*第一个数横向移动，负数向左移；第二个数纵向移动，负数向上移*/
    width: 45px; /*显示的宽与高*/
    height: 70px;
}
.icon2 {
    display: block;
    background-image: url(1.png);
    background-position: -93px -84px;
    width: 45px;
    height: 70px;
}
```







