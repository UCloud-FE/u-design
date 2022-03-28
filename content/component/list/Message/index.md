---
description: "对用户的操作作出轻量的全局反馈"
---
<!--副标题具体写法见源代码模式-->

## 简介
- 对用户的操作作出轻量的全局反馈
- 可提供成功、警告和错误等反馈信息
- 页面右上角显示，可自定义消失时间，是一种不打断用户操作的提示方式

## 基本构成
![](../../../images/Message/Basic_ui02.png)

| 图标（A） | 标题（B） | 正文（C） | 操作按钮（D） |关闭按钮（E） |
| :-------: | :-----------: | :-----------: | :-------: |:-------: |
|   √    |       可选       |     可选     |     可选     | √     |

**A.图标（必选）**

告知用户通知的类型

**B.标题（可选，标题和正文至少二选一）**

- 为用户提供通知的快速概述
- 标题应该能说明最重要的信息，需要简短且具有描述性
- 如果可能的话，可以仅使用标题传达信息
- 仅当标题为完整句子时，才使用句号。

**C.正文（可选，标题和正文至少二选一）**

- 提供通知更详细的信息
- 简明扼要，避免重复或解释标题。
- 将内容限制为一到两个短句。
- 可阐述如何诊断故障，或提供后续操作步骤来解决问题

**D.操作按钮（必选）**

- 为用户提供通知相关的查看或处理入口
- 保持文案简洁，并清楚地指示用户可以采取的行动。

**D.关闭按钮（必选）**

快速关闭通知



## 基本状态

![](../../../images/Message/States_ui02.png)

### 默认

用于普通的信息提示。

### 成功

用于表示用户操作顺利完成。

### 加载
用于表示操作正在生效的过程中。

### 警告

用于表示用户操作没有顺利完成或者引起了一定的后果。

### 报错

用于表示用户操作失败或者引起了严重的后果。




## 设计说明

### 关闭

全局提示 `Message` 默认在屏幕上停留五秒钟后自动关闭。

其还包含一个关闭按钮，以便用户可以更快地关闭。

如果业务场景需要强制用户看到该提示时，可以自定义其关闭时长。




## 常见问题


### 全局提示是轻量的

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>
全局提示是轻量的、无中断的提醒方式。</p>
      <img src="../../../images/Message/pro-1_ui.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>希望中断用户的操作时，不适合使用。</p>
      <img src="../../../images/Message/pro-2_ui.png" alt="image alt" title="desc" />
   </div>
</div>

### 文案要精简

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>
文案越精简越好，提高信息传递的效率。</p>
      <img src="../../../images/Message/pro-3_ui.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>太复杂或者太啰嗦的文案会让用户失去耐心。</p>
      <img src="../../../images/Message/pro-4_ui.png" alt="image alt" title="desc" />
   </div>
</div>



## 相关文档

1. [Popover 气泡卡片](https://udesign.ucloud.cn/component/Popover/)
2. [Tooltip 文字提示](https://udesign.ucloud.cn/component/Tooltip/)


