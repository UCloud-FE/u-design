---
category: 反馈与文案
title: 应用场景
order: 4
---

UCloud Console包含各种复杂多样的功能界面。为了不断提升用户在平台的自助式体验，体验团队从不同业务流程中抽离出可以通用的模块并定义规范，其中就包含文案部分。
以下是平台内常见的文案应用场景：                                                                                        

## 信息提示

> 一般为配置副标题、问号内提示、全局提示条

展示于操作触发前，用于传达操作须知及风险。

### 1. 表单内的配置说明

建议使用简洁的语句精准描述配置项的含义，避免参杂不必要的解释，干扰用户理解主要内容。若功能比较复杂，可增加文档链接引导用户前往，自助学习。

![](https://www-s.ucloud.cn/2022/11/ee18e4df8815264011f0ff3518fb05e6_1668510447933.png)

### 2. 弹窗内的操作提示

不同场景下，不同紧要性的提示信息应该遵循不同的书写规范。

- **提示/说明**：向用户提供启示或解释，期望引起用户注意，但即使用户忽略也不会对后续操作造成功能性上的影响。
- **操作建议**：为用户操作提供切实有效的建议，遵循建议能利好操作效率或结果。表述需使用正向表达，用户更愿意听从积极的表述。

| 推荐                                       | 不推荐                                         |
| ------------------------------------------ | ---------------------------------------------- |
| 建议开启快照服务，开启后镜像制作更加快捷。 | 若系统盘未开启快照服务，制作镜像会消耗些时间。 |

- **风险提示**：将那些不在用户预期内的操作结果提前告知用户，期望引起用户注意，但即使忽略提示也不会对后续操作造成功能性上的影响。

  > 1. 若影响较大，建议将提示置于弹窗操作栏区，并添加「确认框」，以此来吸引用户阅读并确认知晓该提示。
  > 2. 要区分**风险**和 **Bug** 。若功能存在严重的功能性 Bug ，应暂时功能并进行修复，而不是仅仅用提示将风险告知用户。

![](https://www-s.ucloud.cn/2022/11/e900e4ba88ec6950a34f4226055d222b_1668578158765.png)

- **限制提示**：类似于前置展示的操作报错，告诉用户当前操作无法执行的原因。原因说明之外，平台还应该提供有效的**帮助引导**或**解决方案建议**。

![](https://www-s.ucloud.cn/2022/11/ce60d3d19e1eb218230de4453e0a2404_1668583176142.png)

## 空提示

> 一般为列表空提示、输入组件placeholder、缺省模版等

根据不同信息容器，展示于列表、输入组件和独占页面中。一般出现在数据生成之前，用于告知用户当前无数据。根据产品需要可以增加产品介绍、文档链接。

### 1.列表空提示

数据列表的空状态是列表组件的常规状态之一，用于告诉用户当前列表无数据的同时提供一些数据生成的操作引导。空状态与列表数据异常或列表组件加载异常不同，不建议使用报错或告警色进行提示。

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>需要合理进行空状态提示，给到状态说明和操作引导。操作引导使用文字链样式，点击后新开前往新建流程。</p>
      <img src="https://www-s.ucloud.cn/2022/11/7a662f93ea6a285e25ed0045152ff08c_1668491821151.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>不建议隐藏容器或完全留白。空状态是数据界面的正常情况之一，隐藏容器或者完全留白会让用户误以为界面错误。</p>
      <img src="https://www-s.ucloud.cn/2022/11/ee097539f80032ead46a76a68fcb3bde_1668491821122.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>


### 2.卡片空提示

以 UCloud Console 为例，卡片形态多出现在资源详情的概览页内，用于展示「信息组」。文案设计规则与列表空提示一致，若卡片本身包含新建操作，提示内操作引导可隐去。
![](https://www-s.ucloud.cn/2022/11/0afefb80144581bb2198ace807721452_1668494261109.png)

### 3.输入组件空提示

一般指输入组件的占位符 Placeholder。此类提示配合[表单内的配置提示]()，将**输入的对象**告诉用户。

- 输入项标题为专业用语时，空提示需**写明输入对象**
- 输入项标题已直白易懂，空提示显示为「**请输入**」
- 空提示需文本简洁、表述精准，**不应该被遮盖**
- 空提示优先提示输入对象，**格式及限制可用户冒泡组件进行提示**

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>输入组件的空提示应该必要、简洁、显示完整。</p>
      <img src="https://www-s.ucloud.cn/2022/11/26f18d5186f3831ae0cbc99f34d4d8e6_1668584695788.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>重复的、残缺的提示是无效的。</p>
      <img src="https://www-s.ucloud.cn/2022/11/7c03056c24a85759372ebc1d6f7b5243_1668584695783.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>




### 4.缺省状态

因为网络、接口或者权限问题，页面无法正常展示是出现的异常空状态，如404页面等。
以下是常见的 4 种缺省状态产生原因：

- **网络异常**：网络加载失败，分为公共依赖或某个 Javascript 文件加载失败。报错样式仅展示在加载失败的区域内。
- **权限报错**：由于子账号身份或者产品权限位限制，当前页面无法被访问时出现。
- **浏览器兼容性报错**：当前浏览器类型或版本无法兼容平台页面的展示时出现。
- **未实名报错**：用户因没有完成实名认证，而无法访问页面时出现。

想要了解详细模版说明，[去学习](/spec/template_exception/)



## 操作反馈

在使用平台系统时，用户通过操作界面元素（前台）来完成与系统内部（后台）的数据交换。设计者想要规范平台反馈的展示形式，就需要了解反馈的类别。
那么，根据数据处理过程，我们可以进行如下分析：

|              | 问题类型                   | 归属 |
| ------------ | -------------------------- | ---- |
| 展示代码层面 | 功能（操作）、界面、兼容性 | 前端 |
| 网络层面     | 速度                       | 前端 |
| 数据接口层面 | 数据处理正确性             | 后端 |
| 数据库层面   | 逻辑、性能（功能）、安全性 | 后端 |

用户与平台进行数据交换的过程是相同的，不同的是交换的数据类型、交换数据的场景、平台给到用户反馈的时机和方式。结合反馈获取的环节和反馈的内容，我们可以将操作反馈方式进行如下分类。同时，分门别类的给出使用建议。

### 成功反馈

涉及数据库层面的操作，成功反馈均以后端反馈为准。

| 反馈方式             | 适用于                                         | 举例                                       |
| -------------------- | ---------------------------------------------- | ------------------------------------------ |
| 页面变更展示代替提示 | 及时生效的操作                                 | 资源创建后，自动返回资源列表并新增一条数据 |
| 全局提示 Message     | 前台操作后，后台执行并完成需要一定时间         | 镜像复制                                   |
| 独占页面             | 操作涉及多个对象，且每个对象都有独立的操作结果 | 购买支付                                   |

![](https://www-s.ucloud.cn/2022/11/97b064a693835cb3389de4e505dce138_1668586506236.png)

### 失败反馈

数据在传给后端前后均会出现失败情况。失败发生的时机不同，反馈的方式也不同。

| 反馈方式         | 适用于                                         | 举例                       |
| ---------------- | ---------------------------------------------- | -------------------------- |
| 输入组件报错     | 必填项为空、输入项不符合字段或表单要求         | 国内手机号码填写位数超过11 |
| 全局提示 Message | 前台操作后，后台执行并完成需要一定时间         | 镜像复制                   |
| 独占页面         | 操作涉及多个对象，且每个对象都有独立的操作结果 | 购买支付                   |

![](https://www-s.ucloud.cn/2022/11/dfaf31cda74c9ea3eb9085843eb3fac0_1668586375704.png)

## 消息通知

> 一般为全局公告、产品公告

与操作行为无紧密关联，多用于平台侧单方面向用户传达消息通知的场景。此类场景，除了需要关注信息传达上的准确性外，还需要注意官方视角和句式规范。
- 表述方式体现官方视角，**避免口语化**
- 语言组织应该模版化，**同类通知使用相同模版**
- 涉及访问地址、具体对象或者时间信息，应该**精确、精准**
- 支持手动关闭/隐藏

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>应该遵循规范模版并精准表述必要信息。</p>
      <img src="https://www-s.ucloud.cn/2022/11/2ae02f0e0f127cfbabc39d7b43623ef3_1668571450450.png" alt="image alt" title="desc" loading="lazy" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>避免信息模糊、表述口语化。</p>
      <img src="https://www-s.ucloud.cn/2022/11/26eb2e3f60436497845f3103f864ec3b_1668571450455.png" alt="image alt" title="desc" loading="lazy" />
   </div>
</div>

## 用户引导

> 一般为新功能提示/操作引导

与操作行为无紧密关联，一般用于宣传新功能或者为新功能向用户提供操作引导。

|        | 描述                                                         | 推荐                                                         | 不推荐                                                       |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 提示类 | 干扰性弱，吸引力也弱                                         | UCloud现已推出新版 MongoDB，欢迎前往体验。[立即前往 >>]()    | 新版 MongoDB 是架构在云端集群上数据库服务，通过云服务的方式让数据库的可靠性更高、免去繁琐的维护工作，节约硬件成本。现在新版已经上线，欢迎体验！ |
| 弹窗类 | 展示空间相对充足，但会打断用户操作                           | 说明文案与操作分布合理、允许用户手动跳过                     | 文案过长无重点甚至需要滚动阅读                               |
| 独占类 | 方案可定制、可拓展且说明能力强，但会占用用户较长时间阅读/体验 | 分步骤、高亮重点、步骤之间跳转形成的视觉动线明确、允许用户手动跳过 | 过分花哨的视觉表达宣兵夺主；引导无逻辑，操作零散             |

## 相关文档

- [通用原则](/spec/copywriting_default/)
- [语气及语言](/spec/copywriting_manner/)
- [书写建议](/spec/copywriting_writing/)
- [语料库](/spec/copywriting_corpus/)
