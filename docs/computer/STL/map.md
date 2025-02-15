---
title: 映射map
---


# 映射map

`#include <map>`

提供对数时间的有序键值对结构。底层原理是**红黑树**。

映射：
$$
0\to3\\
1\to2\\
2\to2\\
3\to1\\
4\to5\\
...
$$

| 性质   | 解释                       | map            | multimap       | unordered_map |
| ------ | -------------------------- | -------------- | -------------- | ------------- |
| 互异性 | 一个键仅可在映射中出现一次 | yes            | no（任意次）   | yes           |
| 无序性 | 键是没有顺序的             | no（从小到大） | no（从小到大） | yes           |

<u>map可以实现任意类型到任意类型的映射</u>：

```cpp
//从int到int的映射与数组相似
int num[10];
num[0] = 3;
num[1] = 2;
//下标就相当于键

//从string到int的映射可用map
map<string, int> a;
a["abc"] = 0;
a["def"] = 1;
a["def"] = 2; //可改
cout << a["ghi"] << endl; //输出0，因为初值为0
```



## 1. 常用方法

### 构造

`map<键类型, 值类型, 比较器> map`

- 键类型：要存储键的数据类型
- 值类型：要存储值的数据类型
- 比较器：键比较大小使用的比较器，默认为`less<类型>`，可自定义

```cpp
map<int, int> mp1;                //int->int的映射，键从小到大
map<int, int, greater<int>> mp2;  //int->int的映射，键从大到小
```

> 对于需要自定义比较器的情况，涉及一些初学时容易看迷糊的语法(重载小括号运算符/lambda 表达式)，在此就不展开讲了。

### 遍历

可使用迭代器进行遍历：

```cpp
for(map<int, int>::iterator it = mp.begin(); it != mp.end(); ++it)
    cout << it->first << " " << it->second << endl;
```

基于范围的循环（C++ 11）：

```cpp
for(auto &pr : mp)
    cout << pr.first << " " << pr.second << endl;
```

结构化绑定+基于范围的循环（C++ 17）：

```cpp
for(auto &[key,val] : mp)
    cout << key << " " << val << endl;
```

### 其他

| 作用                 | 用法           | 示例                    |
| -------------------- | -------------- | ----------------------- |
| 增/改/查元素         | 中括号         | `mp[1] = 2;`            |
| 查元素（返回迭代器） | `.find(元素)`  | `auto it = mp.find(1);` |
| 删除元素             | `.erase(元素)` | `mp.erase(2);`          |
| 判断元素是否存在     | `.count(元素)` | `mp.count(3);`          |
| 查看大小/清空/判空   | 略             | 略                      |

增删改查时间复杂度为$O(\log n)$



## 2. 适用情形

需要维护映射的场景可以使用：输入字符串，统计每种字符串的出现次数。（`map<string, int> mp`）

```cpp
map<string, int> mp;
vector<string> v;
v.push_back("ab");
v.push_back("ab");
v.push_back("ab");
v.push_back("ab");
v.push_back("cd");
v.push_back("cd");
for(int i = 0; i < v.size(); i++)
    mp[v[i]]++;

for(auto &pr : mp)
    cout << pr.first << " " << pr.second << endl;

//输出：
//ab 4
//cd 2
```



## 3. 注意事项

### 中括号访问时默认值

如果使用中括号访问map时对应的键不存在，那么会新增这个键，并且值为默认值，因此中括号会影响键的存在性。

```cpp
map<char, int> mp;
cout << mp.count('a') << endl; // 0
mp['a'];                       //即使什么都没做，但mp['a']=0已经插入了
cout << mp.count('a') << endl; //1
cout << mp['a'] << endl;       //0
```

### 不可用迭代器计算下标

map的迭代器不能像vector一样相减得到下标。**下面是错误用法**：

```cpp
auto it = mp.find('a');
int idx = it - mp.begin();
```





