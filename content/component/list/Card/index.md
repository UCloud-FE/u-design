---
description: "卡片，聚合同类信息的容器。"
---

## 简介

聚合同类信息的容器，使信息分类更加明确。可承载文字、列表、图片、段落，一般用于：

- 创建表单
- 概览页

## 基本构成



卡片布局可以因支持其包含的内容类型而异。以下元素在该品种中常见。

![](https://www-s.ucloud.cn/2022/08/29bcbe26fb83443d5e5c96b168716687_1660729557830.png)

| 类型 | 容器（A） | 标题（B） | 操作按钮（C） | 副标题（D） | 操作区域（E） | 内容区域（F） | 分割线（G） | 底部按钮（H） |
| :--: | :-------: | :-------: | :-----------: | :---------: | :-----------: | :-----------: | :---------: | :-----------: |
| 常规 |     √     |   可选    |     可选      |    可选     |     可选      |       √       |    可选     |     可选      |



##### A. 容器 

- 卡片容器包含所有卡片元素，其大小取决于这些元素所占空间


##### B. 标题 `可选`

- 标题文本包含模块名称
- 不允许折行，可根据业务增加标签
- 可搭配选项卡使用

##### C. 操作按钮 `可选`

- 一般只有一个操作项，如修改配置、单选按钮等


##### D. 副标题 `可选`

- 一般作为解释说明文字出现

##### E. 操作区域 `可选`

- 可作为创建、开启、刷新等操作按钮，可对卡片内容做操作或打开新页面跳转

##### F. 内容区域

- 内容区域不做限定，可以为图表、文字、图形等
- 内容区域高度可固定后内部滚动

##### G. 分割线 `可选`

- 根据实际需要选择是否需要分割线

##### H. 底部按钮 `可选`

- 底部动作按钮可以包括保存、取消、确定等



## 基本样式

### 常规样式

![](https://www-s.ucloud.cn/2022/08/7c7b07c615d926a4d5b71de831ec88eb_1660729557841.png)

### 尺寸

![](https://www-s.ucloud.cn/2022/08/ea6054c4da30e00fe563622d1c3284cb_1660729557845.png)

### 自定义元素顺序

卡片中元素的展示顺序可根据需求进行调整

![](https://www-s.ucloud.cn/2022/08/db2ae7eec535d1eb5e0048618b593ded_1660729557852.png)



## 基本状态

当卡片只作为纯展示容器时，整个卡片只有默认状态，不具备其他状态；当作为可选项时，可存在不同状态。

![](https://www-s.ucloud.cn/2022/08/eab0757aa4aa4b399102a6065fb2db21_1660729557859.png)

| 状态 | 说明                                               |
| :--- | :------------------------------------------------- |
| 默认 | 默认初始状态，所有卡片均有默认展示状态             |
| 悬停 | 若该卡片可选择时，鼠标经过卡片上方时，切换至该状态 |
| 选中 | 展示已被选中状态                                   |
| 禁用 | 当前选项不可被选择                                 |



## 设计说明

### 原则

#### 1.层级

**每个卡片都是独立的个体**

一张卡片可以独立存在，而不需要依赖周围的元素作为上下文；单个卡片内需是相同类型的内容，或针对同一对象的信息聚合；内容可以根据其层次结构获得不同级别的强调。

**多个卡片不可进行嵌套**
卡片作为一个容器，承载各类对象，在使用时为防止其过于复杂，建议卡片不进行嵌套。[常见问题>>](/component/Card/#%E5%8D%A1%E7%89%87%E4%BD%9C%E4%B8%BA%E7%8B%AC%E7%AB%8B%E4%B8%AA%E4%BD%93)

#### 2.反馈

当整个卡片为可点击时，需给出明确的指示引导用户。

#### 3. 一致性

同类卡片组合使用时，要保持相同卡片中布局样式保持一致。[常见问题>>](/component/Card/#%E4%BF%9D%E8%AF%81%E7%9B%B8%E5%90%8C%E7%B1%BB%E5%9E%8B%E5%8D%A1%E7%89%87%E6%A0%B7%E5%BC%8F%E4%B8%80%E8%87%B4)



### 行为

- 卡片的主要作用区域通常是卡片本身；
- 卡片可以支持多个操作，由于卡片展示内容较为冗杂，因此它们应该包含数量有限的操作。



##  常见问题

### 卡片作为独立个体

若展示内容有层级区分，需进行合理布局，不能将卡片嵌套。

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>卡片平铺展示，层级明确</p>
      <img src="https://www-s.ucloud.cn/2022/08/b3d87512dd77bd74be32a137ee1fb94d_1660729737082.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>多个卡片嵌套</p>
      <img src="https://www-s.ucloud.cn/2022/08/2e1b5c50ce6167cdf94468fd1ecbbf25_1660729737086.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>




### 保证相同类型卡片样式一致

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>同类型卡片样式一致</p>
      <img src="https://www-s.ucloud.cn/2022/08/d09b7df33404e13a7af22b6ddfdfe4ed_1660729737089.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>同类型卡片样式不同</p>
      <img src="https://www-s.ucloud.cn/2022/08/5360e3df94152bba7b57450f9e36fc5e_1660729737092.png" alt="image alt" title="desc" loading="lazy" />
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

1. [Form 表单](/component/Form/)



