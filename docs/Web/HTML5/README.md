---
title: HTML5
---

# HTML5介绍

**（更详细的内容参考[https://developer.mozilla.org/zh-CN/docs/Web/HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)，此内容仅为一个简单的初学笔记）**

HTML5是用来描述网页的一种语言，被称为超文本标记语言。用HTML5编写的文件，后缀以`.html`结尾

HTML是一种标记语言，标记语言是一套标记标签。标签是由尖括号包围的关键字，例如：`<html>`

标签有两种表现形式：

- 双标签，如：`<html></html>`
- 单标签，如：`<img>`



## HTML5的DOCTYPE声明

DOCTYPE是document type（文档类型）的缩写。`<!DOCTYPE html>`是H5的声明，位于文档的最前面，处于标签之前。它是网页必备的组成成分，避免浏览器的怪异模式。

```html
<!DOCTYPE html>
```

![HTML5的DOCTYPE声明](/docs/.vuepress/public/img/HTML1.png)

>VSCode中的空html文件里，输入`!`后回车，可自动补全代码



## HTML5基本骨架

![HTML5基本骨架](/docs/.vuepress/public/img/HTML2.png)



### html标签

定义HTML文档，这个元素我们浏览器看到后就明白这个是HTML文档了，所以你的其他元素要包括在这里面，标签限定了文档的开始点和结束点。

```html
<!DOCTYPE html>
<html>
    
</html>
```



### head标签

head标签用于定义文档的头部。文档的头部描述了文档的各种属性和信息，包括文档的标题、在Web中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

```html
<!DOCTYPE html>
<html>
    <head>
        
    </head>
</html>
```



### body标签

body元素定义文档的主体。

body元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等）

它会直接在页面中显示出来，也就是用户可以直观看到的内容

```html
<!DOCTYPE html>
<html>
    <head>
        
    </head>
    <body>
        该部分会直接显示在浏览器中
    </body>
</html>
```



### title标签

可自定义文档的标题。

它显示在浏览器的标题栏或状态栏上。

`<title>`标签是`<head>`标签中唯一必须要求包含的东西，就是说写head一定要写title。

`<title>`的增加有利于SEO优化。

> SEO是搜索引擎优化的英文缩写。通过对网站内容调整，满足搜索引擎的排名需求

```html
<html>
    <head>
        <title>标题</title>
    </head>
    <body>
        该部分会直接显示在浏览器中
    </body>
</html>
```



### meta标签

meta标签是一个单标签，用来描述一个HTML网页文档的属性，关键词等，例如：`charset="utf-8"`，是说当前使用的是`UTF-8`编码格式，在开发中我们经常会看到`utf-8`，或是`gbk`，这些都是编码格式，通常使用`utf-8`。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <mate charset="utf-8">
        <title>标题</title>
    </head>
    <body>
        该部分会直接显示在浏览器中
    </body>
</html>
```





