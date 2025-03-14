---
title: 属性
---



# 属性



## 字体属性

CSS字体属性定义字体颜色、大小、粗细、样式

- **color**

  规定文本颜色

  ```css
  div{ color: red; }
  div{ color: #ff0000; }
  div{ color: rgb(255,0,0); }
  div{ color: rgba(255,0,0,0.5); }
  ```

- **font-size**

  设置字体大小

  能否管理文字的大小，在网页设计中是非常重要的。但是，不要通过调整字体大小使段落看上去像标题，或着使标题看上去像段落。

  ```css
  h1{ font-size: 40px; }
  p{ font-size: 20px; }
  ```

- **font-weight**

  设置文本粗细

  | 值      | 描述                                   |
  | ------- | -------------------------------------- |
  | bold    | 粗体                                   |
  | bolder  | 更粗                                   |
  | lighter | 细体                                   |
  | 100~900 | 定义由细到粗，400等同默认，700等同bold |

  ```css
  h1{ font-weight: normal; } /*默认*/
  div{ font-weight: bold; }
  ```

- **font-style**

  指定文本的字体样式

  | 值     | 样式 |
  | ------ | ---- |
  | normal | 默认 |
  | italic | 斜体 |

- **font-family**

  指定元素字体

  > 注意：
  >
  > 每个值用逗号分开
  >
  > 如果字体名称包含空格，它必须加上引号

  ```css
  font-family:"Microsoft YaHei","Simsun","SimHei";
  p{ font-family:"Microsoft YaHei"; }
  ```


## 背景属性

CSS的背景属性主要有以下几个

| 属性                | 描述                 |
| ------------------- | -------------------- |
| background-color    | 设置背景颜色         |
| background-image    | 设置背景图片         |
| background-repeat   | 设置背景图片如何填充 |
| background-size     | 设置背景属性大小     |
| background-position | 设置背景图片显示位置 |



- **background-color**

  设置背景颜色

  ```css
  /*在.css中*/
  .box{
      width: 300px;
      height: 300px;
      background-color: #ffff00;
  }
  ```

  ```html
  <!--在.html中-->
  <div class="box"></div>
  ```

- **background-image**

  设置元素背景图像

  元素的背景是元素的总大小，包括填充和边界（不包括外边距）。默认情况下background-image属性放置在元素的左上角，如果图像不够大的话，会在水平和垂直方向平铺图像；如果图像大小超过元素大小，从图像的左上角显示元素大小的那部分。

  ```css
  /*在.css中*/
  .box{
      width: 600px;
      height: 500px;
      background-image: url("图片地址");
  }
  ```

  ```html
  <!--在.html中-->
  <div class="box"></div>
  ```

- **background-repeat**

  该属性设置如何平铺（重复 / 复制）背景图片

  | 值        | 说明                             |
  | --------- | -------------------------------- |
  | repeat    | 默认值，水平方向、垂直方向都平铺 |
  | repeat-x  | 只向水平方向平铺                 |
  | repeat-y  | 只向垂直方向平铺                 |
  | no-repeat | 不平铺                           |

  ```css
  /*在.css中*/
  .box{
      width: 600px;
      height: 500px;
      background-image: url("图片地址");
      backgorund-repeat: no-repeat;
  }
  ```

- **background-size**

  该属性设置背景图像大小

  | 值         | 说明                                                         |
  | ---------- | ------------------------------------------------------------ |
  | length     | 设置背景图片的宽度和高度，第一个值宽度，第二个值高度；如果只设置一个，第二个auto |
  | percentage | 计算相对位置区域的百分比，第一个值宽度，第二个值高度；如果只设置一个，第二个auto |
  | cover      | 保持图片纵横比，并将图片缩放成完全覆盖背景区域的最小大小     |
  | contain    | 保持图片纵横比，并将图片缩放成适合背景定位区域的最大大小     |

  ```css
  /*在.css中*/
  .box{
      width: 600px;
      height: 500px;
      background-image: url("图片地址");
      backgorund-repeat: no-repeat;
      background-size: 100% 100%;
  }
  ```

