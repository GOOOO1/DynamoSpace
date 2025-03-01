---
title: HTML5新增标签
---



# HTML5新增标签

`HTML5`是`HTML`最新的修订版本，2014年10月由万维网联盟`(W3C)`完成标准制定。

在`HTML5`出现之前，一般采用`div+css`布局页面。但是这样的布局不仅使我们的文档结构不够清晰，而且不利于搜索引擎爬虫对我们页面的爬取。为了解决上述缺点，`HTML5`新增了很多新的语义化标签。



- **`div`容器元素**，也是页面中见到的最多的元素

  虽然现在有了新标签，但是仍然有很多网站是用该方法布局，是因为新标签仅支持在新浏览器上正确访问，对于旧浏览器（如IE浏览器）可能不能正确渲染，所以为了保证用户在所有浏览器都能成功访问而继续沿用。

  <u>div实现</u>：

  ![QQ20250301-223508](/docs/.vuepress/public/img/HTML4.png)

  ```html
  <!DOCTYPE html>
  <html>
      <head>
      </head>
      <body>
          <div id="header"></div>
          <div id="nav"></div>
          <div id="article">
              <div id="section"></div>
          </div>
          <div id="silder"></div>
          <div id="footer"></div>
      </body>
  </html>
  ```

- **H5新标签**，有利于SEO和开发

  因为`div`属性里的`id`是由开发者自定义的，现在统一规定了就使得每部分是什么更加清晰明了。

  <u>H5新标签实现</u>：

  ![QQ20250301-223954](/docs/.vuepress/public/img/HTML5.png)

  ```html
  <!DOCTYPE html>
  <html>
      <head>
      </head>
      <body>
          <header></header>
          <nav></nav>
          <article>
              <section></section>
          </article>
          <aside></aside>
          <footer></footer>
      </body>
  </html>
  ```

  

  

