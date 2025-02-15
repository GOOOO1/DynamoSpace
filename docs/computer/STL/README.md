---
title: STL
---

**C++ 标准模板库(STL,standard Template Library)**:包含一些常用数据结构与算法的模板的 C++ 软件库。其包含四个组件--**算法**
(Algorithms)、**容器**(Containers)、**仿函数**(Functors)、**迭代器**(lterators).
<!--more-->
示例:

- 算法:`sort(a.beginO，a.end())`
- 容器:`priority_queue<int>pque`
- 仿函数:`greater<int>()`
- 迭代器:`vector<int>::iteratorit=a.begin()`





# 前言

STL作为一个封装良好、性能合格的C++标准库，在算法竞赛中运用及其常见。灵活且正确使用STL可以节省非常多解题时间，这一点不仅是由于可以直接调用，还是因为他封装良好，可以让代码可读性变高，解题思路更清晰，调试过程往往更顺利。

不过 STL 毕竟使用了很多复杂的结构来实现丰富的功能，它的效率往往是比不上自己手搓针对特定目的数据结构与算法的，因此，STL
的使用相当于<u>使用更长的运行时间换取更高的编程效率</u>，因此，在实际比赛中要权衡 STL 的利弊，不过这一点就得靠经验了。

```cpp
//快速排序算法
//未用STL
void quicksort(int arr[],int 1,int r)
{
    if(1 >= r)
        return;
    int x = arr[(1+r)/2], i = 1-1, j = r+1;
    while (i< j)
    {
        do
        {
            i++;
        }while(arr[i]< x);
        do
        {
            j--
        }while(arr[j] > x);
    if (i < j)
        swap(arr[i], arr[j]);
    }
    quicksort(arr, l, j);
    quicksort(arr, j+1, r);
}
```

```cpp
//用了STL
sort(arr.begin(), arr.end());
```



## 内容总览

（加粗的是有必要学习的，打钩的是最核心的）

- 顺序容器
  - [ ] **array**
  - [x] **vector**
  - [x] **deque**
  - [ ] forward_list
  - [ ] **list**
- 关联容器
  - [x] **set**
  - [x] **map**
  - [ ] **multiset**
  - [ ] **multimap**
- 无序关联容器
  - [x] **unordered_set**
  - [x] **unordered_map**
  - [x] **unordered_multiset**
  - [ ] **unordered_multimap**
- 容器适配器
  - [x] **stack**
  - [x] **queue**
  - [x] **priority_queue**
  - [ ] flat_set
  - [ ] flat_map
  - [ ] flat_multiset
  - [ ] flat_multimap
- 字符串
  - [x] **string**(basic_string<char>)
- 对与元组
  - [x] **pair**
  - [ ] **tuple**





