---
description: "进行标记和分类的小标签。"
---
<!--副标题具体写法见源代码模式-->

## 简介

用于标记事物的属性和维度；进行分类。



## 基本构成

![](../../../images/tag/forms_01.png)

| 容器（A） | 内容区域（B） | 关闭按钮（C） |
| :-------: | :-----------: | :-----------: |
|     √     |       √       |     可选      |

**A.容器**

**B.内容（图标和文本至少二选一）**

前置图标可以通过自定义icon指示标签的状态，还可以将其与颜色语意结合在一起使用；文本尽量保持简短易懂。

**C.关闭按钮（可选）**

标签可以被关闭，主要用来做可移除的标签。




## 基本样式
#### 类型

![](../../../images/tag/styles_01.png)

#### 颜色

![](../../../images/tag/styles_02.png)

| 描述                       | 背景色                     | 文本色                      |
| :------------------------- | :------------------------- | :-------------------------- |
| 消息通知的提示、默认⾊色值 | `T_COLOR_BG_NOTICE_LIGHT`  | `T_COLOR_TEXT_DEFAULT_DARK` |
| 成功性质的提示             | `T_COLOR_BG_SUCCESS_LIGHT` | `T_COLOR_TEXT_SUCCESS`      |
| 警告性质的提示             | `T_COLOR_BG_WARNING_LIGHT` | `T_COLOR_TEXT_WARNING`      |
| 错误性质的提示             | `T_COLOR_BG_ERROR_LIGHT`   | `T_COLOR_TEXT_ERROR`        |

#### 

## 基本状态

![](../../../images/tag/states_01.png)



## 设计说明

### 自定义状态

系统预设以下五种状态：正常、成功、警告、错误、禁用。

如果不能满足场景需求，提供更多的预设颜色选择，并支持完全自定义。

![](../../../images/tag/descriptions_01.png)

### 紧凑型布局

用于展示一组标签，并提供紧凑型布局。

默认布局

![](../../../images/tag/descriptions_02.png)

紧凑型布局

![](../../../images/tag/descriptions_03.png)





## 相关文档

1. [Badge 徽标](/component/Badge/)
