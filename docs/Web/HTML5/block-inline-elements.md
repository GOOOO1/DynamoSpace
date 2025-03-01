---
title: 块元素与行内元素（内联元素）
---



# 块元素与行内元素（内联元素）

HTML5出现之前，经常把元素按照块级元素和内联元素来区分。在HTML5中，元素不再按照这种方式来区分，而是按照内容模型来区分，分为元数据型（metadata content）、区块型（sectioning content）、标题型（heading content）、文档流型（flow content）、语句型（phrasing content）、内嵌型（embedded content）、交互型（interactive content）。元素不属于任何一个类别，被称为穿透的，元素可能属于不止一个类别，称为混合的。

![HTML5元素区分方式](/docs/.vuepress/public/img/HTML3.png)

**HTML5中此内容详细参考地址：https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/content_categories**

虽然到了HTML5的版本，元素分类更细致了，但是对于初学者并不友好，所以以下是按照块元素和内联元素做的区分。

- **内联元素和块级元素的区别**

  |                     块级元素                      |                      内联元素                       |
  | :-----------------------------------------------: | :-------------------------------------------------: |
  |   会在页面中<u>独占一行</u>（自上向下垂直排列）   |         不会在页面中独占一行，只占自身大小          |
  |         <u>可以设置width、height</u>属性          |                设置width、height无效                |
  | 一般块级元素<u>可以包含</u>行内元素和其他块级元素 | 一般内联元素可以包含内联元素，<u>不包含块</u>级元素 |

- **常见块级元素**：

  `div`、`form`、`h1~h6`、`hr`、`p`、`table`、`ul`等

- **常见内联元素**：

  `a`、`b`、`em`、`i`、`span`、`strong`等

- **行内块级元素（特点：不换行、能够识别宽高）**

  `button`、`img`、`input`等





