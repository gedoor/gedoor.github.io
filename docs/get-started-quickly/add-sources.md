---
title: 导入书源
sidebar_position: 2
---
import Giscus from '@giscus/react';

:::info 什么是书源
简单理解就是书籍资源的网络来源。众所周知，网络上存在许许多多或收费或免费的读书网站。然而，这些网站往往存在广告繁多、排版字体欠佳，对手机优化很差等情况。书源就是通过特定的规则，在网络上抓取书籍章节和内容，并干净整齐的呈现在手机屏幕上，优化阅读体验。
:::

### 本地导入

1. 添加书源文件到 `Read` 文件夹。
2. 导航栏“我的”界面，进入“书源管理”。
3. 点击右上角三个点 `⋮` 的图标，选择 `本地导入` 。
4. 在系统文件选择器里，点击您要添加的书源文件。
5. 加载完成后，勾选书源或直接全选后确定，完成。

:::tip 提示
一般书源分两种导入情况，本地文件和网络链接。
书源格式后缀有 `txt、json` ，其中 `json` 文件某些情况下无法导入，需要修改后缀为`txt`格式才可导入
:::

### 网络导入

1. 导航栏 `我的` 界面，进入 `书源管理` 。
2. 点击右上角三个点 `⋮` 的图标，选择 `网络导入` 。
3. 粘贴书源网址后点击确定。
4. 加载完成后，勾选书源或直接全选后确定，完成。

:::tip 提示
网路导入地址一般为:`https://域名/**.json`
:::

## 讨论

<Giscus
  id="comments"
  repo="gedoor/gedoor.github.io"
  repoId="MDEwOlJlcG9zaXRvcnkxNjExMjczMjM"
  category="General"
  categoryId="DIC_kwDOCZqbm84CQvbE"
  mapping="title"
  term="Comments"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme="preferred_color_scheme"
  lang="zh-CN"
  loading="lazy"
/>