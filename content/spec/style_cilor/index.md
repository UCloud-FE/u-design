---
category: 全局样式
title: 颜色
order: 0
---

颜色是用户感知界面内容及产品特性的直观方式和媒介，好的产品在颜色配置上应当清晰，为我们的界面带来统一且可识别的一致性。按照类型和功能的不同，UCloud Design将颜色分为源色、变量色、系统色和辅助色。

## 源色

源色实际上是将设计中的最小原子与具体的样式进行解耦。

通常情况下，源色是无法直接使用在产品中的，我们用使用源色中的颜色来进一步定义产品中使用的颜色。

### 内置色

| 语义 | Token                       | 图例/值                                                      |
| :--- | :-------------------------- | :----------------------------------------------------------- |
| 白色 | `T_COLOR_BRAND_WHITE`       | <div class="design-token-color" style="background-color:#FFFFFF"></div>#FFFFFF |
| 黑色 | `T_COLOR_BRAND_BLACK`       | <div class="design-token-color" style="background-color:#0a1633"></div>#0A1633 |
| 透明 | `T_COLOR_BRAND_TRANSPARENT` | <div class="design-token-color" style="background-color:#FFFFFF00"></div>#FFFFFF00 |

### 品牌色

品牌色会作为不同产品独有的主色，常用于强调视觉重量，例如作为主要按钮的底色，文字链接色。下列产品分别设计了独有的品牌色来服务于自己的场景。

| 语义     | Token                     | 图例/值                                                      |
| :------- | :------------------------ | :----------------------------------------------------------- |
| 品牌色-1 | `T_COLOR_BRAND_PRIMARY_1` | <div class="design-token-color" style="background-color:#f8f8ff"></div>#F8F8FF |
| 品牌色-2 | `T_COLOR_BRAND_PRIMARY_2` | <div class="design-token-color" style="background-color:#eaeefd"></div>\#EAEEFD |
| 品牌色-3 | `T_COLOR_BRAND_PRIMARY_3` | <div class="design-token-color" style="background-color:#e3e9ff"></div>\#E3E9FF |
| 品牌色-6 | `T_COLOR_BRAND_PRIMARY_6` | <div class="design-token-color" style="background-color:#6488fc"></div>\#6488FC |
| 品牌色-7 | `T_COLOR_BRAND_PRIMARY_7` | <div class="design-token-color" style="background-color:#5c76e8"></div>\#5C76E8 |
| 品牌色-8 | `T_COLOR_BRAND_PRIMARY_8` | <div class="design-token-color" style="background-color:#3860f4"></div>\#3860F4 |
| 品牌色-9 | `T_COLOR_BRAND_PRIMARY_9` | <div class="design-token-color" style="background-color:#3357df"></div>\#3357DF |

### 中立色

灰色系列在我们的 UI 中占主导地位，合理地选择中性色能够令页面信息具备良好的主次关系，背景、边框、分割线等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异，同时结合 WCAG 2.0 标准。

| 语义   | Token                       | 图例/值                                                      |
| :----- | :-------------------------- | :----------------------------------------------------------- |
| 灰色-1 | `T_COLOR_BRAND_SECONDARY_1` | <div class="design-token-color" style="background-color:#fafafc"></div>#FAFAFC |
| 灰色-2 | `T_COLOR_BRAND_SECONDARY_2` | <div class="design-token-color" style="background-color:#f6f6fb"></div>\#F6F6FB |
| 灰色-3 | `T_COLOR_BRAND_SECONDARY_3` | <div class="design-token-color" style="background-color:#efeff8"></div>\#EFEFF8 |
| 灰色-4 | `T_COLOR_BRAND_SECONDARY_4` | <div class="design-token-color" style="background-color:#dfe0f1"></div>\#DFE0F1 |
| 灰色-5 | `T_COLOR_BRAND_SECONDARY_5` | <div class="design-token-color" style="background-color:#d2d6ea"></div>\#D2D6EA |
| 灰色-7 | `T_COLOR_BRAND_SECONDARY_7` | <div class="design-token-color" style="background-color:#c3cad9"></div>\#C3CAD9 |
| 灰色-8 | `T_COLOR_BRAND_SECONDARY_8` | <div class="design-token-color" style="background-color:#7a8baa"></div>\#7A8BAA |
| 灰色-9 | `T_COLOR_BRAND_SECONDARY_9` | <div class="design-token-color" style="background-color:#526075"></div>#526075 |

