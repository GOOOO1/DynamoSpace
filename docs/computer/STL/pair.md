---
title: 二元组pair
---

# 二元组pair

`#include <utility>`

顾名思义，是存储二元组的



## 1. 常用方法

### 构造

`pair<第一个值类型, 第二个值类型> pr`

```cpp
pair<int, int> p1;
pair<char, int> p2;
...
//三元组，套娃
pair<pair<int, int>, int> p3;
```

### 赋值

老式

```cpp
pair<int, char> pr = make_pair(1, 'a');
```

C++ 11

```cpp
pair<int, char> pr = {1, 'a'};
```

### 取值

直接取值

- 取第一个值：`.first`
- 取第二个值：`.second`

```cpp
pair<int, char> pr = {1, 'a'};
int a = pr.first;
char c = pr.second;
```

结构化绑定C++ 17

```cpp
pair<int, char> pr = {1, 'a'};
auto &[a, b] = pr;
```

### 判同

直接用`==`运算符



## 2. 适用场景

所有需要使用二元组的场景均可使用，效率和自己定义结构体差不多。

```cpp
struct p
{
    int a;
    int b;
};

pair<int, int> pr;
```





## 3. 注意事项

无





