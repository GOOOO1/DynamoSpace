---
title: 向量vector
---

# 向量vector

`#include <vector>`

连续的顺序的储存结构(和数组一样的类别)，但是有<u>长度可变</u>的特性。



## 1. 常用方法

### 构造

`vector<类型>arr(长度，[初值])`

时间复杂度:$O(n)$

常用的一维和二维数组构造示例，高维也是一样的(就是会有点长)

```cpp
vector<int> arr; // 构造int数组
vector<int> arr(100); // 构造初始长100的int数组
vector<int> arr(100, 1);// 构造初始长100的int数组，初值为1
vector<vector<int>> mat(100，vector<int>()); //构造初始100行，不指定列数的二维数组
vector<vector<int>>mat(100，vector<int>(666，-1)) // 构造初始100行，初始666列的二维数组，初值为-1
```

构造二维数组的奇葩写法，千万别用:

```cpp
vector<int> arr[100]; //正确，构造初始100行，不指定列数的二维数组，可用于链式前向星存图
vector<int> arr[100](100，1);// 语法错误!
vector<int> arr(100，1)[100];// 语法错误!
vector<int>arr[100]{{100，1}，这里省略98个 ,{100，1}}; // 正确但奇葩，使用列表初始化
```

### 尾接 & 尾删

- `.push_back(元素)`:在vector 尾接一个元素，数组长度+1

- `.pop_back()`:删除 vector 尾部的一个元素，数组长度 -1

时间复杂度:均摊$O(1)$

```cpp
//init:arr = []
arr.push_back(1);
//after:arr =[1]
arr.push_back(2):
//after:arr =[1，2]
arr.pop_back();
// after:arr=[1]
arr.pop_back();
//after:arr=[]
```

### 中括号运算符

和一般数组一样的作用，访问下标
时间复杂度:$O(1)$

### 获取长度

`.size()`
获取当前 vector 的长度
时间复杂度:$O(1)$

### 清空

`.clear()`

将vector内的元素全部清空，长度变为0

时间复杂度：$O(1)$

### 判空

`.empty()`

若为空，返回1；否则，返回0

时间复杂度：$O(1)$

### 改变长度

`.resize(新长度, [默认值])`

修改vector的长度

- 如果是缩短，则删除多余元素
- 如果是扩大，且指定了默认值，则新元素均为默认值（**旧元素不变**）

时间复杂度：$O(1)$



## 2. 适用情形

一般情况 `vector` 可以替换掉普通数组，除非该题卡常（卡时间复杂度前面的常数，比如$O(3n^2)$卡3）。

有些情况普通数组没法解决：$n * m$ 的矩阵，$1 ≤ n,m ≤ 10^6$ 且$n*m ≤ 10^6$

- 如果用普通数组` int mat[1000010][1000010]`，浪费内存，会导致 MLE。
- 如果使用 `vector<vector<int>>mat(n + 10, vector<int>(m + 10))`，完美解决该问题。

另外，`vector` 的数据储*存在堆空间*中，不会爆栈



## 3. 注意事项

### 提前指定长度

如果长度已经确定，那么应该直接在构造函数指定长度，而不是一个一个`.push_back()`，因为`vector`额外内存耗尽后的重分配是有时间开销的，直接指定长度就不会出现重分配了。

```cpp
// 优化前：522ms
vector<int> a;
for(int i = 0; i < 1e8; i++)
    a.push_back(i);
//优化后：259ms
vector<int> a(1e8);
for(int i = 0; i < a.size(); i++)
    a[i] = i;
```

### 当心size_t溢出

`vector`获取长度的方法`.size()`返回类型为`size_t`，通常OJ平台使用的是32位编译器（有些平台例如cf可选64位），那么该类型范围为$[0,2^{32})$

```cpp
vector<int> a(65536);
long long a = a.size() * a.size(); //直接溢出变为0了
```



