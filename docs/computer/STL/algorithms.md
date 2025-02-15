---
title: 常用算法
---


# 常用算法



## 内容总览

打钩的是讲到的，其他的是算法竞赛中建议学习的，不在下面列出的在比赛中基本用不到。

(很多函数的功能很简单，自己都能快速写出来，但是使用函数可以让代码可读性变得更高，这在比赛中是至关紧要的)

- 算法库 Algorithm
  - [ ] `count()`
  - [ ] `find()`
  - [ ] `fill()`
  - [x] `swap()`
  - [x] `reverse()`
  - [ ] `shuffle()` C++ 11
  - [x] `unique()`
  - [x] `sort()`
  - [x] `lower_bound()` / `upper_bound()`
  - [x] `max()` / `min()`
  - [ ] `max_element()` / `min_element()`
  - [ ] `prev_permutation()` / `next_permutation()`
- 数学函数 cmath
  - [x] `abs()`
  - [x] `exp()`
  - [x] `log()` / `log10()` / `log2()`
  - [x] `pow()`
  - [x] `sort()`
  - [ ] `sin()` / `cos()` / `tan()`
  - [ ] `asin()` / `acos()` / `atan()`
  - [ ] `sinh()` / `cosh()` / `tanh()`
  - [ ] `asinh()` / `acosh()` / `atanh()` C++ 11
  - [x] `ceil()` / `floor()`
  - [x] `round()` C++ 11 (四舍五入)
- 数值算法 numeric
  - [ ] `iota()` C++
  - [ ] `accumulate()`
  - [x] `gcd()` C++17
  - [x] `lcm()` C++17
- 伪随机数生成 random
  - [ ] `mt19937`
  - [ ] `random_device()`





## swap()

**交换**两个变量的值

**用法示例**：

```cpp
template<class T>
void swap(T& a, T& b);
```

```cpp
int a = 0, int b = 1;
swap(a, b);
// now a = 1, b = 0

int arr[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
swap(arr[4], arr[6]);
// now arr = {0, 1, 2, 3, 6, 5, 4, 7, 8, 9}
```

**注意事项**

这个swap参数是引用的，不需要像C语言一样取地址。



## sort()

使用快速排序给一个可迭代对象**排序**

**用法示例**

```cpp
template<class Randomit, class Compare>
void sort(Randomit first, Randomit last, Compare comp);
```

默认排序从小到大

```cpp
vector<int> arr{1, 9, 1, 9, 8, 1, 0};
sort(arr.begin(), arr.end());
// arr = [0, 1, 1, 1, 8, 9, 9]
```

如果要从大到小，则需要传比较器进去

```cpp
vector<int> arr{1, 9, 1, 9, 8, 1, 0};
sort(arr.begin(), arr.end(), greater<int>());
// arr = [9, 9, 8, 1, 1, 1, 0]
```

如果是特殊比较，就需要自己写比较器

```cpp
bool cmp(pair<int, int> a, pair<int, int> b)
{
    if(a.second != b.second) //第二个值从小到大
        return a.second < b.second;
    return a.first > b.first;
}

int main()
{
    vector<pair<int, int>> arr{{1, 9}, {2, 9}, {8, 1}, {0, 0}};
    sort(arr.begin(), arr.end(), cmp);
    // arr = [(0, 0),(8, 1), (2, 9), (1, 9)]
}
```



## lower_bound() / upper_bound()

在<u>已升序排序</u>的元素中，应用**二分查找**检索指定元素，<u>返回对应元素迭代器位置</u>，**找不到则返回尾迭代器**。

- `lower_bound()`：寻找$\geq x$的第一个元素位置
- `upper_bound()`：寻找$> x$的第一个元素位置

怎么找$\leq x$或$< x$的第一个元素呢？

- $> x$ 的第一个元素的前一个元素(如果有)便是 $\leq x$ 的第一个元素

- $\geq x$ 的第一个元素的前一个元素(如果有)便是 $< x$ 的第一个元素

返回的是迭代器，如何转成下标索引呢？减去头迭代器即可。

**用法示例**

```cpp
template<class Forwordit, class T>
Forwordit lower_bound(Forwordit first, Forwordit last, const T& value);
```

```cpp
vector<int> arr{0, 1, 1, 1, 8, 9 ,9};
vector<int>::iterator it = lower_bound(arr.begin(), arr.end(), 7);
int idx = it - arr.begin();
//idx = 4;
```

