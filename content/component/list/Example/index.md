---
title: 'Example'
---

## 通用 Markdown 语法

https://www.gatsbyjs.com/docs/reference/markdown-syntax/

## 默认图片居中

```md
默认百分百宽度
![image](../../../images/example.png 'desc')

设置固定宽度并居中
<img src="../../../images/example.png"  alt="image alt" title="desc" width="550" align="center" />
```

默认百分百宽度
![image](../../../images/example.png 'desc')

设置固定宽度
<img src="../../../images/example.png"  alt="image alt" title="desc" width="550" align="center" />

## 图片左右布局

```md
图片左右布局：这是一段文本
<div class="u-md-flex-without-bg">
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>
```

图片左右布局：这是一段文本
<div class="u-md-flex-without-bg">
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>

## 图文布局1

```md
右边图片固定最小宽度600px，图片左边边距24px。

<div class="u-md-flex-without-bg">
   这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本
   <div style="min-width:600px; margin-left: 24px">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>
```

右边图片固定最小宽度600px，图片左边边距24px。

<div class="u-md-flex-without-bg">
   这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本
   <div style="min-width:600px; margin-left: 24px">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>

## 图文布局2

```md
<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本1
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
   </div>
   <div class="u-md-mr24">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本2
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
   </div>
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本3
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描</p>
   </div>
</div>
```

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本1
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
   </div>
   <div class="u-md-mr24">
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本2
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
   </div>
   <div>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
      文本3
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描</p>
   </div>
</div>

## 最佳实践

```md
<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>正确用法的说明文本。</p>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>错误用法的说明文本。</p>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>
```

<div class="u-md-flex-without-bg">
   <div class="u-md-mr24">
      <p><i class="u-md-suggested"></i>正确用法的说明文本。</p>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
   <div>
      <p><i class="u-md-not-suggested"></i>错误用法的说明文本。</p>
      <img src="../../../images/example.png" alt="image alt" title="desc" />
   </div>
</div>


<!--

## 主题

| 内容 | 值           | 默认值  |
| :--- | :----------- | :------ |
| icon | icon/nothing | nothing |
| icon | icon/nothing | nothing |


## 相关文档

1. [Tag 标签](https://www.ucloud.cn)
2. [Notice 提示](https://www.ucloud.cn)

-->
