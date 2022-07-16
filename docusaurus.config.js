// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '开源阅读',
  tagline: '阅读是一款免费且开源的Android小说阅读器',
  url: 'https://gedoor.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gedoor', // Usually your GitHub org/user name.
  projectName: 'gedoor.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gedoor/gedoor.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gedoor/gedoor.github.io/tree/master/',
          
            // 博客侧边栏展示全部博文
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',

          // RSS
          feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} 开源阅读, Inc.`,
            },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // 自动隐藏置顶导航栏
        hideOnScroll: true,
        
        title: 'Legado',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'right'},
          {
            href: 'https://github.com/gedoor/gedoor.github.io',
            label: 'GitHub',
            position: 'right',
            class: 'home_href'
          },
          // 翻译下拉框
/*           {
            type: 'localeDropdown',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '官网',
            items: [
              {
                label: '下载',
                to: '/download',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '使用教程',
                to: '/docs/intro',
              },
              {
                label: '完本小说推荐',
                to: '/endbook',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/yueduguanfang',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/qDE52P5xGW',
              },
            ],
          },
          {
            title: '条款',
            items: [
              {
                label: '隐私政策',
                href: '/PrivacyPolicyGenerator',
              },
              {
                label: '免责声明',
                href: '/Disclaimer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 开源阅读, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      

      // 公告栏
      announcementBar: {
        id: 'announcementBar-2',
        content:
          '⭐️ 如果你喜欢开源阅读，请关注 “开源阅读” 微信公众号',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: true,
      },

      // i18n
/*       i18n: {
        defaultLocale: 'zh',
        locales: ['zh', 'en'],
        localeConfigs: {
          zh: {
            htmlLang: 'zh-CN',
          },
          // You can omit a locale (e.g. fr) if you don't need to override the defaults
          en: {
            direction: 'en-GB',
          },
        },
      }, */
      
      
    }),
};

module.exports = config;
