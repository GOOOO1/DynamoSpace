---
title: CSS3新特性
---

# CSS3新特性



## 圆角

使用CSS3`border-radius`属性，可以给任何元素制作“圆角”

`border-radius`属性，可以使用以下规则：

1. 一个值：四个圆角值相同，100%时变为圆形
2. 两个值：第一个值为左上角和右下角，第二个值为左下角和右上角
3. 三个值：第一个值为左上角，第二个值为右上角和左下角，第三个值为右下角
4. 四个值：第一个为左上角，第二个为右上角，第三个为右下角，第四个为左下角

```html
<div class="box"></div>
```

```css
.box{
    border-radius: 20px;
    background-color: yellow;
    width: 100px;
    height: 100px;
}
```



## 阴影

`box-shadow`向框添加一个或多个阴影

```css
box-shadow: h-shadow v-shadow blur color;
```

| 值       | 描述                 |
| -------- | -------------------- |
| h-shadow | 必选，水平阴影的位置 |
| v-shadow | 必选，垂直阴影的位置 |
| blur     | 可选，模糊距离       |
| color    | 可选，阴影的颜色     |

![CSS8](/docs/.vuepress/public/img/CSS8.png)

```html
<div class="box"></div>
```

```css
.box{
    width: 200px;
    height: 200px;
    background-color: $8ac007;
    margin: 0 auto;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```



## 动画

动画是使元素从一种样式逐渐变化为另一种样式的效果

可以改变任意多的样式、任意多的次数

用百分比来规定变化发生的 时间，或用关键词“from”和“to”，等同于 0% 和 100%

0% 是动画的开始，100% 是动画的完成



- **@keyframes创建动画**

  ```css
  @keyframes name {
      form|0%{
          css样式
      }
      percent{
          css样式
      }
      to|100%{
          css样式
      }
  }
  ```

  - name：动画名称，开发人员自己命名
  - percent：百分比值，可以添加多个百分比值



- **animation执行动画**

  ```css
  animation: name duration timing-function delay iteration-count direction
  ```

  | 值                   | 描述                                                   |
  | -------------------- | ------------------------------------------------------ |
  | name                 | 动画名称                                               |
  | duration             | 动画持续时间                                           |
  | timing-function      | 动画效果的速率                                         |
  | delay                | 动画开始时间                                           |
  | iteration-count      | 动画循环的次数，infinite为无限次数的循环               |
  | direction            | 动画播放的方向                                         |
  | animation-play-state | 控制动画播放状态：runing代表播放，而paused代表停止播放 |

  - <u>timing-function值</u>

    1. ease：逐渐变慢（默认）
    2. linear：匀速
    3. ease-in：加速
    4. ease-out：减速
    5. ease-in-out：先加速后减速

  - <u>direction值</u>

    1. normal：表示向前播放（默认）
    2. alternate：动画播放在第偶数次向前播放，在第奇数次向反方向播放

    

例：

```html
<div class="animation"></div>
```

```css
.animation {
    width: 200px;
    height: 200px;
    margin: 40px auto;
    background-color: #2b92d4;
    border-radius: 30px;
    box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.1);
    animation: myani 5s linear 0s infinite;
}
.animation:hover { /*设置鼠标悬停效果，悬停则暂停*/
    animation-play-state: paused;
}
@keyframes myani {
    0% {
        width: 200px;
        opacity: 0.2; /*代表透明度*/
        backround-color: rgba(255, 255, 255, 0.1);
    }
    50% {
        width: 400px;
        opacity: 0.5;
        background-color: rgba(18, 190, 84, 0.76);
    }
    100% {
        width: 200px;
        opacity: 1;
        background-color: rgba(59, 255, 255, 1);
    }
}
```





