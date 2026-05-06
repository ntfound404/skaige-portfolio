# 司凯歌个人技术作品集官网

## 项目简介

本项目是司凯歌的个人技术作品集官方网站，用于集中展示全栈开发能力、代表项目与联系方式。站点采用 Vue 3 与 Vite 构建，风格为深色科技风，便于访客快速了解技术栈与项目经历。

## 技术栈

- Vue 3
- Vite
- Vue Router
- Tailwind CSS

## 核心页面

- **首页**：个人简介、核心能力与技能概览
- **关于我**：教育背景、实习经历、技能分类与个人优势
- **项目作品**：项目卡片与详情弹层
- **联系我**：邮箱、GitHub、电话等联系方式

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物默认输出至 `dist/`。可使用 `npm run preview` 在本地预览生产构建。

## 项目亮点

- 单页应用路由清晰，页面切换体验流畅
- 使用 Tailwind 实现一致的深色主题与响应式布局
- 项目数据与展示组件分离，便于维护与扩展
- 项目卡片支持状态展示、精选高亮与源码链接（有仓库时显示）
- 无额外运行时依赖，构建与部署轻量

## 联系方式

- 邮箱：<745846842@qq.com>
- 电话：18838907976
- GitHub：[@ntfound404](https://github.com/ntfound404)

## GitHub 仓库

<https://github.com/ntfound404/kaige-portfolio>

> 若简历下载按钮需生效，请将简历文件放置为项目根目录下的 `public/resume.pdf`（与 `profile.js` 中 `resumeUrl` 一致）。
