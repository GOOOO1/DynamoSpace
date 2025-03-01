---
title: 表格
---


# 表格

表格组成与特点：行、列、单元格

单元格特点：同行等高、同列等宽

- **表格标签**：表格`<table></table>`；行`<tr></tr>`；单元格（列）`<td></td>`

  ```html
  <table>
      <tr>
          <td>第一行第一列</td>
          <td>第一行第二列</td>
      </tr>
      <tr>
          <td>第二行第一列</td>
          <td>第二行第二列</td>
      </tr>
  </table>
  <!--每一行的列数都应当相等-->
  ```

> 快速生成表格结构：table>tr*3>td{单元格}（生成四行三列的表格，数字根据自己需要的li数量修改）

- **表格属性**：

  - border：设置表格边框，`border="数字"`，数字代表边框线的像素
  - width：设置表格宽度
  - height：设置表格高度

  ```html
  <table border="1" width="300" height="150">
      <tr>
          <td>第一行第一列</td>
          <td>第一行第二列</td>
      </tr>
      <tr>
          <td>第二行第一列</td>
          <td>第二行第二列</td>
      </tr>
  </table>
  ```

- **合并单元格**

  初始单元格：

  ```html
  <table border="1" width="100" height="50">
      <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
      </tr>
      <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
      </tr>
  </table>
  ```

  - 水平合并`colspan`

    ```html
    <table border="1" width="100" height="50">
        <tr>
            <td colspan="3">123</td> <!--合并单元格123，如果不删除2和3将会在右边被顶出来，不规整-->
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    </table>
    ```

  - 垂直合并`rowspan`

    ```html
    <table border="1" width="100" height="50">
        <tr>
            <td>1</td>
            <td>2</td>
            <td rowspan="2">36</td> <!--合并单元格3和6-->
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
        </tr>
    </table>
    ```

  - 既有水平合并也有垂直合并

    ```html
    <table border="1" width="100" height="50">
        <tr>
            <td>1</td>
            <td colspan="2" rowspan="2">23<br/>56</td> <!--合并2 3 5 6-->
        </tr>
        <tr>
            <td>4</td>
        </tr>
    </table>
    ```

  > 水平合并保留左边的，垂直合并保留上面的，既水平又垂直保留左上的