### 功能色

这类色彩起到传递功能信息、代表某种状态等作用，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，不要有过多的自定义干扰用户的认知体验。

| 语义   | Token                      | 图例/值                                                      |
| :----- | :------------------------- | :----------------------------------------------------------- |
| 提示-1 | `T_COLOR_BRAND_NOTICE_1`   | <div class="design-token-color" style="background-color:#fafafc"></div>#FAFAFC |
| 提示-2 | `T_COLOR_BRAND_NOTICE_2`   | <div class="design-token-color" style="background-color:#d2d6ea"></div>\#D2D6EA |
| 提示-3 | `T_COLOR_BRAND_NOTICE_3`   | <div class="design-token-color" style="background-color:#526075"></div>#526075 |
| 正确-1 | `T_COLOR_BRAND_SUCCESS_1`  | <div class="design-token-color" style="background-color:#e6ffed"></div>#E6FFED |
| 正确-2 | `T_COLOR_BRAND_SUCCESS_2`  | <div class="design-token-color" style="background-color:#9effa5"></div>#9EFFA5 |
| 正确-3 | `T_COLOR_BRAND_SUCCESS_3`  | <div class="design-token-color" style="background-color:#15ad31"></div>#15AD31 |
| 正确-4 | `T_COLOR_BRAND_SUCCESS_4`  | <div class="design-token-color" style="background-color:#00591c"></div>#00591C |
| 警告-1 | `T_COLOR_BRAND_WARNING_1`  | <div class="design-token-color" style="background-color:#fffce6"></div>#FFFCE6 |
| 警告-2 | `T_COLOR_BRAND_WARNING_2`  | <div class="design-token-color" style="background-color:#ffe38d"></div>#FFE38D |
| 警告-3 | `T_COLOR_BRAND_WARNING_3`  | <div class="design-token-color" style="background-color:#ffc42e"></div>#FFC42E |
| 警告-4 | `T_COLOR_BRAND_WARNING_4`  | <div class="design-token-color" style="background-color:#544411"></div>#544411 |
| 错误-1 | `T_COLOR_BRAND_ERROR_1`    | <div class="design-token-color" style="background-color:#fff0f0"></div>#FFF0F0 |
| 错误-2 | `T_COLOR_BRAND_ERROR_2`    | <div class="design-token-color" style="background-color:#fed4d4"></div>\#FED4D4 |
| 错误-3 | `T_COLOR_BRAND_ERROR_3`    | <div class="design-token-color" style="background-color:#f44336"></div>\#F44336 |
| 错误-4 | `T_COLOR_BRAND_ERROR_4`    | <div class="design-token-color" style="background-color:#5a0c06"></div>\#5A0C06 |
| 禁用-1 | `T_COLOR_BRAND_DISABLED_1` | <div class="design-token-color" style="background-color:#f7f7f7"></div>#F7F7F7 |
| 禁用-2 | `T_COLOR_BRAND_DISABLED_2` | <div class="design-token-color" style="background-color:#d9d9d9"></div>#D9D9D9 |
| 禁用-3 | `T_COLOR_BRAND_DISABLED_3` | <div class="design-token-color" style="background-color:#cccccc"></div>\#CCCCCC |

## 变量色

从源色中引用，应用在包括界面背景，文本图标，链接，描边等具体场景中。

### 背景色