我们通常写成一行

```cpp
vector<int> arr{0, 1, 1, 1, 8, 9 ,9};
int idx = lower_bound(arr.begin(), arr.end(), 7) - arr.begin();
```



## reverse()

使一系列元素**反序**

```cpp
template<class T>
T reverse(T first, T last);
```

注意：[first, last)

```cpp
vector<int> arr{0, 1, 1, 1, 8, 9 ,9};
reverse(arr.begin(), arr.end());
// arr = [9, 9, 8, 1, 1, 1, 0]

reverse(arr.begin()+2, arr.begin()+5);
// arr = [9, 9, 1, 1, 8, 1, 0]
```



## max() / min()

获取最大值或最小值

```cpp
min(1, 2); // 比较两个数

min(min(1, 3), 2); //比较三个数

min({1, 3, 2, 4}); //C++ 11及以后
```



## unipue()

<u>消除数组的重复</u>**相邻**元素，数组<u>长度不变</u>，但是<u>有效数据缩短</u>，返回的是**有效数据位置**的<u>结尾迭代器</u>

例如：$[1,1,4,5,1,4]\to[1,4,5,1,4,?]$，?位置为返回的迭代器指向。

```cpp
template<class Forwardit>
Forwardit unipue(Forwardit first, Forwardit last);
```

**用法示例**

单独使用 unique 并不能达成去重效果，因为它只消除相邻的重复元素。但是如果序列有序，那么它就能去重了。

但是它去重后，序列尾部会产生一些无效数据：$[1,1,2,4,4,4,5]\to[1,2,4,5,?,?,?]$，函数返回第一个？位置，为了删掉这些无效数据，我们需要结合 erase.

最终，给 vector 去重的写法便是：

```cpp
vector<int>arrt{1, 2, 1, 4, 5, 4, 4};
sort(arr.begin(), arr.end()); //排序
arr.erase(unique(arr.begin(), arr.end()), arr.end()); //将无效数据删除
```



## 数学函数

所有函数均支持`int / long long / float / double / long double`

| 公式                                | 示例         |
| ----------------------------------- | ------------ |
| $f(x)=|x|$                          | `abs(-1.0)`  |
| $f(x)=e^x$                          | `exp(2)`     |
| $f(x)=\ln x$                        | `log(3)`     |
| $f(x,y)=x^y$                        | `pow(2, 3)`  |
| $f(x)=\sqrt x$                      | `sqrt(2)`    |
| $f(x)=\left\lceil x\right\rceil$    | `ceil(2.1)`  |
| $f(x)=\left\lfloor x \right\rfloor$ | `floor(2.1)` |
| $f(x)=<x>$                          | `round(2.1)` |

**注意事项**

由于浮点误差，有的数学函数的行为可能与预期不符，导致WA。如果<u>操作数都是整型</u>，那么用下面的写法会更稳妥

- $\left\lfloor \frac{a}{b} \right\rfloor$
  - 别用：`floor(1.0 * a  / b)`
  - 要用：`a / b`
- $\left\lceil \frac{a}{b} \right\rceil$
  - 别用：`ceil(1.0 * a / b)`
  - 要用：`(a + b - 1) / b` ($\left\lceil \frac{a}{b} \right\rceil=\left\lfloor \frac{a+b-1}{b} \right\rfloor$)
- $\left\lfloor \sqrt a \right\rfloor$
  - 别用：`(int) sqrt(a)`
  - 要用：二分查找[https://io.zouht.com/7.html](https://io.zouht.com/7.html)
- $a^b$
  - 别用：`pow(a, b)`
  - 要用：快速幂[https://io.zouht.com/18.html](https://io.zouht.com/18.html)
- $\left\lfloor \log_2a \right\rfloor$
  - 别用：`log2(a)`
  - 要用：`__lg` （不规范）/ `bit_width`（C++ 20 可用）



## gcd() / lcd()

（C++ 17）返回最大公因数 / 最小公倍数

```cpp
int x = gcd(8, 12); // 4
int y = lcm(8, 12); // 24
```

如果不是C++ 17，但是是GUN编译器（g++），那么可以用内置函数`__gcd()`

当然，`gcd() / lcd()`函数也挺好写，直接写也行（欧几里得算法）：

```cpp
int gcd(int a, int b)
{
    if(!b)
        return a;
    return gcd(b, a % b);
}

int lcd(int a, int b)
{
    return a / gcd(a, b) * b;
}
```





