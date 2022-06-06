# UCloud Design

## 本地预览

```bash
npm install && npm start
```

## 目录结构说明

```
...
└───content
│   └───component                 // 组件文档
│       └───category              //   组件类型
│           └───all               //     所有组件
│           └───container         //     容器
│           └───data-input        //     数据输入
│           └───data-presentation //     数据展示
│           └───feedback          //     提示反馈
│           └───general           //     通用
│           └───layout            //     布局
│       └───list                  //   所有组件
│           └───Input             //     Input 组件文档
│           └───Button            //     Button 组件文档
│           ...
│   └───spec                      // 设计文档
│       └───color                 //   色彩（category：分类名称、title：标题、order：显示顺序）
│       └───layout                //   布局
│       ...
│   └───images                    // 所有文档中的图片
│   └───components.json           // 所有组件中英文名称定义（ name 字段不能改变、zh_cn 为中文、category为组件分类）
...
```

## 文档编写规范

* 所有图片命名必须为小写英文字母、中划线、数字组成，有相关语义单词，示例为 `xxxx-xxxx-x.png`。
* 非必要不提交通过 `<!-- xxxx -->` 添加的注释。
* 检查内部或者外部链接是否正确。内部链接使用示例：`[Input 输入框](/component/Input/)` ，外部链接请保证链接可正常访问。
* 提交 commit 时，请简述这次的修改的内容、哪些组件和设计部分。