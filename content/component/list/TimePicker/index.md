---
description: "输入或选择时间的输入控件。"
---

## 简介

`Timepicker`作为时间选择器。当用户需要选择某个时间节点或个时间范围，可点击打开选择面板或通过自定义输入来完成。

## 基本构成

![](https://www-s.ucloud.cn/2022/08/72c415b1a5c385a3187a15bd4ff84f16_1660739638122.png)

| 类型           | 输入框(A) | 时间滚轮(B) | 操作区域(C) |
| :------------- | :-------: | :---------: | :---------: |
| 时间点选择器   |     ✓     |      ✓      |      ✓      |
| 时间范围选择器 |     ✓     |      ✓      |      ✓      |


| 构成        | 定义                                                         | 说明                                                         |
| :---------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| 输入框(A)   | 默认展示元素，单击该元素激活控件。用户可按照规定格式**输入**所需时间 | 需提供占位文案或默认时间                                     |
| 时间滚轮(B) | 默认展示“00:00"，用户可在滚轮上通过**点击**/**滚动**目标项目进选中框内来选择时间 | - 选中框：数字滚入框内，视为被选中<br />- 点击操作：被单击的数值，视为被选中，将自动移入选中框内<br />- 滚动操作：光标移动入滚轮区域，滚动滑鼠滚轮可实现数值滚动 |
| 操作底栏(C) | 可按需选配。展示时，默认提供**确定**，依业务需要可提供**今日此刻**快捷选项 | - 点击**确定**：完成当前选择、收起滚轮，仅保留输入框且恢复**未激活**态<br />- 点击**组件外空白处**：放弃当前选择、收起面板，仅保留输入框且恢复**未激活**态。<br />- 点击**此刻**：自动选中当前时间、收起滚轮，仅保留输入框且恢复**未激活**态。 |




## 基本样式

### 类型与样式

![](https://www-s.ucloud.cn/2022/08/939490cf6e8763ecbf541ba46f3e3244_1660739638126.png)

| 内容           | 说明                                              |
| :------------- | :------------------------------------------------ |
| 时间点选择器   | 用来设定具体时间点，精度可选“时-分”、“时-分-秒”   |
| 时间范围选择器 | 用来设定具体日期范围，精度可选“时-分”、“时-分-秒” |

> 单一日期/日期范围选择，见[《Datepicker 时间选择器》章节]()

### 尺寸

U-Design 目前对`Timepicker时间选择器区分了 3 种尺寸：**大（lg）、中（md）、小（sm**），高度分别为32px、28px、24px。

![](https://www-s.ucloud.cn/2022/08/1e4237b0b5a7e10c4cccdc64dbf4ce66_1660739638128.png)

## 基本状态


| 状态                   | 输入框(A)            | 时间滚轮(B)            | 操作底栏(C)                 |
| :--------------------- | :------------------- | ---------------------- | --------------------------- |
| 默认初始/未选中/未激活 | 占位提示/设定初始值  | 00:00                  | 基于空值判断，默认禁用/激活 |
| 悬停                   | 暗示可点击           | 暗示可选择             | 暗示可点击                  |
| 选中/激活              | 焦点移入，暗示可输入 | 数值选中               | /                           |
| 禁用/不可选            | 时间固定、不可编辑   | 不可选择，悬停需给提示 | 尚未完成设定                |

#### 默认初始

![](https://www-s.ucloud.cn/2022/08/d93e9750343feffe575f0d8b0186268b_1660739638131.png)

#### 悬停状态

![](https://www-s.ucloud.cn/2022/08/f1f140ce8a65a9b20696e778097a24f1_1660739638133.png)

#### 选中/激活状态

![](https://www-s.ucloud.cn/2022/08/b31fc15b7cff76e8d5a5a58ab39f7541_1660739709009.png)

#### 禁用状态

![](https://www-s.ucloud.cn/2022/08/e16523a1a1a444ca2fc6e221f5442367_1660739709011.png)


## 设计说明

### 通用原则

- 计时方式：24h计时法

- 默认初始值设定：

  - 支持空值：需提供占位提示

  - 00:00 ：时间选择器若设定默认值，应设定为00:00

    

### 行为

当用户使用不同设备端访问平台或页面时，如何与界面中的按钮交互？



#### 1.时间点选择

用户使用【时间点选择器】可通过**点击、自定义输入或滚动数值进入选中框**进行设定，自定义输入后键盘“Enter”或点击“确定“进行确认。
![](https://www-s.ucloud.cn/2022/08/db42695a6e4ff37a9273c722757b6795_1660739709020.png)


#### 2.时间范围选择

用户使用【时间范围选择器】进行【开始时间】和【结束时间】的选择，每次需要【依次】完成开始时间及结束时间的选择。搭配日期选择器的使用场景，详见[《Datepicker 时间选择器》章节](/component/DatePicker/)
![](https://www-s.ucloud.cn/2022/08/b5b63ce56b7124fcfacceaf6d7a80fe5_1660739709022.png)


#### 3.输入结果自动校验、自动修正、错误说明

##### 自动校验

- 连接符号（仅支持“:”）
- 日期+时间，用空格隔开。若丢失空格则作错误处理

##### 自动修正

- 输入不符合规则的字符，自动恢复至上一次正确值
- 若数字未落入框选中心，鼠标移出甬道后，会自动归位

##### 错误说明

非自动修正范围的输入项（输入不符合规则或者长度超出）

- 组件报错提示
- 全局报错提示
- “确定”禁用

#### 4.配合**快捷选项**进行使用

可基于用户常关注的时间区间提供快捷选项，并提供**自定义**以触发时间滚轮。基本用法与[Datepicker 时间选择器](/component/DatePicker/)一致。
<!--

## 主题

| 内容 | 值           | 默认值  |
| :--- | :----------- | :------ |
| icon | icon/nothing | nothing |
| icon | icon/nothing | nothing |

-->

## 相关文档

1. [Datepicker 日期选择器](/component/Datepicker/)
3. [Calendar 日历](/component/Calendar/)
