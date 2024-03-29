---
description: "从多个选项中选择一个或多个选项，并呈现选择结果的组件。"
---

## 简介

当选项过多时，使用下拉菜单展示并选择一个或多个选项内容。



## 基本构成

![](https://www-s.ucloud.cn/2022/08/036932a75df4e27784df280eb3b14299_1660731641572.png)

| 选择器（A） | 下拉容器（B） | 搜索输入框（C） | 复选标记（D） | 清除按钮（E） |
| :---------: | :-----------: | :-------------: | :-----------: | :-----------: |
|      √      |       √       |      可选       |     可选      |     可选      |

**A.选择器**

- 展示操作后的选项


**B.下拉容器**

- 收纳操作元素、可选项

**C.搜索输入框（可选）**

D.复选标记（可选）

E.清除按钮（可选）





## 基本样式

| 类型       | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| 基础用法   | 下拉选择器的基础用法，分为单选与多选，带搜索的多选可配置全选项。 |
| 带搜索功能 | 搜索框可同时用于单选或多选选择器中，通常在选项数量较大，用户需要通过搜索才能方便找到选项时使用。 |
| 带分组标签 | 分组标签可同时用于单选或多选选择器中，当选项需要进行分类辅助用户查找选项时使用，标签不支持点选。 |

#### 基础用法

![](https://www-s.ucloud.cn/2022/08/ce99ad2c6f6fe10b23f9aa8b77c6260a_1660731641578.png)

#### 带搜索功能

![](https://www-s.ucloud.cn/2022/08/a06ff23af41f815f6315ab7219e0db2a_1660731641580.png)

#### 带分组标签

![](https://www-s.ucloud.cn/2022/08/9d1669fcca54c2ed4527edfe6faa5966_1660731641585.png)

## 基本状态

![](https://www-s.ucloud.cn/2022/08/be880cb8b313bc45e6ce8fd8e816c339_1660731641588.png)

| 状态           | 说明                               | 作用                   |
| :------------- | :--------------------------------- | ---------------------- |
| 默认状态       | 组件初始状态                       | -                      |
| 悬停状态       | 鼠标经过选择器时，切换至该状态     | 暗示用户行动点可操作   |
| 激活状态       | 点击选择器切换该状态               | 提示用户进一步选择操作 |
| 有选项（单选） | 用户选择选项后显示该状态           | 选择器显示已选择内容   |
| 有选项（多选） | 用户选择选项后显示该状态           | 选择器显示已选择数量   |
| 禁用状态       | 当前行动点不可用，建议配合提示说明 | 表示当前选项不可选择   |



## 设计说明

在界面中如何使用该组件？

#### 1.使用场景    

- 当选项过多且选项没有层级关系时，使用 [级联选择器](/component/Cascader/) `Cascader`展示并选择内容。

  ![](https://www-s.ucloud.cn/2022/08/40094a65db713f6e1b41b81e6eaa419e_1660731712820.png)

#### 2.特殊用法    

- 当选择器支持空值时，选择器应给予清除按钮。

![](https://www-s.ucloud.cn/2022/08/f69f58916fe1a040717e1d862b16213f_1660731712827.png)



- 当选择器为多选，且支持搜索时，搜索结果中可给出全选项。

![](https://www-s.ucloud.cn/2022/08/8e6c4c0f7c82eb11d43582025d49bbc8_1660731712836.png)



- 当选择器为多选，选择器可展示选择结果，有两种展示方式：

  A方案：适用于用户选择项数量不多的场景

  ​    此方案展示出一个选择结果，其余用数字展示；

  ​    鼠标hover数字时显示其余选项，支持删除，当鼠标移出区域500ms后，气泡消失；

  ​    气泡内的选项顺序按照选择顺序排列；

  ​    当外侧显示的选项删除时，气泡内的第一个选项移到外侧。

  ![](https://www-s.ucloud.cn/2022/08/6a6c5e66679db7a41b095869932af3a2_1660731712839.png)

  

  

  B方案：适用于用户选择项数量较多的场景

  ​    当业务需要选择较多选项时，无疑选择器的有限空间已无法满足承载大量已选信息的展示，因此可将选择结果展示在表单中，选择器内仅显示已选数量；

  ​    选择结果若超出三行，可出现滚动条。

![](https://www-s.ucloud.cn/2022/08/cd2453ab196c1b5c5ab9b59dd4ff7b5a_1660731712840.png)





## 常见问题

### Select与Radio使用时的区别

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>选项小于5项时建议使用单选Radio，选项大于等于5项时建议使用select。</p>
      <img src="https://www-s.ucloud.cn/2022/08/bd3d17cafac71e2336b4a88b37d07fb6_1660731823257.png" alt="image alt" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>选项过多时使用radio容易使表单整体看起来臃肿，当选项太少时若使用select不利于用户快速选择。</p>
      <img src="https://www-s.ucloud.cn/2022/08/d75a98693b234a92748bfad46974e9f5_1660731823260.png" alt="image alt" loading="lazy" />
   </div>
</div>







### 必填字段的默认项与空值使用

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>若字段为必填项时，建议给出默认选项，且不支持清除按钮。</p>
      <img src="https://www-s.ucloud.cn/2022/08/f959cc685833042bf314648ce284ceae_1660731823266.png" alt="image alt" loading="lazy"/>
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>必填字段若默认为空，容易导致用户忘记选择而校验报错。</p>
      <img src="https://www-s.ucloud.cn/2022/08/ed5f3faf8c4aa2cf0ec232cfa7c47cb7_1660731823268.png" alt="image alt" loading="lazy"/>
   </div>
</div>



<!--

## 主题

| 内容 | 值           | 默认值  |
| :--- | :----------- | :------ |
| icon | icon/nothing | nothing |
| icon | icon/nothing | nothing |

-->

## 相关文档

1. [Input 输入框](/component/Input/)
2. [Menu 下拉菜单](/component/Menu/)
