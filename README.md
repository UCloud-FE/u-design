# UCloud Design

## 安装依赖

```bash
npm install
```

## 本地预览

```bash
npm start
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
│   └───spec                      // 设计文档
│       └───color                 //   色彩（category：分类名称、title：标题、order：显示顺序）
│       └───layout                //   布局
│   └───images                    // 所有文档中的图片
  └───components.json           // 所有组件中英文名称定义（ name 字段不能改变、zh_cn 为中文、category为组件分类）
...

```
