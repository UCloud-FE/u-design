---
description: "带有箭头的文字气泡框。"
---

<!--副标题具体写法见源代码模式-->



## 简介

鼠标悬停于特定对象上触发的文字提示：

- 仅文本提示展示
- 带有**9个方向**的指向性箭头

## 基本构成

![](此处缺少示意图：示意对象与悬停出发的气泡框)

1. 箭头气泡框
2. 文本

## 基本样式
`Tooltip`支持9个方向箭头指向，使用时请确保始终指向目标元素。 

![](演示一下箭头须要跟随对象元素)
> 若目标元素周围有其他内容，注意避免遮挡。


## 常见问题
### `Tooltip`与`Popover`分不清？

核心差异：提示内容是否包含操作

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>`Popover`卡片面积更大，可容纳信息量更多。</p>
      <img src="Popover卡片展示操作的示意图_正确.jpg" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>`Tooltip`仅用于纯文本提示场景，如需要增加操作，需使用`Popover`</p>
      <img src="Tooltip包含操作的示意图_错误.jpg" alt="image alt" title="desc" />
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

1. [Popover 气泡卡片](/component/Popover/)
