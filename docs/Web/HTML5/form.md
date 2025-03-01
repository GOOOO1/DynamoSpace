---
title: form表单
---


# form表单

表单在Web网页中用来*给用户填写信息*，从而能采集用户信息，*使网页具有交互功能*。

所有用户输入内容的地方都用表单来写，如登录注册、搜索框

<u>表单是由容器和控件组成的</u>，一个表单一般应该包含用户填写信息的输入框、提交按钮等，这些输入框、按钮叫做<u>控件</u>，表单就是<u>容器</u>，它能够容纳各种各样的控件。

```html
<form action="url" method="get/post" name="myform">
    
</form>
```

- **属性说明**

  - action：服务器地址
  - name：表单名称
  - method是提交到服务器的方式，method中Get和Post的区别：
    1. 数据提交方式，get提交的数据url可以看到，post看不到
    2. get一般用于提交少量数据，post用来提交大量数据

- **表单元素**

  一个完整的表单包含三个基本组成部分：表单标签、表单域、表单按钮

  例：

  ```html
  <form>
      <input type="text"> <!--该input项为表单域-->
      <input type="submit"> <!--或者：<button>按钮</button>  -->
  </form>
  ```

  - **文本框**

    文本域通过`<input type="text">`标签来设定，当用户要在表单中输入字母、数字等内容时，就会用到文本域

    ```html
    <form>
        First name: <input type="text" name="firstname"> <!--First name: 在页面中显示在输入框前-->
        <br>
        Last name: <input type="text" name="lastname">
    </form>
    ```

  - **密码框**

    密码字段通过标签`<input type="password">`来定义

    ```html
    <form>
        Password: <input type="password" name="pwd">
    </form>
    ```

    > 密码字段字符不会明文显示，而是以星号或圆点代替

  - **提交按钮**

    当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接受到的输入数据进行相关的处理

    ```html
    <form name="input" action="url" mathod="get">
        Username: <input type="text" name="user">
        <input type="submit" value="Submit"> <!--value里的内容将会在按钮上显示-->
    </form>
    ```

  <center><b>PS：不止上面三种</b></center>