| 语义        | Token                       | 色值        | 图例/源色                                                    |
| :---------- | :-------------------------- | :---------- | :----------------------------------------------------------- |
| 常规-亮色   | `T_COLOR_BG_DEFAULT_BRIGHT` | `#FFFFFF`   | <div class="design-token-color" style="background-color:#ffffff"></div>T_COLOR_BRAND_WHITE |
| 常规-透明   | `T_COLOR_BG_TRANSPARENT`    | `#FFFFFF00` | <div class="design-token-color" style="background-color:#FFFFFF00"></div>T_COLOR_BRAND_TRANSPARENT |
| 品牌色-默认 | `T_COLOR_BG_PRIMARY_1`      | `#3860F4`   | <div class="design-token-color" style="background-color:#3860f4"></div>T_COLOR_BRAND_PRIMARY_8 |
| 品牌色-悬停 | `T_COLOR_BG_PRIMARY_2`      | `#3357DF`   | <div class="design-token-color" style="background-color:#3357df"></div>T_COLOR_BRAND_PRIMARY_9 |
| 品牌色-浅   | `T_COLOR_BG_PRIMARY_5`      | `#E3E9FF`   | <div class="design-token-color" style="background-color:#e3e9ff"></div>T_COLOR_BRAND_PRIMARY_3 |
| 灰色-浅     | `T_COLOR_BG_DEFAULT_LIGHT`  | `#FAFAFC`   | <div class="design-token-color" style="background-color:#e3e9ff"></div>T_COLOR_BRAND_SECONDARY_1 |
| 灰色-深     | `T_COLOR_BG_DEFAULT_DARK`   | `#F6F6FB`   | <div class="design-token-color" style="background-color:#F6F6FB"></div>T_COLOR_BRAND_SECONDARY_2 |
| 灰色-悬停   | `T_COLOR_BG_DEFAULT_HOVER`  | `#EAEEFD`   | <div class="design-token-color" style="background-color:#EAEEFD"></div>T_COLOR_BRAND_PRIMARY_2 |
| 提示-浅     | `T_COLOR_BG_NOTICE_LIGHT`   | `#FAFAFC`   | <div class="design-token-color" style="background-color:#FAFAFC"></div>T_COLOR_BRAND_NOTICE_1 |
| 提示-深     | `T_COLOR_BG_NOTICE_DARK`    | `#526075`   | <div class="design-token-color" style="background-color:#FAFAFC"></div>T_COLOR_BRAND_NOTICE_3 |
| 正确-浅     | `T_COLOR_BG_SUCCESS_LIGHT`  | `#E6FFED`   | <div class="design-token-color" style="background-color:#e6ffed"></div>T_COLOR_BRAND_SUCCESS_1 |
| 正确-深     | `T_COLOR_BG_SUCCESS_DARK`   | `#15AD31`   | <div class="design-token-color" style="background-color:#15ad31"></div>T_COLOR_BRAND_SUCCESS_3 |
| 告警-浅     | `T_COLOR_BG_WARNING_LIGHT`  | `#FFFCE6`   | <div class="design-token-color" style="background-color:#fffce6"></div>T_COLOR_BRAND_WARNING_1 |
| 告警-深     | `T_COLOR_BG_WARNING_DARK`   | `#FFC42E`   | <div class="design-token-color" style="background-color:#ffc42e"></div>T_COLOR_BRAND_WARNING_3 |
| 错误-浅     | `T_COLOR_BG_ERROR_LIGHT`    | `#FFF0F0`   | <div class="design-token-color" style="background-color:#fff0f0"></div>T_COLOR_BRAND_ERROR_1 |
| 错误-深     | `T_COLOR_BG_ERROR_DARK`     | `#F44336`   | <div class="design-token-color" style="background-color:#f44336"></div>T_COLOR_BRAND_ERROR_3 |
| 禁用-浅     | `T_COLOR_BG_DISABLED_LIGHT` | `#F7F7F7`   | <div class="design-token-color" style="background-color:#f7f7f7"></div>T_COLOR_BRAND_DISABLED_1 |
| 禁用-深     | `T_COLOR_BG_DISABLED_DARK`  | `#CCCCCC`   | <div class="design-token-color" style="background-color:#f7f7f7"></div>T_COLOR_BRAND_DISABLED_3 |

