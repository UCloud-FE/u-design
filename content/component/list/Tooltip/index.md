---
description: "带有箭头的文字气泡框。"
---

## 简介

鼠标悬停于特定对象上触发的文字提示：

- 仅文本提示展示
- 带有**9个方向**的指向性箭头

## 基本构成

![](https://www-s.ucloud.cn/2022/08/ca5d12391025128ebdd57dec1a18bde4_1660739809997.png)

**A.箭头气泡框**

**B.文本**

## 基本样式
`Tooltip`支持9个方向箭头指向，使用时请确保始终指向目标元素。 

![](https://www-s.ucloud.cn/2022/08/9b448eeb2ae7411ecb547d6ea3b7b71d_1660739810000.png)
> 若目标元素周围有其他内容，注意避免遮挡。

### 颜色

U-Design预设了浅色、暗色两种颜色。

![](https://www-s.ucloud.cn/2022/08/70a0366ddd662f075c8ae4f10a55a36f_1660739810001.png)

## 常见问题

### `Tooltip`与`Popover`分不清？

核心差异：提示内容是否包含操作。

`Popover`卡片面积更大，可容纳信息量更多；`Tooltip`仅用于纯文本提示场景，如需要增加操作，需使用`Popover`。

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>纯文本提示</p>
      <img src="https://www-s.ucloud.cn/2022/08/1a937969ff6a2d983a9b65936c64ac78_1660739810002.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>包含操作，应使用Popover</p>
     <img src="https://www-s.ucloud.cn/2022/08/5c8b5cf1e93bd49db7ed5849633f4012_1660739810002.png" alt="image alt" title="desc" loading="lazy" />
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
