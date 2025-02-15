---
title: 字符串string
---


# 字符串string

`#include <string>`

顾名思义，就是存储字符串的



## 1. 常用方法

### 构造

构造函数：`string(长度, 初值)`

```cpp
string s1;           //构造空字符串
string s2 = "abc";   //构造字符串，并赋值abc
string s3(10, '6');  //构造字符串，通过构造函数构造为6666666666
```

### 输入输出

C++

```cpp
string s;
cin >> s;
cout << s;
```

C

```cpp
string s;
char buf[100];
scanf("%s", &buf);
s = buf;
printf("%s", s.c_str());
```

### 其他

| 作用                   | 用法                          | 示例                            |
| ---------------------- | ----------------------------- | ------------------------------- |
| 修改、查询指定下标字符 | `[]`                          | `s[1] = 'a';`                   |
| 是否相同               | `==`                          | `if(s1 == s2) ...`              |
| 字符串连接             | `+`                           | `string s = s1 + s2;`           |
| 尾接字符串             | `+=`                          | `s += "awa";`                   |
| 取子串                 | `.substr(起始下标, 子串长度)` | `string sub = s.substr(2, 10);` |
| 查找子串               | `.find(待查串)`               | `s.find("abc");`                |
| 转换为整型             | `stoi()`                      | `int x = stoi(s);`              |
| 转换为长整型           | `stoli()`                     | `long int x = stoli(s);`       |
| 转换为double           | `stod()`                      | `double x = stoll(s);`          |
| …                      | …                             | …                               |
| 将其他类型转换为字符串 | `to_string()`                 | `string s = to_string(x);`      |

> ps：取子串时不写子串长度则默认到串尾；`.find()`若找到了，则返回待查串中第一个字符的下标，若不存在则返回`string::npos`，`string::npos`是一个数；一系列类型转换函数需要加头文件`#include <sto>`



## 2. 适用情形

非常好用！



## 3. 注意事项

### 尾接字符串一定要用`+=`

`string` 的 `+= `运算符，将会在原字符串原地尾接字符串。而 + 了再 = 赋值，会先生成一个临时变量，再复制给 string.
通常字符串长度可以很长，如果使用 + 字符串很容易就 TLE 了。

```cpp
//优化前：15139ms
string s;
for(int i = 0; i < 5e5; i++)
    s = s + "a";

//优化后：< 1ms（计时器不显示）
string s;
for(int i = 0; i < 5e5; i++)
    s += "a";
```

### `.substr()`方法的奇葩参数

一定要注意，C++ string的取子串的第一个参数是子串起点下标，第二个参数是子串长度。

第二个参数不是子串终点！不是子串终点！要与java 等其他语言区分开来。

### `.find()`方法的复杂度

该方法实现为暴力实现，时间复杂度为$O(n^2)$

<u>不要幻想STL内置了个$O(n)$的 KMP算法</u>





