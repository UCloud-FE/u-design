---
description: "用户触发、系统反应的过程。"
---

## 简介
因操作导致的页面跳转、刷新等使页面元素或信息发生变化的行为，页面都需要向服务器发送请求信息，服务器接收到后再发送反馈信息，而由于网络及页面自身处理信息的原因导致这个信息对换的过程可能发生延长从而需要一个“反馈”即 **加载中Loading** 来缓和用户的等待。

加载对用户来说是一种反馈，是用户触发、系统反应的过程。



## 基本样式
当加载时间不可控，或时间很长的情况下，要尽可能缩短用户等待的主观“感知时间”，从而缓解用户等待焦虑，减少负面情绪产生。在用户自然等待过程中，可以通过图形、文字等的吸引，暂时性转移用户注意力，分散等待焦虑。

### 图标加载
![](https://www-s.ucloud.cn/2022/08/31c5cd0d60178682a7ab35f1f029c492_1660736150954.png)

产品都应该有品牌传达的诉求，加载页可以帮助进行品牌透出，提高用户对品牌的感知。具体可以通过加载图标展现品牌元素、品牌色等，进行整体品牌气质的传递，形成品牌感知。此外，**图标加载** 时，需要注意使图标保持动态，减少停顿，避免用户产生「卡」的主观感受。


### 文字和图片共同显示的加载

![](https://www-s.ucloud.cn/2022/08/453f2ad2c0846f48fee1a5661559e302_1660736150956.png)

U-Design默认文案为「Loading」。设计者可以通过文字为用户提供操作上下文。包括用户从哪里来，即将到哪里去，在等待期间可以做哪些准备工作等。并通过文字为用户量话需要等待的时长。

当加载等待时间达到了一个临界值，可能造成大部分用户误认为是网络或程序bug而选择跳出。所以在长时间加载等待的场景下，我们应该通过添加文字，明确地告诉用户当前加载的进度百分比或预计等待时间，以便用户知道自己的等待是有结果的。

> U-Design结合了 **用户等待4秒原则** 和 UX 研究咨询公司 Nielsen Norman Group（NN/g 尼尔森诺曼集团）的一篇文献中提出的 **用户等待心理模型** ，得出了以下参考结论：加载时间小于1s时，用户几乎不会注意到这种加载延迟，我们不需要增加额外的加载动效来填充这段加载时间。加载时间大于4S时，最好可以通过文字量化用户需要等待的时长。

![1](https://www-s.ucloud.cn/2022/08/26fcb5e53e8fbb0d21387447018137e2_1660736150958.png)



## 基本状态
### 全屏加载
![1](https://www-s.ucloud.cn/2022/08/afdc783859a02c6e276842913fa5adbd_1660736150975.png)
全屏展示加载状态，阻止用户操作。一般在网页初次打开时使用，站内跳转不建议使用。

### 容器加载
![](https://www-s.ucloud.cn/2022/08/62441e62098c6dad570209e8b051e42c_1660736150994.png)
比较常见的挂载方式，针对需要刷新的容器进行加载。

### 元素加载
![](https://www-s.ucloud.cn/2022/08/a9c4ace4247f4157d31a0616392ffe02_1660736346820.png)
只针对指定的元素进行加载，不影响页面其他内容，只有特定元素需要刷新时使用。

### 骨架屏加载

![](https://www-s.ucloud.cn/2022/10/856b56b6e671c21691c0b9f60bc15c01_1665224921199.png)
在需要等待数据加载的位置，通过占位图形给用户展示简单的页面布局，用于进入页面后的首次加载或是内容区域的布局排版相对固定的列表或卡片中。



## 相关文档

1. [Progress 进度条](/component/Progress/)
