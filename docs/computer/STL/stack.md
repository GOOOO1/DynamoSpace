---
title: 栈stack
---

# 栈stack

`#include<stack>`

通过二次封装双端队列（depue）容器，实现先进后出的栈数据结构。



## 1. 常用方法

| 作用               | 用法              | 实例                 |
| :----------------- | :---------------- | :------------------- |
| 构造               | `stack<类型> stk` | `stack<int> stk;`    |
| 进栈               | `.push(元素)`     | `stk.push(1);`       |
| 出栈               | `.pop()`          | `stk.pop();`         |
| 取栈顶             | `.top()`          | `int a = stk.top();` |
| 查看大小/清空/判空 | 与vector相同      | 略                   |



## 2. 适用情形

如果不卡常的话，就直接用它而不需要手写栈了。

另外，vector也可以当栈用，vector的`.back()`取尾部元素，就相当于取栈顶，`.push_back()`相当于进栈，`.pop_back()`相当于出栈，但栈占的空间相对于较小，竞赛有时会卡内存



## 3. 注意事项

不可以访问内部元素！**下面都是错误用法**：

```cpp
for(int i = 0; i < stk.size(); i++)
    cout << stk[i];
for(auto ele : stk)
    cout << ele;
```



