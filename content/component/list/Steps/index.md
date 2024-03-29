---
description: "引导用户按照流程完成任务的导航条。"
---

## 简介

步骤条Steps 是一种常见的导航形式，具有导航的通用属性：告知用户在哪里以及能去哪里。

当任务较为复杂或者存在先后关系时，可将其分解成一系列步骤，从而简化任务，**步骤条Steps** 可以引导用户按照流程完成任务，可以帮助用户对操作流程长度和步骤有个预期，并且知道自己当前步骤，同时也可以对用户的任务完成度有明确的度量。




## 基本构成


![](https://www-s.ucloud.cn/2022/08/e896d7c49ceb3d7c0c1cf9cb8a7d32f3_1660739155584.png)

| 序号（A） | 标题（B） |箭头（C） |备注（D） |
| :-----: | :-----: |:-----: |:-----: |
|    √    |   可选    |  √  | 可选  |

**A.序号**

当前步骤的序号。

**B.标题（可选）**

用于对标题进行补充说明，建议言简意赅，短句为佳。

**C.箭头**

步骤与步骤之间的连接箭头，需要注意区分已完成的步骤与未完成的步骤前的箭头样式。

**D.备注（可选）**

当前步骤的描述性的词语或短语，不建议太长。




## 基本样式

简洁版

![](https://www-s.ucloud.cn/2022/08/711c81367ecd10f8e34f25fc4d2829ff_1660739155586.png)

有标题的步骤条

![](https://www-s.ucloud.cn/2022/08/e2d2ee668af4cb0f8803d5124d917e9e_1660739155587.png)

有描述的步骤条

![](https://www-s.ucloud.cn/2022/08/5491e0a6bc7f64da0ed09e4569793f0b_1660739155589.png)



## 基本状态

U-Design的步骤条有以下五种状态：

![](https://www-s.ucloud.cn/2022/08/61bcaf858b6c0b8513c95dc8588a7832_1660739155591.png)

| 状态   | 描述                       |
| ------ | -------------------------- |
| 待完成 | 用户尚未操作的步骤         |
| 加载中 | 节点正在对数据进行加载     |
| 进行中 | 指示用户当前正在进行的步骤 |
| 已完成 | 用户已经完成的步骤         |
| 报错   | 节点内容报错               |




## 设计说明

- 建议步骤数大于2步时才使用步骤条
- 应尽量将简化步骤流程，建议不多于6步，过多的步骤或过于复杂的流程会降低用户使用的耐心。
