---
description: "告诉用户当前所在位置及页面层级关系，并能够快速去往其他层级。"

---

## 简介

当系统拥有超过两级以上的层级结构时，可以使用面包屑组件来告诉用户所在位置和页面层级，同时支持用户在层级页面间快速跳转。



## 基本构成

![](https://www-s.ucloud.cn/2022/08/22c3616e4b1904552eb97d993c506869_1660728148880.png)

| 当前页面（A） | 路径（B） | 层级分割线（C） | 返回按钮（D） |
| :-----------: | :-------: | :-------------: | :-----------: |
|       √       |     √     |        √        |     可选      |




## 基本样式

| 类型   | 说明                                       |
| :----- | :----------------------------------------- |
| 常规   | 包含路径、当前页面、连接符的基本样式       |
| 自定义 | 可自定义配置项，下拉菜单、连接符、返回按钮 |

#### 常规

![](https://www-s.ucloud.cn/2022/08/318ee14c5e1ef61f83e2f738c63f9d9e_1660728148881.png)

#### 自定义

![](https://www-s.ucloud.cn/2022/08/a8594d2e152011640ecc9abfc2d04454_1660728148882.png)



## 设计说明

在界面中如何使用该组件？



#### 1.使用目的

-  表明当前页面所处的位置，感知产品属性之间的所属关系。      
- 面包屑可以减少的用户返回上一级页面的所需的操作次数。     
- 临时性，动态性，占用屏幕空间小，干扰性小。



#### 2.使用场景    

- 当网站内拥有分类明晰、组织明确的多层次线性结构的时候，应当使用面包屑。      
- 当网站不具备逻辑清晰的层次结构的时候，不建议使用面包屑。



#### 3.使用时的注意事项      

- 不要在移动端页面上使用面包屑。

- 层级要精简，最多五层。



## 常见问题

### 当前页面在面包屑中不可点击    

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>鼠标移至面包屑当前页面上，无交互反馈，不可点击。</p>
      <img src="https://www-s.ucloud.cn/2022/08/cb83921176bb0245df2cfdd4788b5aa7_1660728148885.png" alt="image alt" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>面包屑中当前页面只起到定位作用，点击没有任何意义。</p>
      <img src="https://www-s.ucloud.cn/2022/08/91fb9cf01cf9b813a95126aa38377ae9_1660728148893.png" alt="image alt" loading="lazy" />
   </div>
</div>

### 抽屉面包屑路由显示规范
<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>抽屉内面包屑不包含上一级页面，路径默认从抽屉内第一级标题开始</p>
      <img src="https://www-s.ucloud.cn/2022/08/1362d75d8af50c9e37a9d36d341b52ba_1660728251046.jpg" alt="image alt" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>若抽屉面包屑路径包含上一级页面，则点击路由返回效果等同于关闭抽屉。与常规独占页返回上一级效果不一致。</p>
      <img src="https://www-s.ucloud.cn/2022/08/aab0a84d296b9fe8d9423f81ab839793_1660728251059.jpg" alt="image alt" loading="lazy" />
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

1. [Tabs 标签页](/component/Tabs/)

