// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '开源阅读',
  tagline: '阅读是一款可以自定义网络来源内容的阅读工具。',
  url: 'https://gedoor.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gedoor', // Usually your GitHub org/user name.
  projectName: 'gedoor.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // 
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gedoor/gedoor.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gedoor/gedoor.github.io/tree/master/',
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
      /* 色彩模式 */
      /*  https://docusaurus.io/zh-CN/docs/api/themes/configuration#color-mode---dark-mode * */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      /* 告示条  */
      /* https://docusaurus.io/zh-CN/docs/api/themes/configuration#announcement-bar */
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ 如果你喜欢开源阅读，请关注 “开源阅读” 微信公众号',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: '开源阅读',
        logo: {
          alt: '开源阅读',
          src: 'img/logo.png',
          href: "https://www.legado.top/",
          target: "_self",
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/gedoor/gedoor.github.io',
            label: 'GitHub',
            position: 'right',
          },

          /* 语言下拉选框 */
          {
            type: 'localeDropdown',
            position: 'right',
            /* dropdownItemsAfter: [
              {
                to: 'https://www.legado.com/help-us-translate',
                label: '帮助我们翻译',
              },
            ], */
          },

          /* 按钮 */
          /* {
            type: 'html',
            position: 'right',
            value: '<button>提交反馈</button>',
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
    }),
};

module.exports = config;