### 线条

| 语义        | Token                              | 色值        | 图例/源色                                                    |
| :---------- | :--------------------------------- | :---------- | :----------------------------------------------------------- |
| 常规-浅     | `T_COLOR_LINE_DEFAULT_LIGHT`       | `#D2D6EA`   | <div class="design-token-color" style="background-color:#d2d6ea"></div>T_COLOR_BRAND_SECONDARY_5 |
| 常规-深     | `T_COLOR_LINE_DEFAULT_DARK`        | `#C3CAD9`   | <div class="design-token-color" style="background-color:#C3CAD9"></div>T_COLOR_BRAND_SECONDARY_7 |
| 常规-透明   | `T_COLOR_LINE_DEFAULT_TRANSPARENT` | `#FFFFFF00` | <div class="design-token-color" style="background-color:#FFFFFF00"></div>T_COLOR_BRAND_TRANSPARENT |
| 品牌色-默认 | `T_COLOR_LINE_PRIMARY_DEFAULT`     | `#3860F4`   | <div class="design-token-color" style="background-color:#3860f4"></div>T_COLOR_BRAND_PRIMARY_8 |
| 品牌色-悬停 | `T_COLOR_LINE_PRIMARY_HOVER`       | `#3357DF`   | <div class="design-token-color" style="background-color:#3357df"></div>T_COLOR_BRAND_PRIMARY_9 |
| 品牌色-浅   | `T_COLOR_LINE_PRIMARY_LIGHT`       | `#E3E9FF`   | <div class="design-token-color" style="background-color:#e3e9ff"></div>T_COLOR_BRAND_PRIMARY_3 |
| 提示-浅     | `T_COLOR_LINE_NOTICE_LIGHT`        | `#D2D6EA`   | <div class="design-token-color" style="background-color:#d2d6ea"></div>T_COLOR_BRAND_SECONDARY_5 |
| 提示-深     | `T_COLOR_LINE_NOTICE_DARK`         | `#526075`   | <div class="design-token-color" style="background-color:#526075"></div>T_COLOR_BRAND_SECONDARY_9 |
| 正确-浅     | `T_COLOR_LINE_SUCCESS_LIGHT`       | `#9EFFA5`   | <div class="design-token-color" style="background-color:#9effa5"></div>T_COLOR_BRAND_SUCCESS_2 |
| 正确-深     | `T_COLOR_LINE_SUCCESS_DARK`        | `#15AD31`   | <div class="design-token-color" style="background-color:#15ad31"></div>T_COLOR_BRAND_SUCCESS_3 |
| 告警-浅     | `T_COLOR_LINE_WARNING_LIGHT`       | `#FFE38D`   | <div class="design-token-color" style="background-color:#ffe38d"></div>T_COLOR_BRAND_WARNING_2 |
| 告警-深     | `T_COLOR_LINE_WARNING_DARK`        | `#FFC42E`   | <div class="design-token-color" style="background-color:#ffc42e"></div>T_COLOR_BRAND_WARNING_3 |
| 错误-浅     | `T_COLOR_LINE_ERROR_LIGHT`         | `#FED4D4`   | <div class="design-token-color" style="background-color:#fed4d4"></div>T_COLOR_BRAND_ERROR_2 |
| 错误-深     | `T_COLOR_LINE_ERROR_DARK`          | `#F44336`   | <div class="design-token-color" style="background-color:#f44336"></div>T_COLOR_BRAND_ERROR_3 |
| 禁用-浅     | `T_COLOR_LINE_DISABLED_LIGHT`      | `#D9D9D9`   | <div class="design-token-color" style="background-color:#d9d9d9"></div>T_COLOR_BRAND_DISABLED_2 |
| 禁用-深     | `T_COLOR_LINE_DISABLED_DARK`       | `#CCCCCC`   | <div class="design-token-color" style="background-color:#cccccc"></div>T_COLOR_BRAND_DISABLED_3 |

