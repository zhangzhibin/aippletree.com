# AI 协作规范

chat 使用中文

## 项目语言

本项目为 web app，默认使用英语作为第一语言。

## 页面布局

- 移动优先，兼顾桌面

## css

- 不使用 tailwind
- 吉卜力风格
- 模板和 css 分开, 模板不包含 css
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
- 项目: src/projects/[slug]/index.md
- 其他: src/

## 页面占位符

演示的用的数据用 placehold.co 的占位符

## 各司其职

- css 文件：存放 css 样式
- njk 文件：页面布局与公共组件，不含具体内容，尽量不硬编码，面向技术人员
- md 文件: 页面具体信息，frontmatter 设置页面属性，正文部分存放页面内容，数据等，面向运营人员

### 布局

- base.njk: 页面基础框架，为所有页面布局的基础
  - home.njk: 首页布局
  - projects.njk: 项目列表布局
  - blog.njk: 博客列表布局
  - project.njk: 项目详情布局
  - post.njk: 博客文章详情布局
  - page.njk: 其他页面布局

### 技术与运营

- njk 文件面向技术人员，存放技术相关配置
- md 文件面向运营人员，存放内容相关配置，不要增加非必要的技术参数，增加非技术人员的困扰

### 全局数据

全局组件和网站配置存在放在全局数据中 \_data

- site: 网站基础配置（标题、描述、社交媒体链接等）
- metadata: 网站元数据（SEO、统计等）
- navigation: 导航菜单结构
- global: 全局共享数据（如通用文本、配置等）

## 代码严谨

- 尽量使用 `{%- -%}` , 而不是 `{% %}`
