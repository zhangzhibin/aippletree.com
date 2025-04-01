# AI 协作规范

chat 使用中文

## 项目语言

本项目为 web app，默认使用英语作为第一语言。

## 页面布局

- 移动优先，兼顾桌面

## css

- 不使用 tailwind
- 吉卜力风格
- 集中存放在 /src/css 目录中
  - main.css: 全局样式、变量、基础样式
  - components.css: 组件样式（如卡片、按钮等）
  - layouts.css: 布局相关样式（如网格、容器等）

## 页面类型

包含以下页面类型，用于展示不同的内容，有自己的布局：

- 首页
- 项目列表
- 项目详情
- 博客列表
- 博客详情
- 普通页面（如联系方式、隐私政策等）

## 内容管理

- 首页: src/index.md
- 博客列表：src/blog/index.md
- 博客: src/blog/[slug]/index.md
- 项目列表：src/projects/index.md
- 项目: src/project/[slug]/index.md
- 其他: src/

## 页面占位符

演示的用的数据用 placehold.co 的占位符