### 文本

| 语义         | Token                          | 色值        | 图例/源色                                                    |
| :----------- | :----------------------------- | :---------- | :----------------------------------------------------------- |
| 常规-亮色    | `T_COLOR_TEXT_DEFAULT_BRIGHT`  | `#FFFFFF`   | <div class="design-token-color" style="background-color:#d2d6ea"></div>T_COLOR_BRAND_WHITE |
| 常规-浅      | `T_COLOR_TEXT_DEFAULT_LIGHT`   | `#526075`   | <div class="design-token-color" style="background-color:#526075"></div>T_COLOR_BRAND_SECONDARY_9 |
| 常规-深      | `T_COLOR_TEXT_DEFAULT_DARK`    | `#0A1633`   | <div class="design-token-color" style="background-color:#0A1633"></div>T_COLOR_BRAND_BLACK |
| 品牌色-默认  | `T_COLOR_TEXT_PRIMARY_DEFAULT` | `#3860F4`   | <div class="design-token-color" style="background-color:#3860f4"></div>T_COLOR_BRAND_PRIMARY_8 |
| 品牌色-悬停  | `T_COLOR_LINE_PRIMARY_HOVER`   | `#3357DF`   | <div class="design-token-color" style="background-color:#3357df"></div>T_COLOR_BRAND_PRIMARY_9 |
| 备注-浅      | `T_COLOR_TEXT_REMARK_LIGHT`    | `#0A163333` | <div class="design-token-color" style="background-color:#0a163333"></div>T_COLOR_BRAND_BLACK_TRANSPARENT_20 |
| 备注-深      | `T_COLOR_TEXT_REMARK_DARK`     | `#7A8BAA`   | <div class="design-token-color" style="background-color:#7a8baa"></div>T_COLOR_BRAND_SECONDARY_8 |
| 正确         | `T_COLOR_TEXT_SUCCESS`         | `#15AD31`   | <div class="design-token-color" style="background-color:#15ad31"></div>T_COLOR_BRAND_SUCCESS_3 |
| 正确-深      | `T_COLOR_TEXT_SUCCESS_DARK`    | `#00591C`   | <div class="design-token-color" style="background-color:#00591c"></div>T_COLOR_BRAND_SUCCESS_4 |
| 告警         | `T_COLOR_TEXT_WARNING`         | `#FFC42E`   | <div class="design-token-color" style="background-color:#ffc42e"></div>T_COLOR_BRAND_WARNING_3 |
| 告警-深      | `T_COLOR_TEXT_WARNING_DARK`    | `#544411`   | <div class="design-token-color" style="background-color:#544411"></div>T_COLOR_BRAND_WARNING_4 |
| 错误         | `T_COLOR_TEXT_ERROR`           | `#F44336`   | <div class="design-token-color" style="background-color:#f44336"></div>T_COLOR_BRAND_ERROR_3 |
| 错误-深      | `T_COLOR_TEXT_ERROR_DARK`      | `#5A0C06`   | <div class="design-token-color" style="background-color:#5a0c06"></div>T_COLOR_BRAND_ERROR_4 |
| 禁用         | `T_COLOR_TEXT_DISABLED`        | `#CCCCCC`   | <div class="design-token-color" style="background-color:#cccccc"></div>T_COLOR_BRAND_DISABLED_3 |
| 系统白色文本 | `T_COLOR_TEXT_SYSTEM_WHITE`    | #FFFFFF     | <div class="design-token-color" style="background-color:#FFFFFF"></div>T_COLOR_BRAND_SYSTEM_WHITE |
| 系统黑色文本 | `T_COLOR_TEXT_SYSTEM_BLACK`    | \#000000    | <div class="design-token-color" style="background-color:#000000"></div>T_COLOR_BRAND_SYSTEM_BLACK |