- **background-position**

  该属性设置背景图像显示的起始位置，其默认值是：0% 0%

  | 值            | 说明                                                         |
  | ------------- | ------------------------------------------------------------ |
  | left top      | 左 上                                                        |
  | left center   | 左 中                                                        |
  | left bottom   | 左 下                                                        |
  | right top     | 右 上                                                        |
  | right center  | 右 中                                                        |
  | right bottom  | 右 下                                                        |
  | center top    | 中 上                                                        |
  | center center | 中 中                                                        |
  | center bottom | 中 下                                                        |
  | x% y%         | 第一个值是水平位置，第二个值是垂直位置，左上角是0% 0%，右下角是100% 100%。如果只指定了一个值，另一个默认是50%。都没指定，默认是0% 0% |
  | xpos ypos     | 和上面类似，不过单位是像素                                   |

  ```css
  /*在.css中*/
  .box{
      width: 600px;
      height: 500px;
      background-image: url("图片地址");
      backgorund-repeat: no-repeat;
      background-position: center center;
  }
  ```

  

## [文本](https://manman-dynamo.space/Web/HTML5/P-T-W-HL.html#文本)属性

- **text-align**

  指定元素文本的对其方式（在页面中显示的位置，左、中、右）

  | 值     | 说明                 |
  | ------ | -------------------- |
  | left   | 文本居中排列，默认值 |
  | right  | 把文本排列到右边     |
  | center | 把文本排列到左边     |

  ```css
  h1{ text-align: left }
  ```

- **text-decoration**

  规定添加到文本的修饰，下划线、上划线、删除线等

  | 值           | 说明   |
  | ------------ | ------ |
  | underline    | 下划线 |
  | overline     | 上划线 |
  | line-through | 删除线 |

  ```css
  h1{ text-decoration: overline }
  ```

- **text-transform**

  控制文本大小写

  | 值         | 说明               |
  | ---------- | ------------------ |
  | captialize | 每个单词首字母大写 |
  | uppercase  | 全部字母大写       |
  | lowercase  | 全部字母小写       |

  ```css
  p{ text-transform: captialize; }
  ```

- **text-indent**

  规定文本块中首行文本的缩进量

  ```css
  p{ text-indent: 50px; }
  ```

  > 负值是允许的。如果值是负数，将第一行左缩进



## [表格](https://manman-dynamo.space/Web/HTML5/table.html)属性

- **表格边框**

  指定CSS表格边框，使用`border`属性

  ```css
  table,td{
      border: 2px solid black;
  }
  /*table设置外边框，td设置内边框
    border第一个值为边框宽度，第二个值设置边框样式（实线、虚线...），第三个值设置边框颜色*/
  ```

- **折叠边框**

  `border-collapse`属性设置表格边框是否被折叠成一个单一的边框或隔开

  不设置时，默认是双线

  ```css
  table{ border-collapse: collapse; } /*折叠成单一边框*/
  ```

- **表格宽度和高度**

  `width`和`height`属性定义单元格的宽度和高度

  ```css
  table{ width: 100%; }
  td{ height: 50px; }
  ```

- **表格文字对齐**

  表格中的文本对齐和垂直对齐属性

  `text-align`属性设置<u>水平对齐方式</u>：左（left）、右（right）、中心（center）

  ```css
  td{ text-align: right; }
  ```

  `vertical-align`属性设置<u>垂直对齐方式</u>：上（top）、下（bottom）、中间（center）

  ```css
  td{ vertical-align: bottom; }
  ```

- **表格填充**

  如果在表的内容中控制空格之间的边框，使单元格文本与边框上下左右有些空隙，应使用`td`和`th`元素的填充属性`padding`

  ```css
  td{ padding: 15px; }
  ```

- **表格颜色**

  表格边框的颜色在上面 表格边框 中有说明，下面说明`td`元素的背景和文本颜色

  ```css
  td{ background-color: green; color: white; }
  ```

  



