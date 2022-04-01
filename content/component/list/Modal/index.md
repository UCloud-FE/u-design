---
description: "打断用户的当前操作流程，获取用户视觉焦点的对话框。"




---

<!--副标题具体写法见源代码模式-->

## 简介

弹窗 `Modal` 是打断用户当前操作流程，获取用户视觉焦点的对话框。属于一种重量性反馈，一般用于用户进行重要的操作。通常会出现在屏幕的中间位置，会对界面的主要内容造成遮挡。



## 基本构成

![](../../../images/Modal/forms_01.png)

| 标题（A） | 关闭按钮（B） | 内容区域（C） | 底部操作区域（D） | 提示信息（E） |
| :-------: | :-----------: | :-----------: | :---------------: | :-----------: |
|     √     |       √       |       √       |         √         |     可选      |


## 基本样式


### 尺寸
弹窗 `Modal` 预设了 `sm`、`md`、`lg`三种尺寸，宽度分别为400px、700px、800px，高度随内容自适应。


小号弹窗
主要用于重要级比较高的信息提示
强提醒
用于一些比较重要的反馈并且需要确保用户已经知道的场景下，
常用于操作后结果的展示，或危险、警告等信息的展示。

![](../../../images/Modal/sm.png)

中号弹窗

![](../../../images/Modal/md.png)

大号弹窗

![](../../../images/Modal/lg.png)

### 默认提示
弹窗的默认提示与弹窗等宽，位于内容卡片与弹窗标题之间，具体提示条相关的，可以参考[Notice 提示](https://udesign.ucloud.cn/component/Notice/)。

![](../../../images/Modal/defaultnotice.png)

### 报错提示
弹窗全局的报错，在内容区顶部进行报错。
弹窗区内表单/表格的报错，遵循 [Form 表单](https://udesign.ucloud.cn/component/Form/) 和 [Table 表格](https://udesign.ucloud.cn/component/Table/) 的报错原则。

![](../../../images/Modal/errornotice.png)


## 设计说明

在界面中如何使用该组件？

### 1.使用场景    

当用户需要快速执行简单的操作、确认信息或反馈提示，但又不希望脱离原有页面时使用模态弹窗。

### 2.弹窗中的提示信息    

当弹窗中需要出现提示信息时，可在标题栏下方用Notice展示。

![](../../../images/Modal/descriptions_02.png)



## 常见问题

### 模态对话框与抽屉使用时的区别



<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>当内容较少时使用弹窗展示，当内容较多时使用抽屉展示。</p>
      <img src="../../../images/Modal/problems_01.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>当内容较多时，弹窗内会出现滚动条，不便于用户使用。</p>
      <img src="../../../images/Modal/problems_02.png" alt="image alt" title="desc" />
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

1. [Button 按钮](/component/Button/)
2. [Form 表单](/component/Form/)



