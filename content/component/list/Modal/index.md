---
description: "打断用户的当前操作流程，获取用户视觉焦点的对话框。"




---

<!--副标题具体写法见源代码模式-->

## 简介

打断用户的当前操作流程，获取用户视觉焦点的对话框。属于一种重量性反馈，一般用于用户进行重要的操作。通常会出现在屏幕的中间位置，会对界面的主要内容造成遮挡。



## 基本构成

![Basic composition](../../../images/Modal/001.png)

| 标题（A） | 关闭按钮（B） | 内容区（C） | 操作栏（D） |
| :-------: | :-----------: | :---------: | :---------: |
|     √     |       √       |      √      |      √      |





## 设计说明

在界面中如何使用该组件？

#### 使用场景    

- 当用户需要快速执行简单的操作、确认信息或反馈提示，但又不希望脱离原有页面时使用模态弹窗。

  

#### 弹窗中的提示信息    

- 当弹窗中需要出现提示信息时，可在标题栏下方用Notice展示。

![001](../../../images/Modal/002.png)



## 常见问题


### 模态对话框与抽屉使用时的区别



<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>当信息较小时使用对话框展示，当信息较大时使用抽屉展示。</p>
      <img src="../../../images/Modal/003.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>当内容较多时，对话框会出现滚动条，不便于用户使用。</p>
      <img src="../../../images/Modal/004.png" alt="image alt" title="desc" />
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

1. [Button 按钮](https://www.ucloud.cn)
2. [Form 表单](https://www.ucloud.cn)



