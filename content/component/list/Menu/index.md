---
description: "我是副标题"
---
<!--副标题具体写法见源代码模式-->

## 简介

U-Design 的 下拉菜单 `Menu` 通常和 选择器 `Select` 结合使用，帮助用户从包含多个属性或值的综合列表中选择一个或多个项。选项过多时，下拉菜单可能会滚动，具体取决于展开时包含的项目数量。

下拉菜单 `Menu` 还可以用于收纳一组命令操作：当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。


## 基本构成
![1](../../../images/Menu/1-9540436.png)


| 类型 | 复选框（A） | 描述项（B） |展开箭头（C） |分割线（D） |背景卡片（E） |
| :--: | :-------: | :-------: | :-------: | :-------: | :-------: |
| 常规 |     可选     |     √     | 可选     | 可选     | √     |



## 基本样式

### 单选菜单

用户只能从互斥选项列表中选择一项，选项的样式包括：默认、hover、选中、禁用。

![2](../../../images/Menu/2-9548267.png)


### 多选菜单
允许用户选择多个选项

![3](../../../images/Menu/3-9549695.png)


### 多层级菜单
选项包含多个层级的数据
![4](../../../images/Menu/4-9550109.png)



## 设计说明

### 以可预测的方式对选项进行排序

选项的排序应该具有一定的逻辑性，如常用项优先，或者按照字母、数值或者时间等进行排序。
![5](../../../images/Menu/5-9551100.png)

### 描述尽可能简短

描述文本值应尽可能短，因为列表仅限于使用单行，太长的值会被截断。
![6](../../../images/Menu/6-9551221.png)


### 不可用的选项置灰

不能选择的选项不要删除，应保留在视图中并用灰色表示。如果用户将鼠标悬停在变灰的选项上，可以考虑显示一条简短的气泡帮助说明为什么禁用该选项以及如何使其处于活动状态。

![7](../../../images/Menu/7-9553252.png)

### 通过点击触发下拉框，而不是悬停触发
悬停菜单会迫使用户必须将光标放在菜单内，如果用户光标离开下拉菜单，菜单将被关闭，增加了用户的操作难度。



## 常见问题
使用下拉菜单是避免用户输入内容的便捷方法，众所周知，打字需要用户付出大量的认知成本，这就是为什么下拉列表在表单设计中很常见的原因。

但是下拉菜单并不是万能的，使用下拉菜单（尤其是表单中的下拉菜单）时，应平衡表单类型、用户类型等各种其他因素的关系，这需要设计师从众多控件中进行权衡。如：

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>当选项很少（5个或更少）时，单选优于下拉菜单</p>
      <img src="../../../images/Menu/8.0.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>选项较少时，使用Menu交互形式过重</p>
      <img src="../../../images/Menu/8.1.png" alt="image alt" title="desc" />
   </div>
</div>







## 相关文档

1. [Select 选择器](https://www.ucloud.cn)