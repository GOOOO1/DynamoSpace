---
title: 队列queue
---


# 队列queue

`#include <queue>`

通过二次封装双端队列（depue）容器，实现先进先出的队列数据结构。



## 1. 常用方法

| 作用               | 用法              | 示例              |
| ------------------ | ----------------- | ----------------- |
| 构造               | `queue<类型> que` | `queue<int> que;` |
| 进队               | `.push(元素)`     | `que.push(1);`    |
| 出队               | `.pop()`          | `que.pop();`      |
| 取队首             | `.front()`        | `que.front();`    |
| 取队尾             | `.back()`         | `que.back();`     |
| 查看大小/清空/判空 | 与vector一样      | 略                |



## 2. 使用情形

如果不卡常的话，就直接用它而不需要手写队列了。



## 3. 注意事项

不可以访问内部元素！**下面都是错误用法**：

```cpp
for(int i = 0; i < que.size(); i++)
    cout << que[i];
for(auto ele : que)
    cout << ele;
```

