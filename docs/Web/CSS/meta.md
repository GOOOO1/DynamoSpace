---
title: 媒体查询
---


# 媒体查询

媒体查询能使页面在不同终端设备下达到不同效果

媒体查询会根据设备的大小自动识别加载不同的样式



- **设置meta标签**

  使用设备的宽度作为视图宽度并禁止初始的缩放，使得初始时页面内容就为设置的比例，不因设备而自动缩放。在`<head>`标签里加入这个`meta`标签

  ```css
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  ```

  - `width=device-width`：宽度等于当前设备宽度
  - `initial-scale`：初始的缩放比例（默认值为1.0）
  - `maximum-scale`：允许用户缩放到的最大比例（默认值为1.0）
  - `user-scalable`：用户是否可以手动缩放（默认值为no）

  

- **媒体查询语法**

  ```css
  @media screen and (max-width: 768px) {
      /*设备小于768px加载样式，手机*/
      body{
          background-color: red;
      }
  }
  @media screen and (max-width: 992px) and (min-width: 768px) {
      /*设备小于992px、大于768px的加载样式，平板*/
      body{
          background-color: pink;
      }
  }
  @media screen and (min-width: 992px) {
      /*设备大于992px的加载样式，电脑*/
      body{
          background-color: green;
      }
  }
  ```

  



