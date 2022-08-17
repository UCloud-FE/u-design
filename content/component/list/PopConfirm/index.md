---
description: "用于中成本的操作的二次确认。"
---

## 简介

用户在使用产品时需要做各种决策，为了减少甚至避免对重要数据的误操作，或对重要操作的误触，我们需要在必要且合适的时候，让用户对操作进行二次确认。

气泡确认框 `PopConfirm` 通常用于中成本的操作的二次确认，其会在点击元素上弹出浮层进行提示确认。防止误操作。




## 基本构成
![](https://www-s.ucloud.cn/2022/08/f62b32c9cfc2c26b66c5d1965d2f8b44_1660737638339.png)

| 图标（A） | 文本内容（B） | 操作按钮（C） | 容器（D） |
| :-------: | :-----------: | :-----------: | :-------: |
|   √    |       √       |     √     |     √     |

**A.图标**

主要用来表示提示的重要程度。U-Design预设部分图标，用户也可以根据自己的需求自定义。

**B.文本内容**

U-Design建议 气泡确认框 `PopConfirm` 的文案公式如下：打断原因+操作带来的后果+用户可以做什么操作。需要注意，整条文案不宜过长。

**C.操作按钮**

**D.容器**


## 基本样式

### 尺寸

**最小宽度**

简洁模式下, U-Design预设了一个边框最小宽度186px。

![](https://www-s.ucloud.cn/2022/08/775564ab60e42f0f68c429c3b3e04eac_1660737638341.png)

**常用尺寸**

U-Design为气泡确认框`PopConfirm` 设定的文字最大宽度为240px, 超出自动换行显示。

![](https://www-s.ucloud.cn/2022/08/fe2a63348603ec810842950d57db9606_1660737638345.png)

**超长的文本（不建议）**

建议文本最多3行，超出显示滚动条，通过滚动展示全部文本。

![](https://www-s.ucloud.cn/2022/08/a7bca5ec3f32f966b31c67a337a02984_1660737638355.png)




## 设计说明
1.气泡确认框没有蒙层，点击确认框以外的区域即可关闭。

2.用户转化关键节点避免使用二次确认，会中断整个用户购买流程。

<!--（这部分原来在常见问题部分，移上来了麻烦交互措辞）-->



## 常见问题


### 避免滥用

气泡确认框 `PopConfirm` 是会打断用户操作流的设计，是迫不得已的折中方案：
- 其会增加用户操作步骤，降低操作效率；
- 打断用户流程，降低转化率；
- 影响产品品质，损害用户体验印象。



<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>对于中成本的操作，给予提示</p>
      <img src="https://www-s.ucloud.cn/2022/08/ab5cbed8f4bc9c56add4365ae95c8eb3_1660737705741.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>低成本的操作，无需确认</p>
      <img src="https://www-s.ucloud.cn/2022/08/98e8e56de1b42b38c699db586fd70a26_1660737705744.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>



### 优化微文案

对于二次确认的功能无论是从信息获取角度还是提升用户体验的角度，都要注意减少用户的挫败感。

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>可将操作直接写在按钮上，减少误会。</p>
      <img src="https://www-s.ucloud.cn/2022/08/da990b414ece28d93299fecf00851e6b_1660737705746.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>为避免歧义，按钮的文案应尽量不使用“确定/取消”。</p>
      <img src="https://www-s.ucloud.cn/2022/08/ad6ade0de57b59976270bed736d90429_1660737705750.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>


## 相关文档

1. [Popover 气泡卡片](/component/Popover/)
2. [Tooltip 文字提示](/component/Tooltip/)
