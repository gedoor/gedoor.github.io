# 开源阅读官网

* 该网站是使用现代静态网站生成器 [Docusaurus 2](https://docusaurus.io/) 构建的。
* 阅读APP项目地址 - [Github](https://github.com/gedoor/legado)

## 贡献

![Alt](https://repobeats.axiom.co/api/embed/b9b66434e3d3f5cead30df0bdfde0f62ecef5865.svg "Repobeats analytics image")

## 向网站贡献内容

你可以**专注于内容创作**，只需编写 Markdown 文件即可。

- [发布博文](https://docusaurus.io/zh-CN/docs/blog#adding-posts) - blog

- [添加文档](https://docusaurus.io/zh-CN/docs/create-doc) - docs

### 网站目录结构

```
gedoor.github.io # 网站的根目录
├──	blog	#博客
│	├──	2022-08-01-book-source.md	#八月书源更新
│	├──	authors.yaml	#作者信息
│	└──	...
├── docs	#文档
│	├──	GettingStarted.md	#入门
│   └── ...
├── src
│   └── pages	#独立页面
│		├──	download.md		#下载
│       └── ...
├── docusaurus.config.js	#网站配置
├── ...
```

## 帮助我们改进网站

### 安装阅读官网

Docusaurus 本质上是一组 [npm 包](https://github.com/facebook/docusaurus/tree/main/packages)。

#### 要求

- [Node.js](https://nodejs.org/en/download/)

  - v16.14 或以上版本（你可以运行 `node -v` 命令查看版本号）。

  - 你可以用 [nvm](https://github.com/nvm-sh/nvm) 来管理同一机器上的多个 Node 版本。
  - 安装 Node.js 时，建议勾选所有和依赖相关的选项。

#### 流程

##### 1.将项目克隆到本地

[您也可以使用 Github 桌面客户端](https://docs.github.com/cn/get-started/quickstart/contributing-to-projects#forking-a-repository)

1. [复刻仓库](https://docs.github.com/cn/get-started/quickstart/contributing-to-projects#forking-a-repository)

2. [克隆复刻](https://docs.github.com/cn/get-started/quickstart/contributing-to-projects#cloning-a-fork)

##### 2.运行开发服务器

> 要实时预览你的编辑，你可以运行本地开发服务器。它会部署你的网站，并反映最新更改。

1. 在 `gedoor.github.io` 文件夹空白处按下 `Shift` + `右键` ，选择 `在终端打开` 。

2. 在 Windows PowerShell 中运行下面代码：

   ```
   npm run start
   ```

默认情况下，浏览器会自动打开 http://localhost:3000 的新窗口。

恭喜！ 你刚刚成功运行了网站！ 四处逛逛，并对其改进。

##### 3.提交代码

1. [创建和推送更改](https://docs.github.com/cn/get-started/quickstart/contributing-to-projects#making-and-pushing-changes)

2. [创建拉取请求](https://docs.github.com/cn/get-started/quickstart/contributing-to-projects#making-a-pull-request)

